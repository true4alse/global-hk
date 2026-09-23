# 직접 수정할 때

- 이미지·아이콘: index.html의 img src를 변경합니다. JavaScript에는 이미지 경로가 없습니다.
- 마키 사진: 해당 줄의 img 태그를 추가·삭제·정렬합니다. 각 줄 2장 이상이면 반복 이동하며 1장이면 정지합니다.
- 통계: index.html의 about-stat-value 안 숫자 한 곳만 변경합니다. 히어로는 hero-number 안 숫자입니다.
- 번역 문구: locales/ko.js에서 수정합니다. 사진의 한국어 alt는 HTML에서 직접 수정합니다. 다른 언어는 photoAlt로 번역할 수 있습니다.
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
- `data-global` 키는 다른 언어의 번역 연결용입니다. 현재 HSS 한국어 문구는 HTML이 원본입니다.
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
