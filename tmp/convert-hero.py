from PIL import Image
from pathlib import Path
out=Path('assets/hero'); out.mkdir(exist_ok=True)
for p in Path('tmp/hero-originals').glob('*.png'):
    im=Image.open(p)
    print(p.name, im.size, im.mode)
    im.thumbnail((520,360) if '-photo-' in p.stem else (2100,2100))
    im.save(out/(p.stem+'.webp'), 'WEBP', quality=86, method=6)
