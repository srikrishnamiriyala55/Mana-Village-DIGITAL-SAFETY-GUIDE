"""Generate the original PWA shield icons. Optional: pip install Pillow."""
from pathlib import Path
from PIL import Image, ImageDraw

root = Path(__file__).resolve().parent.parent / 'public'
for size in (192, 512):
    scale = 4
    canvas = Image.new('RGB', (size * scale, size * scale), '#254e3c')
    draw = ImageDraw.Draw(canvas)
    def pts(values):
        return [(int(x / 512 * size * scale), int(y / 512 * size * scale)) for x, y in values]
    draw.polygon(pts([(256, 78), (392, 132), (392, 247), (377, 302), (347, 350), (306, 391), (256, 429), (206, 391), (165, 350), (135, 302), (120, 247), (120, 132)]), fill='#f5f3e9')
    draw.line(pts([(185, 251), (235, 302), (329, 194)]), fill='#254e3c', width=int(25 / 512 * size * scale), joint='curve')
    canvas.resize((size, size), Image.Resampling.LANCZOS).save(root / f'icon-{size}.png')
