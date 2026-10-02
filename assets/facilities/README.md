# 흥K병원 둘러보기 사진 교체

- HTML: index.html의 #facilities. 모든 사진 경로와 목록은 이곳에서 직접 관리합니다.
- 5층: 5f-01.webp ~ 5f-05.webp (시안 사진 5장)
- 6층: 6f-01.webp ~ 6f-11.webp (시안 사진 11장)
- 7층: 7f-01.webp ~ 7f-02.webp (사진 준비 자리)
- 8층: 8f-01.webp ~ 8f-03.webp (사진 준비 자리)
- 9층: 9f-01.webp ~ 9f-02.webp (사진 준비 자리)

## 사진 넣기
1. 같은 이름의 WebP 사진으로 교체합니다. JPG/PNG라면 index.html에서 해당 사진의 두 src(썸네일과 큰 사진)를 함께 바꿉니다.
2. 준비된 사진의 썸네일 a와 큰 사진 figure에서 data-photo-pending을 지웁니다. 사진 위에는 설명이나 준비 중 문구를 표시하지 않습니다.
3. 두 img의 width/height를 실제 사진 크기에 맞추고, alt와 버튼 접근성 이름을 사진에 맞게 수정합니다. locales/ko.js의 facilities.floors.층번호.photos.사진번호도 같은 문구로 수정합니다.

## 사진 추가
해당 층의 .facilities-thumbnails 안에서 a 한 개와 .facilities-viewer 안에서 figure 한 개를 복사합니다. 사진번호, id, href, aria-controls를 새 번호로 맞추고 번역 키를 추가합니다. JavaScript 수정은 필요하지 않습니다. 썸네일이 많아지면 좌우 버튼과 터치 가로 스크롤이 자동 적용됩니다.

처음에는 시안과 같이 6층 중앙수술센터를 표시합니다. 층마다 선택했던 사진을 기억하며, 사진 변경은 700ms 동안 블러가 풀립니다. 동작 줄이기 설정에서는 즉시 표시합니다. JS가 없을 때도 모든 층과 사진을 볼 수 있습니다.
