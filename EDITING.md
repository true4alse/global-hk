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
