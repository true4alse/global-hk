from pathlib import Path
import json,re
p=Path('index.html'); html=p.read_text(encoding='utf-8')
old=re.search(r'    <section class="hero"[\s\S]*?</section>',html).group()
stat=re.search(r'<div class="hero-statistic"[\s\S]*?(?=\n      <div class="hero-copy")',old).group().replace('7,208','2,500').replace('data-count','data-count data-target="2500"')
copy=re.search(r'<div class="hero-copy"[\s\S]*?(?=\n    </section>)',old).group()
def img(name,cls='',alt='',key=''):
    return f'<img class="{cls}" src="./assets/hero/{name}.webp" alt="{alt}"'+(f' data-i18n-alt="hero.{key}"' if key else '')+' decoding="async" draggable="false">'
def brand():
    return '<p class="hero-brand hero-decoration" aria-hidden="true"><span></span><span data-i18n-static="병원 영문 브랜드">HEUNG-K HOSPITAL</span></p>'
new='''    <section class="hero" aria-label="흥K병원 주요 진료 안내" data-i18n-label="hero.carouselLabel" data-figma-node="1812:3743">
      <div class="hero-slider swiper" dir="ltr">
        <div class="swiper-wrapper">
          <article class="hero-slide hero-slide--surgery swiper-slide" data-hero-slide="0" aria-labelledby="hero-minimal-title">
            <div class="hero-background-layer"><img class="hero-background" src="./assets/hero-surgery-optimized.webp" alt="" width="1920" height="971" fetchpriority="high" decoding="async"><div class="hero-shade"></div></div>
            <div class="hero-surgery-content">
              <h2 id="hero-minimal-title" class="hero-minimal-title hero-enter" data-hero="minimalTitle">최소절개 인공관절 수술</h2>
              '''+stat+'''
              '''+copy+'''
            </div>
          </article>
          <article class="hero-slide hero-slide--or swiper-slide" data-hero-slide="1" aria-labelledby="hero-or-title" data-figma-node="1775:3905">
            <div class="hero-background-layer">'''+img('hero-or-room','hero-background')+'''</div>
            <div class="hero-decoration hero-glass hero-glass--right" aria-hidden="true">'''+img('hero-or-glass')+'''</div>
            <div class="hero-decoration hero-glass hero-glass--left" aria-hidden="true">'''+img('hero-or-glass')+'''</div>
            <div class="hero-decoration hero-jelly" aria-hidden="true">'''+img('hero-or-jelly')+'''</div>
            <div class="hero-or-tint" aria-hidden="true"></div>
            <div class="hero-decoration hero-light hero-light--left" aria-hidden="true">'''+img('hero-or-light')+'''</div>
            <div class="hero-decoration hero-light hero-light--right" aria-hidden="true">'''+img('hero-or-light')+'''</div>
            '''+brand()+'''
            <div class="hero-feature-copy">
              <p class="hero-kicker hero-enter" data-hero="orKicker">안전한 수술을 위한</p>
              <h2 id="hero-or-title" class="hero-feature-title hero-enter"><span class="hero-blue" data-hero="orClean">고청정 초청결</span><span data-hero="orRooms">수술실 5개 운영</span></h2>
              <p class="hero-or-badge hero-enter"><span data-hero="orSpecialty">마취통증의학과</span><strong data-hero="orStaff">전문의 상주</strong></p>
              <div class="hero-thumbnails hero-enter">'''+''.join(img(f'hero-or-photo-{i}',alt='수술실 의료진의 수술 모습',key='orPhotoAlt') for i in range(1,5))+'''</div>
            </div>
          </article>
          <article class="hero-slide hero-slide--nursing swiper-slide" data-hero-slide="2" aria-labelledby="hero-nursing-title" data-figma-node="1768:3810">
            <div class="hero-background-layer">'''+img('hero-nursing','hero-background')+'''</div>
            <div class="hero-decoration hero-bokeh" aria-hidden="true">'''+img('hero-nursing-bokeh')+'''</div>
            '''+brand()+'''
            <div class="hero-feature-copy">
              <h2 id="hero-nursing-title" class="hero-feature-title hero-enter"><span><span data-hero="nursingWards">전 병동</span> <em data-hero="nursingHours">24시간</em></span><span data-hero="nursingService">간호간병 통합서비스</span></h2>
              <p class="hero-feature-description hero-enter" data-hero="nursingDescription">24시간 간호로 안심할 수 있는 입원 환경을 제공합니다.</p>
            </div>
          </article>
          <article class="hero-slide hero-slide--rehab swiper-slide" data-hero-slide="3" aria-labelledby="hero-rehab-title" data-figma-node="1775:3918">
            <div class="hero-background-layer">'''+img('hero-rehab','hero-background')+'''</div>
            <div class="hero-decoration hero-rehab-light" aria-hidden="true">'''+img('hero-rehab-light')+'''</div>
            '''+brand()+'''
            <div class="hero-feature-copy">
              <h2 id="hero-rehab-title" class="hero-feature-title hero-enter"><span data-hero="rehabLead">환자의 회복 단계를 고려한</span><span><em data-hero="rehabPersonal">1:1 맞춤형</em> <span data-hero="rehabTreatment">재활치료</span></span></h2>
              <p class="hero-feature-description hero-enter" data-hero="rehabDescription">개별 기능 평가를 바탕으로 체계적인 재활치료를 제공하여 신체 기능 회복과 일상생활 복귀를 돕습니다.</p>
              <div class="hero-thumbnails hero-thumbnails--rehab hero-enter">'''+''.join(img(f'hero-rehab-photo-{i}',alt='맞춤형 재활치료 시설',key='rehabPhotoAlt') for i in range(1,4))+'''</div>
            </div>
          </article>
        </div>
      </div>
      <div class="hero-controls" hidden>
        <button type="button" class="hero-previous" aria-label="이전 슬라이드" data-i18n-label="hero.previous"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 6-6 6 6 6"/></svg></button>
        <div class="hero-dots">
          <button type="button" data-hero-go="0" aria-label="최소절개 인공관절 수술" data-i18n-label="hero.minimalTitle" aria-current="true"></button>
          <button type="button" data-hero-go="1" aria-label="수술실 5개 운영" data-i18n-label="hero.orRooms"></button>
          <button type="button" data-hero-go="2" aria-label="간호간병 통합서비스" data-i18n-label="hero.nursingService"></button>
          <button type="button" data-hero-go="3" aria-label="재활치료" data-i18n-label="hero.rehabTreatment"></button>
        </div>
        <button type="button" class="hero-next" aria-label="다음 슬라이드" data-i18n-label="hero.next"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m10 6 6 6-6 6"/></svg></button>
        <button type="button" class="hero-toggle" aria-label="자동 슬라이드 정지" data-i18n-label="hero.pause" data-i18n-pause="hero.pause" data-i18n-play="hero.play" data-pause="자동 슬라이드 정지" data-play="자동 슬라이드 재생"><svg class="hero-pause-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6v12M15 6v12"/></svg><svg class="hero-play-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 9 6-9 6Z"/></svg></button>
      </div>
    </section>'''
p.write_text(html.replace(old,new),encoding='utf-8')
p=Path('js/scroll-motion.js'); p.write_text(p.read_text(encoding='utf-8').replace("'.hero-background, .apkass-skyline", "'.apkass-skyline"),encoding='utf-8')
