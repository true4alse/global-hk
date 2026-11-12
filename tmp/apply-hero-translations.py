from pathlib import Path
import json,re
keys='carouselLabel minimalTitle orKicker orClean orRooms orSpecialty orStaff nursingWards nursingHours nursingService nursingDescription rehabLead rehabPersonal rehabTreatment rehabDescription orPhotoAlt rehabPhotoAlt previous next pause play'.split()
for lang,values in json.loads(Path('tmp/hero-translations.json').read_text(encoding='utf-8')).items():
    assert len(values)==len(keys)
    p=Path('locales')/(lang+'.js')
    original=p.read_text(encoding='utf-8')
    match=re.search(r'const hero = (\{[\s\S]*?\n\});', original)
    hero=json.loads(match[1]); hero.update(dict(zip(keys,values)))
    replacement='const hero = '+json.dumps(hero,ensure_ascii=False,indent=2)+';'
    p.write_text(original[:match.start()]+replacement+original[match.end():],encoding='utf-8')
    # Verify every byte of non-hero content against this task's backup (newline-normalized).
    before=(Path('tmp/hero-before/locales')/p.name).read_text(encoding='utf-8')
    assert re.sub(r'const hero = \{[\s\S]*?\n\};','HERO',before)==re.sub(r'const hero = \{[\s\S]*?\n\};','HERO',p.read_text(encoding='utf-8'))
print('Updated hero only in all 9 locale files; other translations unchanged.')
