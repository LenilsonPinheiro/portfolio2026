#!/usr/bin/env python3
"""Gera PNGs alinhados ao favicon.svg (LP, fundo #0a0a0f) para OAuth 120px, Apple 180px e PWA."""
from __future__ import annotations

import os
import sys

from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT, "img")

BG = (10, 10, 15)
CYAN = (0, 240, 255)
VIOLET = (176, 38, 255)


def _font(size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = [
        os.path.join(os.environ.get("WINDIR", "C:\\Windows"), "Fonts", "segoeuib.ttf"),
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


def draw_lp_icon(side: int) -> Image.Image:
    img = Image.new("RGB", (side, side), BG)
    draw = ImageDraw.Draw(img)
    pad = max(2, side // 32)
    rad = max(8, side // 5)
    draw.rounded_rectangle(
        [pad, pad, side - pad, side - pad],
        radius=rad,
        outline=(26, 26, 36),
        width=max(1, side // 64),
    )
    font_size = max(14, int(side * 0.34))
    font = _font(font_size)
    l_box = draw.textbbox((0, 0), "L", font=font)
    p_box = draw.textbbox((0, 0), "P", font=font)
    lw = l_box[2] - l_box[0]
    pw = p_box[2] - p_box[0]
    gap = max(1, side // 48)
    tw = lw + gap + pw
    l_h = l_box[3] - l_box[1]
    x = (side - tw) // 2
    y = (side - l_h) // 2 - max(1, side // 64)
    draw.text((x, y), "L", font=font, fill=CYAN)
    draw.text((x + lw + gap, y), "P", font=font, fill=VIOLET)
    return img


def main() -> int:
    os.makedirs(OUT_DIR, exist_ok=True)
    specs = [
        ("logo-app-120.png", 120),
        ("apple-touch-icon.png", 180),
        ("icon-192.png", 192),
        ("icon-512.png", 512),
    ]
    for name, side in specs:
        path = os.path.join(OUT_DIR, name)
        draw_lp_icon(side).save(path, "PNG", optimize=True)
        print("Wrote", path)
    return 0


if __name__ == "__main__":
    sys.exit(main())
