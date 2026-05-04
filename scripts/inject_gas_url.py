#!/usr/bin/env python3
"""
Substitui window.PORTFOLIO_APPS_SCRIPT_WEBAPP_URL = '...' em js/contact-endpoint.js
por um literal JSON (string JS segura). Usado no GitHub Actions antes do upload do artefacto.

Lê a URL da variável de ambiente GAS_URL (opcional; vazio mantém o formulário desativado no build).
"""
from __future__ import annotations

import json
import os
import re
import sys
from pathlib import Path


def main() -> None:
    root = Path(__file__).resolve().parent.parent
    path = root / "js" / "contact-endpoint.js"
    url = (os.environ.get("GAS_URL") or "").strip()
    text = path.read_text(encoding="utf-8")
    literal = json.dumps(url)
    new, n = re.subn(
        r"(window\.PORTFOLIO_APPS_SCRIPT_WEBAPP_URL\s*=\s*)(?:'[^']*'|\"[^\"]*\")(\s*;)",
        r"\1" + literal + r"\2",
        text,
        count=1,
    )
    if n != 1:
        print("inject_gas_url: não encontrou exatamente uma linha PORTFOLIO_APPS_SCRIPT_WEBAPP_URL", file=sys.stderr)
        sys.exit(1)
    path.write_text(new, encoding="utf-8")
    print("inject_gas_url: OK (" + ("URL definida" if url else "URL vazia") + ")")


if __name__ == "__main__":
    main()
