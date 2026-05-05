#!/usr/bin/env python3
"""Gera PNGs com wordmark do nome (OAuth 120px, Apple, PWA). Desenha em 512px e reduz (LANCZOS)."""
from __future__ import annotations

import os
import sys

from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT, "img")

BG = (10, 10, 15)
CYAN = (0, 240, 255)
VIOLET = (176, 38, 255)
WHITE = (226, 232, 240)
CANVAS = 512


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


def draw_wordmark_highres() -> Image.Image:
    img = Image.new("RGB", (CANVAS, CANVAS), BG)
    draw = ImageDraw.Draw(img)
    pad = 20
    draw.rounded_rectangle(
        [pad, pad, CANVAS - pad, CANVAS - pad],
        radius=44,
        outline=(40, 44, 58),
        width=4,
    )
    font_top = _font(56)
    font_mid = _font(38)
    font_bot = _font(56)
    lines: list[tuple[str, tuple[int, int, int], ImageFont.FreeTypeFont | ImageFont.ImageFont]] = [
        ("Lenilson", CYAN, font_top),
        ("Pinheiro", WHITE, font_mid),
        ("Valério", VIOLET, font_bot),
    ]
    heights = []
    for text, _c, font in lines:
        bbox = draw.textbbox((0, 0), text, font=font)
        heights.append(bbox[3] - bbox[1])
    gap = 10
    total_h = sum(heights) + gap * (len(lines) - 1)
    y = (CANVAS - total_h) // 2 - 8
    for (text, color, font), h in zip(lines, heights):
        bbox = draw.textbbox((0, 0), text, font=font)
        tw = bbox[2] - bbox[0]
        x = (CANVAS - tw) // 2
        draw.text((x, y), text, font=font, fill=color)
        y += h + gap
    return img


def render_size(side: int) -> Image.Image:
    src = draw_wordmark_highres()
    if side == CANVAS:
        return src
    return src.resize((side, side), Image.Resampling.LANCZOS)


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
        render_size(side).save(path, "PNG", optimize=True)
        print("Wrote", path)
    return 0


if __name__ == "__main__":
    sys.exit(main())
