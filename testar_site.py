#!/usr/bin/env python3
"""
Testes de regressão: homepage e assets críticos em produção (GitHub Pages).
"""
from __future__ import annotations

import ssl
import sys
import time
import urllib.error
import urllib.request

BASE = "https://lenilsonpinheiro.github.io/portfolio2026"
ASSETS = [
    ("/", "index", ["<html", "lenilson", "contact-endpoint.js", "contact-form.js", "contactform"]),
    ("/index.html", "index.html", ["<html", "lenilson"]),
    ("/sw.js", "sw", ["addEventListener", "CACHE_NAME", "baseDir"]),
    ("/css/site.css", "css", ["body", "{"]),
    ("/js/contact-endpoint.js", "contact-endpoint", ["PORTFOLIO_APPS_SCRIPT_WEBAPP_URL"]),
    ("/js/contact-form.js", "contact-form", ["contactForm", "portfolio:i18n-applied"]),
    ("/js/i18n.js", "i18n", ["applyLanguage", "T"]),
    ("/site.webmanifest", "manifest", ["name", "icons"]),
    ("/robots.txt", "robots", ["User-agent", "Sitemap"]),
    ("/sitemap.xml", "sitemap", ["<urlset", "loc"]),
    ("/llms.txt", "llms", ["Portfolio"]),
    ("/favicon.svg", "favicon", ["<svg", "viewBox"]),
]


def fetch(url: str, ctx: ssl.SSLContext) -> tuple[int, bytes]:
    req = urllib.request.Request(url)
    req.add_header("User-Agent", "Mozilla/5.0 (compatible; LP-PortfolioTest/1.0)")
    with urllib.request.urlopen(req, timeout=15, context=ctx) as resp:
        return resp.getcode(), resp.read()


def run_once(ctx: ssl.SSLContext) -> bool:
    ok_all = True
    for path, label, needles in ASSETS:
        url = BASE.rstrip("/") + path
        try:
            code, body = fetch(url, ctx)
        except urllib.error.HTTPError as e:
            print(f"[FALHA] {label} ({path}): HTTP {e.code}")
            ok_all = False
            continue
        except Exception as e:
            print(f"[FALHA] {label} ({path}): {e}")
            ok_all = False
            continue

        if code != 200:
            print(f"[FALHA] {label}: status {code}")
            ok_all = False
            continue

        text = ""
        try:
            text = body.decode("utf-8")
        except UnicodeDecodeError:
            if label == "favicon":
                text = body.decode("utf-8", errors="ignore")
            else:
                print(f"[AVISO] {label}: não é UTF-8 (binário OK)")
                text = ""

        low = text.lower()
        missing = [n for n in needles if n.lower() not in low]
        if missing:
            print(f"[FALHA] {label}: faltam trechos {missing!r}")
            ok_all = False
        else:
            print(f"[OK] {label} ({len(body)} bytes)")

    return ok_all


def test_site() -> bool:
    print(f"Base: {BASE}\n")
    ctx = ssl.create_default_context()

    for attempt in range(5):
        print(f"--- Rodada {attempt + 1}/5 ---")
        if run_once(ctx):
            print("\n[SUCESSO] Todos os checks passaram.")
            return True
        if attempt < 4:
            print("   Aguardando 15s antes de repetir...\n")
            time.sleep(15)

    print("\n[ERRO] Checks falharam após 5 tentativas.")
    print("   Pages: https://github.com/LenilsonPinheiro/portfolio2026/settings/pages")
    return False


if __name__ == "__main__":
    sys.exit(0 if test_site() else 1)
