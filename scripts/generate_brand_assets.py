#!/usr/bin/env python3
"""
Gera ícones PNG a partir do design system do portfólio (#0a0a0f, cyan→violet).
LP em gradiente (máscara); wordmark OAuth refinado para logo-app-120.png.
"""
from __future__ import annotations

import os
import sys

from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT, "img")

BG = (10, 10, 15)
CYAN = (0, 240, 255)
MID = (0, 180, 255)
VIOLET = (176, 38, 255)
RIM = (42, 52, 72)
WHITE = (228, 232, 240)
MUTED = (140, 145, 160)

MASTER = 1024


def _font(size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = [
        os.path.join(os.environ.get("WINDIR", "C:\\Windows"), "Fonts", "segoeuib.ttf"),
        os.path.join(os.environ.get("WINDIR", "C:\\Windows"), "Fonts", "segoeui.ttf"),
        os.path.join(os.environ.get("WINDIR", "C:\\Windows"), "Fonts", "arialbd.ttf"),
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
    ]
    for path in candidates:
        if os.path.isfile(path):
            try:
                return ImageFont.truetype(path, size=size)
            except OSError:
                continue
    return ImageFont.load_default()


def _mono_font(size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = [
        os.path.join(os.environ.get("WINDIR", "C:\\Windows"), "Fonts", "seguisb.ttf"),
        os.path.join(os.environ.get("WINDIR", "C:\\Windows"), "Fonts", "consolab.ttf"),
        os.path.join(os.environ.get("WINDIR", "C:\\Windows"), "Fonts", "courbd.ttf"),
        "/usr/share/fonts/truetype/dejavu/DejaVuSansMono-Bold.ttf",
    ]
    for path in candidates:
        if os.path.isfile(path):
            try:
                return ImageFont.truetype(path, size=size)
            except OSError:
                continue
    return _font(size)


def _lerp_rgb(t: float, a: tuple[int, int, int], b: tuple[int, int, int]) -> tuple[int, int, int]:
    return (
        int(a[0] + (b[0] - a[0]) * t),
        int(a[1] + (b[1] - a[1]) * t),
        int(a[2] + (b[2] - a[2]) * t),
    )


def _gradient_image(w: int, h: int) -> Image.Image:
    img = Image.new("RGB", (w, h))
    px = img.load()
    for y in range(h):
        for x in range(w):
            t = (x * 0.55 + y * 0.45) / max(w + h, 1)
            if t < 0.5:
                c = _lerp_rgb(t * 2, CYAN, MID)
            else:
                c = _lerp_rgb((t - 0.5) * 2, MID, VIOLET)
            px[x, y] = c
    return img


def draw_lp_badge(px_size: int) -> Image.Image:
    w = h = MASTER
    base = Image.new("RGB", (w, h), BG)
    draw = ImageDraw.Draw(base)
    pad = int(w * 0.065)
    rad = int(w * 0.212)
    inset = max(2, w // 220)
    draw.rounded_rectangle(
        [pad, pad, w - pad, h - pad],
        radius=rad,
        fill=BG,
        outline=RIM,
        width=inset,
    )
    font = _font(int(w * 0.345))
    text = "LP"
    bbox = draw.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    tx = (w - tw) // 2
    ty = (h - th) // 2 - int(w * 0.018)
    mask = Image.new("L", (w, h), 0)
    ImageDraw.Draw(mask).text((tx, ty), text, font=font, fill=255)
    grad = _gradient_image(w, h)
    comp = Image.composite(grad, base, mask)
    if px_size != MASTER:
        comp = comp.resize((px_size, px_size), Image.Resampling.LANCZOS)
    return comp


def draw_oauth_wordmark(px_size: int = 120) -> Image.Image:
    """Cartão OAuth: nome em 3 linhas + rótulo mono + moldura fina."""
    src = 480
    img = Image.new("RGB", (src, src), BG)
    draw = ImageDraw.Draw(img)
    margin = 22
    draw.rounded_rectangle(
        [margin, margin, src - margin, src - margin],
        radius=36,
        fill=BG,
        outline=RIM,
        width=3,
    )
    f1 = _font(54)
    f2 = _font(40)
    f3 = _font(50)
    fm = _mono_font(19)
    lines = [
        ("Lenilson", f1, CYAN),
        ("Pinheiro", f2, WHITE),
        ("Valério", f3, VIOLET),
    ]
    block_h = 0
    boxes = []
    for s, font, _ in lines:
        bb = draw.textbbox((0, 0), s, font=font)
        boxes.append(bb)
        block_h += bb[3] - bb[1] + 8
    bb_tag = draw.textbbox((0, 0), "PORTFOLIO", font=fm)
    block_h += 28 + (bb_tag[3] - bb_tag[1])
    y = (src - block_h) // 2 + 6
    for (s, font, color), bb in zip(lines, boxes):
        tw = bb[2] - bb[0]
        x = (src - tw) // 2
        draw.text((x, y), s, font=font, fill=color)
        y += bb[3] - bb[1] + 8
    y += 4
    line_w = src - 2 * 56
    lx = (src - line_w) // 2
    draw.line([(lx, y), (lx + line_w, y)], fill=RIM, width=2)
    y += 14
    tag = "PORTFOLIO"
    bb = draw.textbbox((0, 0), tag, font=fm)
    tw = bb[2] - bb[0]
    draw.text(((src - tw) // 2, y), tag, font=fm, fill=MUTED)
    out = img.resize((px_size, px_size), Image.Resampling.LANCZOS)
    return out


def main() -> int:
    os.makedirs(OUT_DIR, exist_ok=True)
    badge_sizes = [
        ("favicon-16.png", 16),
        ("favicon-32.png", 32),
        ("favicon-48.png", 48),
        ("apple-touch-icon.png", 180),
        ("icon-192.png", 192),
        ("icon-512.png", 512),
    ]
    for name, side in badge_sizes:
        path = os.path.join(OUT_DIR, name)
        draw_lp_badge(side).save(path, "PNG", optimize=True)
        print("Wrote", path)
    oauth_path = os.path.join(OUT_DIR, "logo-app-120.png")
    draw_oauth_wordmark(120).save(oauth_path, "PNG", optimize=True)
    print("Wrote", oauth_path)
    return 0


if __name__ == "__main__":
    sys.exit(main())
