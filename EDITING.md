# 직접 수정할 때

## 카티스템 치료박스 (2026-09-27)
- MAKO 다음 시안 노드 `700:1764`를 `index.html`의 `#knee-cartistem`으로 추가했습니다. 소개 배너, 준비과정 4단계, 장점 4개, 수술과정 4단계, 치료 전/1년 후 비교까지 포함합니다.
- 문구·이미지·순서는 HTML에서 수정하고, `cartistem...` 키의 기본 문구와 `locales/ko.js`의 `centerTreatments`를 함께 수정합니다. 새 문구 32개를 본문·alt·버튼에 연결했습니다.
- 공통 `center-treatment`의 베이지 배경 `#EFECE9`, 펼침/접힘과 화면 진입 모션을 그대로 재사용합니다. 준비과정 회색 배경은 시안의 `#E3E3E3`입니다.
- 공통 배치 클래스: `center-treatment-reading-copy`, `center-treatment-row`, `center-treatment-sequence`, `center-treatment-icon-list`, `center-treatment-result-pair`. 이후 유사한 센터 상세에서도 재사용할 수 있습니다.
- 원본 이미지: `assets/knee-center/cartistem/`. Figma 디자인 컨텍스트로 문구·배치·노드를 확인했고, 이미지 응답이 빈 파일로 반환되어 사용자 지정 `.fig`에서 동일 노드의 원본을 추출했습니다. WebP는 크기·픽셀을 바꾸지 않는 무손실 저장이며 원본과 RGBA 픽셀 일치를 확인했습니다.
- 준비과정은 원본 한 장을 HTML에 4회 연결하고 시안과 같은 프레임 위치로 잘라 표시합니다. 각 범위는 CSS의 `center-treatment-preparation-photo--1`~`--4`에서 수정합니다. 사진 파일 자체를 잘라내지는 않았습니다. 화살표는 원본 벡터입니다.
- 1400px 이하에서 과정 제목과 목록을 세로로 배치하고, 1100px 이하 준비·수술과정은 2열로 표시합니다. 모바일은 준비과정·장점을 2열, 수술과정을 1열로 정리하며 380px 이하 준비과정도 1열로 표시합니다. 확정 모바일 시안이 없는 영역은 적응형입니다.

## 치료박스 공통 애니메이션 (2026-09-27)
- 무릎·어깨·손발 등 앞으로 추가할 모든 치료박스는 `center-treatment` 공통 구조를 그대로 사용합니다. 번역 문구도 기존 기준대로 HTML과 ko.js를 동시에 등록합니다.
- `js/center-treatment.js`: 펼침 720ms / 접힘 560ms. 중간에 다시 누르면 현재 높이에서 반대 방향으로 이어지고, 펼치는 중 반응형 높이가 바뀌어도 새 높이에 맞춥니다.
- `css/center-treatment.css`: 상세의 제목·문단·캡션·배지·이미지가 왼쪽 36px에서 1.1초 동안 나타납니다. 화면 진입 때 실행하므로 긴 상세의 아래 내용도 스크롤에 맞춰 등장합니다. 접었다 다시 열면 재생합니다.
- 기본 요소는 자동으로 연결되며, 다른 형태의 콘텐츠 묶음은 HTML에 `data-center-treatment-reveal`을 붙여 함께 움직일 수 있습니다. 배경 장식 등은 `data-center-treatment-reveal="none"`으로 제외합니다. 워터마크와 연결 화살표는 움직이지 않습니다.
- 모션 감소 설정에서는 즉시 표시하고, JS가 없으면 기본 details 동작을 유지합니다. 관련 검사는 `node --test scripts/center-treatment.test.mjs`입니다.

## 모든 후속 작업의 문구 편집 기준 (2026-09-27)
- **HTML에 기본 한국어를 남기고, 같은 문구를 `locales/ko.js`에 함께 등록·수정합니다.** 키만 붙이고 ko.js 등록을 미루지 않습니다. 아래 과거 기록보다 이 기준을 우선합니다.
- 본문은 기존 `data-global="hssTitle"`, `data-knee="title"`, `data-center-treatment="makoTitle"` 같은 키를 사용합니다. 공통 문구는 `data-i18n="about.title"`처럼 전체 경로를 적습니다.
- 이미지의 `src`·순서·숫자는 HTML에서만 수정합니다. `alt` 문구는 HTML과 `data-i18n-alt`가 가리키는 ko.js 값을 함께 수정합니다. 버튼 접근성 이름은 `data-i18n-label`로 연결합니다.
- 강조색·밑줄이 있는 문장은 각 span에 키를 붙입니다. 부모 전체를 번역하면 강조가 없어지므로 금지합니다. HTML의 `<br>`는 ko.js의 `\n`과 대응하며 `data-i18n-lines`가 줄바꿈을 표시합니다.
- 재생/정지 버튼은 HTML의 `data-play`·`data-pause`에 기본 문구를 남기고 `data-i18n-play`·`data-i18n-pause`로 두 상태를 모두 연결합니다.
- `js/translations.js`가 각 섹션의 정적 문구를 한 번에 연결한 뒤 섹션별 JS가 동작을 붙입니다. 키가 누락되면 HTML 기본 문구를 유지합니다.
- 현재 헤더부터 HSS·MIS·차별화 치료·절개 비교·카데바·연구·의료진·무릎센터·MAKO 상세까지 연결했습니다. 브랜드 고유 표기·언어 자국어 이름은 이유를 적은 `data-i18n-static`으로 제외합니다. 합성 이미지 안의 글자는 이미지에 남아 있으므로 후속 다국어 작업에서 별도 이미지를 검토합니다.
- 검증: `python scripts/check_locales.py` (HTML/ko.js 누락·불일치·부모 덮어쓰기), `node --test scripts/translations.test.mjs` (누락 키 대체·강조 보존·속성 연결). 실제 화면에서는 줄바꿈·강조·반응형·재생/정지·드롭다운을 확인합니다.

## 무릎전담센터 배너 (2026-09-26)
- 추가 보완: 사용자가 제공한 `bggrid.png`를 배경에 연결했습니다. `index.html`의 `knee-center-grid-pattern` 안 `image href`가 원본 경로이며, SVG 패턴으로 40% 크기 반복을 처리합니다. JavaScript 복제는 없습니다. 격자 불투명도는 `css/knee-center.css`의 `.knee-center-grid`에서 조절합니다(22%).
- 반응형 기사·의료진은 `.knee-center-visuals`에 묶었습니다. 기사는 뒤쪽 위(폭 74%), 의료진은 앞쪽 아래에 배치하여 배너 맨 아래가 의료진으로 끝납니다. 겹침은 `.knee-center-doctors`의 `margin: 30% 0 0`에서 조절합니다.
- 구현 범위: 의료진 소개 다음의 무릎전담센터 배너까지. 배너 아래의 개별 수술 설명과 센터 퀵메뉴는 이번 범위에 포함하지 않습니다.
- `index.html`의 `id="knee-center"`에서 제목·설명·치료 목록·의료진·기사 이미지와 링크를 직접 수정합니다.
- `assets/knee-center/`의 8개 이미지는 다운로드 폴더의 `흥케이병원 글로벌 사이트 한글버전 기준.fig`에서 추출한 원본입니다. 기사 검색이나 이미지 대체 없이 사용했고, 추출 파일이 백업 원본과 동일함을 확인했습니다.
- 시안 노드: 배너 `666:984`, 기사 인스턴스 `669:1006` / 원본 `669:1000`. 기사 파일은 `chosun-article.png`이며 클릭하면 원본을 새 창에서 엽니다.
- 의료진 사진은 김종근·이준영 각각의 독립된 PNG입니다. 월계수는 원본 한 장을 HTML에 두 번 연결하고 오른쪽만 CSS로 반전합니다.
- `css/knee-center.css`: PC 시안 1921×1243 비율, 금색 제목, 배경과 금빛 곡선, 의료진·기사 배치. 1200px 이하에서는 문구 아래에 기사와 의료진을 겹쳐 배치합니다. 모바일은 별도 확정 시안이 없어 적응형입니다.
- `js/knee-center.js`: 화면 진입 시 1.1초 동안 한 번 등장시킵니다. `knee` 번역은 `js/translations.js`가 `data-knee` 키에 연결합니다. 이미지 경로 삽입·콘텐츠 생성·복제는 하지 않습니다. JS 비활성화 또는 모션 감소 설정에서는 기본 콘텐츠를 표시합니다.
- 기존 섹션 CSS와 의료진 목록은 유지했습니다. 확인: 1920·1280·768·390·320px 가로 넘침 없음, 배너 이미지 9개 요소 로딩, 등장 완료 및 관련 JS 문법·콘솔 오류 없음.

- 이미지·아이콘: index.html의 img src를 변경합니다. JavaScript에는 이미지 경로가 없습니다.
- 마키 사진: 해당 줄의 img 태그를 추가·삭제·정렬합니다. 각 줄 2장 이상이면 반복 이동하며 1장이면 정지합니다.
- 통계: index.html의 about-stat-value 안 숫자 한 곳만 변경합니다. 히어로는 hero-number 안 숫자입니다.
- 번역 문구·사진 alt: index.html의 기본 문구와 locales/ko.js의 연결된 값을 함께 수정합니다.
- 크기·위치: css/header.css, hero.css, about.css에서 수정합니다.
- 애니메이션: js/hero.js, about.js는 기존 HTML 요소를 읽어 동작만 적용합니다.

청진기는 index.html에서 stethoscope를 검색하세요. 현재 세 SVG 조각이며 완성 SVG가 준비되면 해당 span 안의 img 세 개를 하나로 교체하면 됩니다.

## GLOBAL EXCELLENCE / 5년·17년
- `index.html`에서 `global-excellence` 검색: 배경 사진 src, 화관 이미지, 숫자(data-global-count)를 수정합니다.
- `locales/ko.js`의 global: 제목·설명·평가 문구 번역.
- `css/global.css`: 반응형 배치, sticky 배경 글자, 블러와 텍스트 효과.
- `js/global.js`: 화면 진입 감지 및 2.4초 카운트업.
- 이후 HSS 콘텐츠를 global-stage 내부에 이어 넣으면 sticky 범위도 확장됩니다.

## HSS 소개 / 글로벌 의료 교류
- 구현 범위: ‘세계 정형외과의 기준 HSS’부터 의료 교류 사진 콜라주까지. 다음 ‘최소절개 인공관절 수술’은 아직 구현하지 않았습니다.
- `index.html`에서 `hss-story` 검색: 한국어 제목·설명, 사진 src·alt·순서를 직접 수정합니다.
- 원본 사진은 `assets/hss/`, PC·모바일 배치는 `css/hss.css`입니다.
- `data-global` 키는 `locales/ko.js`의 global과 연결됩니다. HSS 문구를 변경하면 HTML과 ko.js를 함께 수정합니다.
- 기존 `js/global.js`를 재사용해 텍스트를 왼쪽에서 오른쪽으로 등장시킵니다.
- HSS IN KOREA 스티키와 100% → 15% 변화가 이 영역 끝까지 이어집니다.

### HSS 워터마크
- 색상은 `css/global.css`의 `.global-watermark` (`#50bfc0`)에서 수정합니다.
- `.global-sticky-layer`는 `global-stage` 전체를 덮어 HSS 소개·의료 교류 끝까지 sticky를 유지합니다.
- `js/global.js`에서 같은 stage를 기준으로 opacity 1 → 0.15를 계산합니다.

### HSS 사진·텍스트 등장 효과
- `index.html`의 사진 `data-hss-image="left"`는 왼쪽에서, `"right"`는 오른쪽에서 등장합니다.
- `css/hss.css`의 `--hss-delay`는 사진 간 시간차, `1.1s`는 등장 시간입니다.
- 제목·설명은 왼쪽에서 등장하며 설명에 140ms·280ms 시간차를 둡니다.
- 각 요소가 화면에 진입했을 때 한 번 실행합니다. 사진은 로딩 후 등장하며, 모션 감소 설정에서는 즉시 표시됩니다.

## MIS TKA / 최소절개 인공관절 수술
- 범위: 최소절개 인공관절 수술 소개 → 무릎뼈와 양쪽 문구 → ‘무엇이 다른가요?’ 비교 설명까지.
- `index.html`에서 `mis-tka` 검색: 한국어 문구와 이미지 src를 직접 수정합니다. 다른 언어는 `data-mis` 키를 해당 locale의 `mis`에 추가합니다.
- 이미지: `assets/mis/doctor-background.png`, `knee-visual.png`, `incision-comparison.png` (Figma 백업 원본).
- 배치와 반응형: `css/mis.css`. 왼쪽 `mis-side-label`의 sticky는 MIS 전체 영역에 한정됩니다.
- 효과: `js/mis.js`에서 각 요소의 화면 진입을 감지합니다. 의사 사진은 2.2초 블러 해제, 기본 문구는 왼쪽에서 1.1초 동안 등장합니다.
- 중앙 순서: 무릎뼈 0~1.1초 → 왼쪽 문구 1.25초에 오른쪽에서 등장 → 오른쪽 문구 1.5초에 왼쪽에서 등장.
- 모션 감소 설정과 JS 비활성화 시에도 콘텐츠를 읽을 수 있습니다.

- 비교 설명 아이콘 3개는 원본 SVG 대기 중입니다. `mis-benefit-list`의 각 `li` 안에서 텍스트 `div` 앞에 `img`를 추가하면 됩니다.


### 2026-09-22 헤더·MIS 보완
- MIS 아이콘 3개 원본 연결 완료: assets/mis/icon-mis1.svg ~ icon-mis3.svg. HTML의 mis-benefit-list에서 수정합니다. 이전 아이콘 대기 안내는 해결되었습니다.
- 의사 배경 불투명도는 css/mis.css의 .mis-doctor img에서 수정합니다 (기본 30%, 모바일 25%).
- 고정 헤더는 아래로 스크롤 시 2층 메뉴만, 위로 스크롤 시 1·2층 모두 표시합니다. css/header.css와 js/header.js 하단의 한국어 주석을 참고하세요.

- 새 로고 교체 반영 완료: assets/logo.svg (553×80). .hospital-logo는 원본 비율을 유지하며 좌우 버튼 폭과 무관하게 중앙 정렬됩니다.


## 차별화된 치료 / JK Minimal (2026-09-22)
- 구현 범위: ‘흥K병원은 차별화된 치료를 제공합니다’ → 특허 액자·JK Minimal → 최대 효율/최소 손상/최소 절개 → 전략 카드 3개까지.
- HTML에서 differentiated-treatment를 검색해 문구와 이미지 src를 수정합니다. 이미지 원본은 assets/treatment/입니다. Mobile Window Technique는 현재 프로토타입과 같이 텍스트 카드입니다.
- css/treatment.css에서 PC·모바일 배치와 애니메이션 시간(1.1초), 이동 거리(문구 36px, 액자 60px)를 수정합니다.
- js/treatment.js는 번역과 화면 진입 효과만 연결합니다. data-treatment-reveal="up"은 아래에서 위, 기본 속성은 왼쪽에서 오른쪽입니다. 각 요소는 한 번만 실행됩니다.
- locale의 treatment에 data-treatment 키와 같은 이름으로 번역을 추가할 수 있습니다. JS 비활성화나 모션 감소 설정에서도 본문은 표시됩니다.


### 2026-09-23 치료 영역 보완
- 사용자 수정 CSS(배경 높이, PC·모바일 리본 위치, 360px 이하 기구 크기)를 보존한 채 도면 배경과 연결선을 추가했습니다.
- 도면 배경은 index.html의 treatment-blueprint 이미지입니다. 원본: assets/treatment/heungk-white-mint-blueprint-bg.png.
- 기구 이미지 선택자는 treatment-instrument-image로 구분했습니다. 배경에 기구 회전·크기 스타일이 적용되지 않도록 하기 위함입니다.
- 연결선 태그는 HTML에 있으며, js/treatment.js의 connectTreatmentLabels가 창 크기·문구 크기 변경 시 좌표만 갱신합니다. 모바일 최대 효율 연결선은 설명 문단 바깥 여백을 따라갑니다.
- 연결선 색과 두께는 css/treatment.css 하단 treatment-connector 규칙에서 수정합니다.


## 작은 절개, 눈으로 확인되는 차이 (2026-09-23)
- 범위: 68세·72세·79세 비교 사진 3장 및 최소절개 인공관절 수술의 장점 4개까지.
- index.html에서 incision-results 검색: 이미지 src, 나이, 점선 위치(--mark-*), 문구를 직접 수정합니다.
- 이미지: assets/incision/case-68.png, case-72.png, case-79.png. Figma 백업의 원본 이미지를 사용합니다.
- 배치: css/incision.css. PC 사진 3열, 700px 이하 사진 1열. 장점은 PC 4열, 태블릿 2열, 작은 모바일 1열입니다.
- 효과: js/incision.js. 문구는 왼쪽에서, 사진은 아래에서 1.1초 동안 한 번 등장합니다. 모션 감소 설정에서는 즉시 표시됩니다.
- 다국어: locale의 incision 객체에 data-incision 키와 같은 번역 문구를 추가합니다. 한국어 원본은 HTML이며 이미지·나이는 번역 파일에 넣지 않습니다.
- 장점 아이콘: assets/treatment/tj1.svg ~ tj4.svg를 각 li의 h4 앞에 HTML img 태그로 연결했습니다. 크기와 간격은 css/incision.css의 .incision-benefit-icon에서 수정합니다.


## CADAVER 워크숍 → 트로피 (2026-09-23)
- 범위: 4 / CADAVER 소개와 파란 배경 사진, 금빛 액자 2개, 중앙 트로피까지. 다음 섹션은 추가하지 않았습니다.
- index.html에서 id="cadaver" 검색: 문구·이미지 경로를 직접 수정합니다. 번역은 locale의 cadaver 객체와 data-cadaver 키로 연결됩니다.
- css/cadaver.css: 파란 배경, 금빛 제목, 사진 배치, 반응형 및 등장 효과. 기존 섹션의 CSS는 변경하지 않았습니다.
- js/cadaver.js: 문구 번역 및 화면 진입 시 한 번 실행하는 효과. 문구는 왼쪽→오른쪽(1.1초), 배경은 블러 해제(2.2초), 트로피는 아래→위(1.4초). 모션 감소 설정과 JS 비활성화 시에도 표시됩니다.
- assets/cadaver/workshop-group-framed.svg, workshop-collage-framed.svg: 원본 액자와 사진을 하나로 조합한 완성 이미지. 사진을 웹용 WebP로 압축해 SVG 안에 내장하여 외부 파일 참조가 없습니다. 웹페이지에서는 액자당 img 하나만 사용합니다.
- 모바일은 액자 2개를 세로로 배치하고 트로피를 아래에 두어 사진을 가리지 않습니다.


## 연구 성과 / PUBLICATIONS (2026-09-23)
- 범위: `#research`의 “임상 경험을 연구 성과로 이어갑니다”부터 논문 액자까지.
- 문구, 원장 사진, 캡션, 액자는 `index.html`에 직접 작성했습니다. `assets/research/`에서 이미지를 교체할 수 있습니다.
- 사진은 `Frame 53` 시안의 AAOS 발표 / 연세대학교 워크숍 / 정형외과 학술 발표 3종입니다. 무한 슬라이드에 필요한 동일한 두 벌을 HTML에 작성했으므로 사진 교체 시 두 곳을 함께 수정합니다.
- Swiper 12.2.0은 `assets/vendor/swiper/`에 저장했습니다. 외부 CDN 접속 없이 작동하고 라이선스도 포함합니다. 참고: https://swiperjs.com/swiper-api
- 사진 자동 전환: `js/research.js`의 `autoplay.delay: 2000`(2초), `speed: 650`(0.65초 이동). 직접 넘기기·터치 스와이프·재생 정지 지원.
- 액자 마키: `css/research.css`의 `research-marquee` 80초(모바일 70초). 동일한 A/B 목록을 HTML에 작성해 CSS만으로 연결합니다. JS 이미지 생성/복제 없음.
- 액자는 실제 흰 액자와 논문 원본을 함께 포함한 SVG 한 장씩입니다. 한국어 문구가 HTML 원본이고 `data-research`에 맞는 locale.research 번역 문자열만 선택적으로 연결합니다.
- 글자 좌→우 등장은 1.1초. 화면 밖/백그라운드에서는 자동 움직임 정지. OS의 동작 줄이기에서는 자동 슬라이드와 마키를 끄고 수동 탐색을 유지합니다.
- 기존 사용자 CSS는 수정하지 않고 연구 성과 전용 파일만 추가했습니다.


## SPECIALTY CENTER / 의료진 소개 (2026-09-24)
- 범위: 연구 논문 액자 다음의 6 / SPECIALTIES, HEUNG-K, SPECIALTY CENTER 제목과 의료진 9명까지. 이후 무릎전담센터는 다음 작업입니다.
- Figma MCP 사용량 한도로, 사용자 승인에 따라 브라우저에서 확인한 시안과 로컬 개별 원본 사진을 기준으로 구현했습니다. 모바일은 별도 확정 시안이 없어 적응형으로 배치했습니다.
- `index.html`의 `id="specialty-center"`에서 수정합니다. 제목은 실제 텍스트이며 의료진은 통이미지가 아닌 9개의 독립된 `img`입니다.
- 사진 교체: 해당 의료진의 `img src`, `alt`, 원본 크기(`width`/`height`)를 변경합니다. 인원 추가·삭제·순서 변경은 `specialty-doctor`의 `li` 단위로 합니다. JS에 이미지 경로나 인원 목록이 없습니다.
- 개별 사진: `assets/specialty/`. 원본은 프로젝트 상위 `리소스/의료진수정2차/` 7장과 `홈페이지 자료/의료진 사진/`의 이경화·황재연 사진입니다. 원본 PNG를 변경 없이 복사했습니다.
- 왼쪽부터 이경화 / 박진형 / 이수건 / 김세훈 / 김종근 / 김준성 / 이명철 / 황재연 / 정승진 순입니다. 파일명으로 의료진을 구분할 수 있습니다.
- `css/specialty.css`: PC 9명 한 줄(인원 수에 맞춰 같은 폭), 1000px 이하 5열, 600px 이하 3열. 각 사진의 위쪽 기준과 크기는 `.specialty-doctor img`, `--doctor-offset`에서 조절합니다.
- `js/specialty.js`: 화면 진입 시 아래에서 위로 1.1초 동안 한 번 등장합니다. JS 미사용 또는 모션 감소 설정에서는 기본 콘텐츠가 표시됩니다. 다른 언어의 사진 설명은 locale의 `specialty`에 `data-specialty-alt`와 같은 키로 추가할 수 있습니다. 한국어 alt는 HTML이 원본입니다.
- 상단 SPECIALTIES 메뉴는 `#specialty-center`로 연결했습니다.
- 확인: JS 문법, 브라우저 콘솔 오류 없음, 1920·1280·768·390·320px 가로 넘침 없음, 의료진 이미지 9장 로딩 완료. 기존 섹션 CSS는 변경하지 않았습니다.

## MAKO 공통 치료 박스 (2026-09-27)
- 구현 범위: 무릎전담센터 배너 다음의 Robot-Assisted MIS Total Knee Arthroplasty (MAKO) 한 박스와 펼쳐지는 상세 내용까지. 다른 치료 박스는 추가하지 않았습니다.
- 시안 원본: 로컬 .fig의 인스턴스 995:5165, 공통 컴포넌트 687:1205, 상세 슬롯 995:5012. Figma 원본은 수정하지 않았습니다.
- HTML 원본: index.html의 #knee-mako. 문구·이미지·아이콘·수술 과정·비교 사진·숫자를 HTML에 직접 작성했습니다.
- 공통 스타일: css/center-treatment.css의 center-treatment-list / center-treatment / center-treatment-hero / center-treatment-disclosure / center-treatment-panel. 다른 센터에서도 같은 구조를 쓰고 article·제목·panel의 id 및 aria 연결은 고유하게 지정합니다. 왼쪽 이미지형은 article에 center-treatment--image-left를 추가합니다.
- 공통 동작: js/center-treatment.js. native details/summary를 사용하여 JS가 없어도 펼침·접힘이 동작합니다. JS 사용 시 420ms 높이 전환을 적용하고 모션 감소 설정에서는 즉시 전환합니다. Enter·Space 키도 지원합니다.
- SEE MORE / SEE LESS 버튼은 박스 하단 중앙에 있으며 펼치면 상세 끝으로 이동합니다. 재클릭 시 진행 중인 전환을 취소하고 현재 높이에서 이어갑니다.
- 상세 스타일도 center-treatment-block / steps / feature / comparison / benefits로 공통화했습니다. 번역은 locale.centerTreatments와 data-center-treatment 키를 연결하며 이미지 경로는 번역 파일이나 JS에 넣지 않습니다.
- 이미지: assets/knee-center/mako/의 23개 WebP. .fig 원본 이미지 및 시안의 크롭을 사용하여 웹용으로 내보냈습니다(합계 약 1.94MB). 기존 공통 장점 아이콘 assets/treatment/tj1.svg~tj4.svg를 재사용했습니다.
- 시안의 영상 소개 영역은 원본 썸네일 이미지로 반영했습니다. 백업에 영상 URL이 없어 영상 재생 링크는 아직 연결하지 않았습니다.
- server.cjs에 WebP MIME을 추가했습니다. 새 형식이 미리보기에서 표시되도록 서버를 재시작했습니다.
- 확인: JS 문법·HTML ID 중복·이미지 경로 검사 통과. 320·390·768·1280·1920px 가로 넘침 없음. 마우스 펼침, Enter 펼침, Space 접힘, 키보드 포커스 유지 확인.

### MAKO 주석 14곳 보완 (2026-09-27)
- 글자별 원본 스타일을 다시 확인하여 경험(민트)·정확성(파랑), 특징 제목의 민트/진회색 두 줄, 최소절개 제목의 부분 강조, 절개 부담 문구의 민트색 밑줄, 절개길이 캡션과 장점 제목의 부분 강조를 반영했습니다.
- 강조 구간은 HTML 안 span/strong으로 작성했습니다. 번역은 해당 구간의 data-center-treatment 키를 사용하여 강조 마크업을 유지합니다.
- 의사 사진은 border-radius: 50%, 세 배지는 원본 radius 80px와 16px/700 굵기로 맞췄습니다. 최소절개 설명은 PC 24px/700(모바일 20px), 보조 설명 16px/400입니다.
- 배경은 원본 시안의 수술 과정 #e3e3e3, 최소절개·사례 #003380을 확인하고 공통 색 변수로 지정했습니다.
- 사례 사진은 각각 case-75-combined.svg / case-70-combined.svg 한 장으로 교체했습니다. 원형 크롭, 원본 점선·양방향 화살표·흰 테두리의 둥근 배지, 숫자 글리프까지 .fig 원본 좌표와 벡터 경로로 합쳤습니다. 사진을 SVG 안에 내장하여 외부 이미지·폰트 의존성이 없습니다.
- 영상 미연결 안내는 해결되었습니다. 사용자 제공 https://youtu.be/r2AlMIRSTcY?si=PGj5Qrq_JS166PEJ 를 원본 썸네일에 연결했으며 새 창에서 재생합니다. 미리보기의 외부 iframe이 빈 화면으로 표시되어 썸네일 링크 방식을 사용했습니다.
- 확인: 320·390·607·768·1280·1920px 가로 넘침 없음. 부분 강조색/글자 굵기/배지 radius의 실제 스타일 확인, SVG 구조 및 내장 이미지·HTML 경로·중복 ID 검증, JS 문법 검사 통과.

## 어깨전담센터 배너
- HTML: index.html의 #shoulder-center. 제목, 설명, 진료 목록, 학회 문구, 사진·로고는 이곳에서 편집합니다.
- 번역: locales/ko.js의 shoulder. HTML과 함께 수정하며 이미지 경로는 넣지 않습니다. 학회 캡션 줄바꿈은 HTML br와 번역의 줄바꿈을 일치시킵니다.
- 스타일: css/center-banner-layout.css. PC 기준 1921×920, 최대폭 2520px. 1200px/600px에서 반응형 배치가 바뀝니다.
- 원본 이미지: assets/shoulder-center/doctor.webp, surgery-left.webp, surgery-right.webp, aac.webp, kossm.webp. 월계수·금빛 곡선·질감·격자는 assets/knee-center 원본을 재사용합니다.
- 등장 효과: js/center-banner.js, css/center-banner.css. data-center-banner-reveal은 좌→우, 값 up은 아래→위 등장입니다. 이미지 경로와 콘텐츠를 JS에서 추가하지 않습니다.
- 이후 어깨 치료박스는 배너 다음에 center-treatment 공통 구조·동작으로 추가합니다.

## 어깨 회전근개 파열 치료박스
- index.html의 #shoulder-rotator-cuff에서 배너 및 상세를 수정합니다. 내부 세 chapter는 관절내시경 봉합술 / 패치 보강술 / PRP입니다.
- 문구: locales/ko.js의 centerTreatments.rotator*를 HTML과 함께 수정합니다. 같은 소개 문장이 시안에서 반복되는 부분은 같은 번역 키를 재사용합니다.
- 사진: assets/shoulder-center/rotator-cuff/. 수술 전후 묶음의 개별 이미지는 HTML에서 교체하며 --image-columns / --image-ratio는 시안 프레임 비율입니다. PRP 사진 4곳은 하나의 prp.webp 원본을 공유합니다.
- 공통 스타일: css/center-treatment.css. result-pair--grouped는 여러 이미지를 포함한 전후 비교, media-copy는 그림+설명, chapter는 워터마크가 있는 치료별 묶음입니다.
- 모션·펼침은 기존 js/center-treatment.js를 사용하며 추가 JS 콘텐츠 생성은 없습니다.

## 어깨 인공관절 치료박스
- HTML: #shoulder-arthroplasty / #shoulder-arthroplasty-panel. TSA와 RSA는 각각 center-treatment-chapter로 묶었습니다.
- 문구: locales/ko.js의 centerTreatments.arthroplasty*를 HTML과 함께 수정합니다.
- 사진: assets/shoulder-center/arthroplasty/의 hero, tsa-before, tsa-after, rsa-before, rsa-after.webp. 사진 경로는 HTML만 수정합니다.
- 비교 프레임: HTML의 --image-ratio가 시안 비율이고 --result-frame-width는 모바일 최대폭입니다. 공통 result-pair--original 클래스로 원래 프레임보다 크게 늘리지 않습니다.
- 펼침·등장 효과: 기존 js/center-treatment.js를 그대로 사용합니다.

## 손발 전담센터 배너
- index.html의 #hand-foot-center에서 제목·본문·진료 목록·사진을 수정합니다. 번역은 locales/ko.js의 handFoot와 함께 수정합니다.
- 어깨/손발 배너 공통 스타일은 css/center-banner-layout.css의 center-banner 계열 클래스입니다. 기존 shoulder-center.css를 공통 이름으로 옮겼으며 어깨의 배치는 유지합니다. 두 배너의 id와 번역 키는 별도로 유지합니다.
- 손발 시안만의 색·높이·사진 위치는 css/hand-foot-center.css에서 지정합니다. PC 원본 비율1921×846, 최대폭2520px. 1200px 이하에서 문구 다음에 원장님 사진을 배치합니다.
- 새 원본 이미지: assets/hand-foot-center/doctor.webp, surgery-left.webp(진료 상담), surgery-right.webp(수술). 월계수·곡선·배경 질감·격자는 기존 knee-center 원본을 재사용합니다.
- 모션은 js/center-banner.js와 css/center-banner.css를 그대로 사용합니다.

## 손목·발목 관절경 치료박스
- HTML: #hand-foot-arthroscopy / #hand-foot-arthroscopy-panel. 손목 설명·질환 목록, 발목 설명·질환 목록, 병원 치료 특징 순서입니다.
- 문구: locales/ko.js의 centerTreatments.arthroscopy*를 HTML과 함께 수정합니다. 강조 부분은 별도 span 키를 유지합니다.
- 사진·아이콘: assets/hand-foot-center/arthroscopy/. 이미지 경로는 HTML에서만 관리하며, 질환별 장식 아이콘은 인접 제목과 본문이 설명하므로 alt를 비워둡니다.
- 공통 스타일: css/center-treatment.css의 media-copy, benefit-grid--five 및 --full, heading--neutral을 사용합니다. 펼침·등장은 기존 js/center-treatment.js를 그대로 재사용합니다.
- 손발 치료박스 순서는 MICA → Wrist & Ankle Arthroscopy입니다.

## 최소침습 무지외반증 MICA 치료박스
- HTML: #hand-foot-mica / #hand-foot-mica-panel. 손발 센터의 첫 번째 박스이며 관절경 바로 위에 둡니다.
- 문구: locales/ko.js의 centerTreatments.mica* 41개를 HTML과 함께 수정합니다.
- 이미지: assets/hand-foot-center/mica/. 비교 그림은 하나의 open-surgery.webp 원본을 두 프레임에서 시안 좌표대로 표시합니다. 수술 전후 정렬선은 원본 SVG를 사진 위에 겹쳐 표시합니다.
- 공통 스타일: sequence--five, comparison-matrix, annotated-photo. 사진과 안내선은 data-center-treatment-reveal 묶음으로 함께 등장하며, 기존 center-treatment.js를 재사용합니다.
- 시안의 숨겨진 무릎 수술 설명 레이어는 표시하지 않습니다. 수술 과정은 보이는 그림과 캡션 5개만 사용합니다.

## 척추 전담센터 배너
- index.html의 #spine-center에서 문구·진료 목록·이미지를 편집합니다. locales/ko.js의 spine 12개 문구를 함께 수정합니다.
- 배치는 기존 css/center-banner-layout.css, 모션은 js/center-banner.js와 css/center-banner.css를 재사용합니다. 척추 시안의 차이는 css/spine-center.css에서 지정합니다.
- 최신 사진은 assets/spine-center/의 doctor-cho.webp(조남익), doctor-yoon.webp(윤상훈), background-left.webp, background-right.webp입니다. 월계수·금빛 곡선·배경 질감·격자는 기존 knee-center 원본을 재사용합니다.
- PC 시안 비율1919×846. 의료진은 좌우에 배치하며 1200px 이하에서는 문구와 진료 목록 다음에 두 분을 나란히 표시합니다. 척추 치료박스는 아직 작업하지 않았습니다.
- 2026-09-30 22:13 갱신된 다운로드 .fig 기준으로 척추 배너만 확인·수정했습니다. 다른 섹션은 별도 요청 시 해당 범위의 최신 시안을 확인합니다.

## BESS 치료박스
- index.html의 #spine-bess / #spine-bess-panel에서 소개·장점4개·전후 사례2쌍을 편집합니다. 문구는 locales/ko.js centerTreatments.bess*25개와 함께 수정합니다.
- assets/spine-center/bess/의 원본 사진6개와 SVG3개를 사용합니다. intro-guide.svg에는 시안의 9mm/7mm 표시, after-1-guide.svg에는 수술 후 MRI 표시선이 들어 있습니다. 사진과 표시는 annotated-photo 묶음으로 함께 등장합니다.
- 공통 center-treatment.js를 그대로 사용합니다. 공통 media-copy--halves, benefit-grid--four-spaced, result-pair--grouped 및 --original을 재사용하며, 대표 사진의 원본 크롭만 hero-photo--bess에 지정합니다.
- 갱신 시안817:4629/817:4541 기준. 다음 박스는 Minimally Invasive Spinal Fusion입니다.

## 최소침습 척추유합술 치료박스
- HTML: #spine-fusion / #spine-fusion-panel. BESS 다음에 소개·장점4개·기존 나사못 수술 비교7항목·전후 사례2쌍을 배치합니다.
- 문구: locales/ko.js centerTreatments.fusion*44개를 HTML과 함께 수정합니다. 01~04 순번은 HTML만 관리합니다.
- 사진6개와 원본 정밀수술 아이콘은 assets/spine-center/fusion/에 있습니다. 나머지 장점 아이콘과 워터마크는 기존 자산을 재사용합니다. 소개 그림의 영문 표기는 원본에 포함되어 있어 후속 번역 시 이미지 교체 여부를 검토합니다.
- 공통 comparison-matrix--badges는 중앙 둥근 항목 배지, diagram-photo는 최대400px 설명 그림입니다. 비교 사진의 크기·비율은 HTML의 --result-width/--result-frame-width/--image-ratio에서 관리합니다.
- 최신 시안1223:9796/1223:9797 기준. center-treatment 공통 펼침·등장 효과를 그대로 사용합니다.

## 의료진 소개 / 두 줄 마키 (2026-10-01)
- HTML: #doctors. 척추유합술 아래 시안 661:888의 사진 14개와 김종근 대표원장 프로필을 배치했습니다. 상단 OUR DOCTORS 메뉴를 연결했습니다.
- 사진과 반복 그룹은 모두 index.html에서 관리합니다. assets/doctors/는 최신 .fig 원본을 무손실로 보관한 이미지이며, JS로 이미지나 콘텐츠를 생성·복제하지 않습니다.
- css/doctors.css / js/doctors.js: 윗줄 왼쪽, 아랫줄 오른쪽 무한 마키. 멈추기·재생, 화면 밖 정지, 동작 줄이기, 모바일 정적 가로 스크롤 지원. JavaScript가 없으면 사진 원본 그룹과 프로필이 그대로 표시됩니다.
- 한국어 문구와 alt 및 버튼 상태는 locales/ko.js의 doctors 42개 키와 동시에 수정합니다. 프로필 제목·경력은 화면 진입 시 좌→우 등장합니다.
- 다음 검증: python scripts/check_locales.py / node --test scripts/doctors.test.mjs scripts/translations.test.mjs.
- 2026-10-01 피드백 반영: 사진을 .doctor-portrait-frame으로 묶었습니다. 1200px 이하에서는 프로필 세로 중앙에 놓고 ::before 회색 받침과 사진 밑면을 일치시킵니다. 767px 이하에서는 상단 가운데 배치합니다. 경력 표시 13개는 시안 579:853의 4×4 민트 삼각형 원본 SVG이며 HTML img로 관리합니다.

## 의료진 캐러셀 (2026-10-01 후속)
- 최신 .fig의 의사리스트 캐러셀 1400:4820에 있는 11명을 x 좌표 순서대로 반영했습니다: 김종근, 이수건, 이명철, 이준영, 김세훈, 조남익, 윤상훈, 정승진, 이경화, 박진형, 김준성.
- 11개 article.swiper-slide 및 이미지·목록은 index.html이 원본입니다. 문구는 locales/ko.js doctors.profiles에 동일 등록합니다. 시안의 숨긴 경력/진료과목은 표시하지 않습니다.
- 기존 로컬 Swiper 재사용. 3000ms 간격 / 650ms 가로 전환 / 마지막→첫 번째 rewind / 높이 자동 조정. 이전·다음·재생/정지 버튼, 터치, 동작 줄이기, 화면 밖 정지 지원. loop와 a11y DOM 생성은 끕니다.
- 모바일 사진 뒤 배경을 제거하고 ::after 받침을 top:100%에 배치했습니다. 사진의 밑면 아래로만 회색 박스가 이어지며, 소개 본문은 그 아래 별도 배경으로 표시됩니다.
- 2026-10-02: 의료진 캐러셀의 텍스트 이전/다음 및 숫자 표시는 제거하고, 화살표·재생/일시정지 SVG 아이콘과 11개의 회색 점/민트색 활성 막대로 교체했습니다. 버튼과 SVG는 HTML에서 직접 관리하고, 기존 번역 키는 aria-label에 연결했습니다. 페이지 점을 누르면 해당 의료진으로 이동합니다.

## APKASS 2026 KOREA / ICKAS 2026 (2026-10-02)
- index.html #apkass는 HSS를 포함한 #global-excellence 다음, #mis-tka 바로 앞에 있습니다. 최신 다운로드 .fig(2026-10-02 01:14:54)의 1332:3506 프레임 기준입니다.
- 소개·공식협력병원 사진 2장·FOUNDER 안내·김종근 대표원장 좌장 참여·세션 사진 2장·현장 갤러리 7장 구성입니다. 이미지와 학회 로고 및 장식은 assets/apkass의 시안 원본을 사용합니다.
- css/apkass.css: 시안의 파란색 그라데이션, 원본 배경 질감/빛/지구 장식, Playfair 영문 및 민트색 강조를 적용합니다. PC 1920×3613 비율을 기준으로 1100/600px에서 읽기 순서로 재배치합니다.
- 문구와 이미지 alt는 locales/ko.js apkass 키를 HTML과 함께 수정합니다. js/apkass.js는 등장 효과만 연결하고, HTML 콘텐츠를 만들거나 복제하지 않습니다. JS 없음/동작 줄이기 시에도 내용을 확인할 수 있습니다.
- 이미지 안의 행사 텍스트는 원본 유지. 후속 다국어 단계에서 언어별 이미지 필요 여부를 확인합니다.

## 2026-10-02 주석 수정 및 모바일 의료진 팝업
- 다운로드 최신 .fig(19:14:06)의 모바일 의사리스트 1559:3718 / 모달 1559:3732, 어깨 배너 733:3192를 반영합니다.
- APKASS는 사용자가 해제한 1920px 제한을 유지합니다. 컨테이너 너비로 배경·FOUNDER 배치를 계산하며 ICKAS 민트색, LEADERSHIP/FOUNDER 황금 그라디언트와 사진 모서리를 적용합니다.
- 특허 액자의 clip-path를 제거하고 JK Minimal 황금 그라디언트를 적용했습니다. 어깨 배너 공로패와 오른쪽 아래 수술 사진은 시안 원본 PNG입니다.
- 767px 이하 의료진 카드에는 사진·이름·주요 진료과목과 + 버튼을 표시합니다. 11개의 doctor-modal 내용은 HTML에 직접 작성하며 기존 doctors.profiles 번역을 공유합니다. 의료진 문구 수정 시 카드와 대응 팝업을 함께 수정합니다.
- 팝업은 native dialog로 열고 닫으며 내부 스크롤, 상단 고정 닫기 버튼, Escape/배경 클릭, 포커스 복귀, 배경 스크롤 잠금, 팝업 중 자동 슬라이드 정지를 지원합니다. PC 전환 시 팝업을 닫습니다.
- 사용자 변경 사항인 loop/5000ms 자동 전환과 조작부 숨김을 유지하며, 루프의 realIndex로 접근성 상태를 맞춥니다.


### 2026-10-02 최신 모바일 의료진 카드·특허 액자 반영
- 19:42 저장된 로컬 시안의 `1559:3718` 프레임을 기준으로 모바일 의료진 카드의 사진은 왼쪽, 이름·진료과목은 오른쪽에 배치했다. 긴 진료과목은 카드 높이가 늘어나며 생략하지 않는다.
- 상세 버튼은 시안 `1559:3729`의 겹친 사각형 아이콘을 `assets/doctors/details.svg`로 저장해 HTML의 11개 버튼에 연결했다. 기존 번역 접근성 이름과 전체 경력 팝업을 유지한다.
- 특허 액자 `237:491`의 원본 이미지가 현재 파일과 동일함을 확인했다. 시안의 이미지 채우기 좌표와 628×862 비율을 CSS에 적용해 흰 여백을 제외하고 액자의 네 모서리를 보존했다.
- 320px·402px 모바일, 916px·1920px 화면 확인. 번역·의료진 동작 검사 9개 통과. 요청 영역 번역 495개 연결 및 11명 팝업 내용 일치 확인. 전체 locale 검사는 기존 HTML 소스 들여쓰기·줄바꿈 차이로 실패하며 이번 변경에서 새 문구는 추가하지 않았다.


## 2026-10-02 흥K병원 둘러보기
- 최신 로컬 시안의 시설 642:1367 기준. #facilities를 의료진 다음에 배치하고 FACILITIES 메뉴를 연결했습니다.
- css/facilities.css / js/facilities.js: 5~9층 선택, 각 층 사진 선택 기억, 썸네일 터치/좌우 가로 이동, 키보드 화살표·Home·End, 700ms 블러 해제 전환. 동작 줄이기에서는 즉시 표시합니다. 콘텐츠 DOM 생성·복제와 src 변경은 하지 않습니다. JS 없이도 모든 사진과 층을 볼 수 있습니다.
- 기본은 시안의 6층 중앙수술센터입니다. 시안의 원본 사진 5층 5장/6층 11장을 연결했고 7층 2장/8층 3장/9층 2장은 교체 가능한 사진 준비 자리입니다. 23개 사진의 썸네일과 큰 사진은 HTML에 직접 있습니다.
- 사진 교체·추가 안내: assets/facilities/README.md. WebP 사진을 같은 파일명으로 바꾸고 해당 HTML의 준비 중 표시를 제거하며 캡션·alt 및 locales/ko.js의 facilities를 함께 수정합니다.
- 번역·시설 동작 검사 6개 통과. 시설 번역 문구는 정확히 일치합니다. 전체 번역 검사에는 기존 다른 섹션의 HTML 소스 줄바꿈 차이가 남아 있습니다.


### 둘러보기 시안 디테일 재반영
- 사진 캡션·썸네일 이름표·준비 중 오버레이를 제거했습니다. 사진 설명은 alt 및 버튼 접근성 이름으로만 관리합니다.
- 원본 642:1367의 모든 사진 반경 8px, 썸네일 높이 100px/간격16px/각 이미지 너비와 순서, 본문16px, 층 제목24px Bold를 반영했습니다.
- 층 번호는 흰색 Bold와 하단1px 구분선, 비선택 불투명도0.36으로 수정했습니다. 민트색 활성 테두리와 텍스트, 윤곽선 숫자는 사용하지 않습니다.
- 시설 사진의 captions 번역 키를 제거했으며 alt·접근성 이름은 그대로 번역 연결합니다.


## 2026-10-03 흥K360-SERVICE
- 둘러보기 다음에 `#service-360` 추가: 소개, 7단계 과정, 공항 픽업, 숙박 안내, 호텔 5개 카드.
- `css/service-360.css`, `js/service-360.js` 사용. 콘텐츠/사진은 index.html 정적 원본, 번역은 service360 키.
- 호텔 목록은 터치·트랙패드·마우스 드래그·방향키/Home/End로 이동. 초기 가운데 카드, 복제 없음. 동작 줄이기 지원.
- 원본 벡터/사진 출처와 시안의 호텔 사진 중복은 assets/service-360/README.md 참고.
- 번역 테스트 4개 통과, 서비스 번역 연결 42개 불일치 없음. 전체 locale 검사에는 기존 다른 영역의 공백/줄바꿈 불일치 207건이 남아 있음.


## 2026-10-04 의료진/360 서비스 동작 수정
- 의료진 Swiper autoHeight 해제. flex stretch로 현재 너비의 최장 프로필 높이를 모든 슬라이드에 적용하므로 슬라이드 전환 시 높이가 바뀌지 않습니다. 사용자 수정 스타일 유지.
- 호텔 목록은 Swiper loop + delay 0 / speed 10000 / linear로 연속 이동. 루프용 추가 5카드는 HTML 정적 작성 및 접근성 제외. 아이콘으로 정지/재생, 동작 줄이기 및 탭 비활성 시 정지.
- 360 Care 장식은 overview 내부의 스티키 레이어로 화면 중앙에 머물다가 해당 영역 끝에서 함께 스크롤됩니다.
- 데스크톱 11개 프로필 동일 높이, 모바일 11개 동일 높이 및 가로 넘침 없음 확인.


## 진료예약 퍼블리싱
- 로컬 시안 reservation(782:4001)을 기반으로 #reservation을 호텔 다음에 추가. css/reservation.css, js/reservation.js, locales/ko.js의 reservation 키 사용.
- 통증 부위 원본 사진 5개, 8px 라운드, 민트 STEP 1, 2열 환자 정보, 보험/동의/신청 버튼. 모바일 1열 입력.
- 시안에 중복된 오른쪽 생일은 우선 희망 진료일로 구성. 사용자 확인 후 변경 가능.
- 실제 접수 서버 없음. 현재 버튼은 필수 입력 확인 후 준비 중 안내만 표시. 환자 데이터 전송/보관하지 않음. 실접수에는 별도 서버 및 실제 개인정보 안내 연결 필요.
- 호텔 일시정지 버튼 제거. Swiper 자동 이동 유지, 마우스 올림/키보드 포커스 시 일시정지.
- 입력 검증, 모바일 넘침 없음, 사진 5개 비율/라운드, 번역 테스트 4개 통과. 전체 locale 검사의 기존 다른 섹션 공백/줄바꿈 불일치는 별도.


## 이미지·스타일 경로 (후속 작업 공통)
- HTML 이미지/스타일/스크립트는 `./assets/...`, `./css/...`, `./js/...` 상대 경로로 작성합니다. index.html의 base 설정이 언어 URL과 저장소 하위 경로를 처리합니다.
- CSS 배경·폰트는 CSS 파일 기준 `../assets/...`로 작성합니다. CSS에서 `./assets/...` 또는 `/assets/...` 사용 금지.
- GitHub Pages에서는 새로고침 가능한 저장소 주소를 유지하며 `?lang=ko`로 언어를 표시합니다. 운영/로컬 서버에서는 기존 `/ko/` 언어 URL을 유지합니다.
- 실제 파일명 대소문자까지 확인하고, 이미지를 추가할 때 Git에 함께 포함합니다. index.html의 base 초기화는 스타일/스크립트보다 앞에 유지합니다.
- 하위 폴더 검수: `node server.cjs --port 4174 --base /global-hk/`.
