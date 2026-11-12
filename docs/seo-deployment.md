# 흥K병원 검색 노출 설정 및 배포

기준 주소: https://heungkglobal.com

## 적용 내용
- `/ko/`, `/en/`, `/zh/`, `/ja/`, `/ru/`, `/mn/`, `/hi/`, `/vi/`, `/ar/` 각각에 번역된 HTML 제공.
- 언어별 제목·설명, 자기 주소 canonical, 9개 언어 hreflang 및 영어 x-default.
- 공유 미리보기 이미지와 Open Graph, 병원명·주소·연락처·공식 채널의 Hospital 구조화 데이터.
- sitemap.xml, robots.txt. 관리자·API는 검색 수집 대상에서 제외. 이는 접근 권한 보호를 대체하지 않음.
- 한국어 index.html과 기존 번역이 편집 원본. 언어 폴더의 index.html은 생성 결과이므로 직접 수정하지 않음.

## 이후 내용 또는 번역 변경 시
1. 기존처럼 index.html / locales 파일 수정.
2. `node scripts/build-seo.mjs` 실행. Node.js, Playwright와 Microsoft Edge 필요. 별도 설치 경로는 PLAYWRIGHT_MODULE, 브라우저 채널은 BROWSER_CHANNEL 환경변수로 지정.
3. `node --test scripts/seo.test.mjs scripts/translations.test.mjs scripts/site-paths.test.mjs` 실행.
4. 변경된 원본과 새 언어별 HTML을 배포폴더에 반영하고 FTP 업로드.

## 이번 FTP 업로드
`deploy/cafe24-20261104/seo-upload-files.txt`에 변경 파일 목록을 기록합니다. www 기준 경로입니다.
언어 폴더와 assets/js/css/locales 변경 파일을 먼저 업로드하고 .htaccess를 마지막에 업로드하세요.
DB·문자 설정파일은 업로드 대상이 아닙니다.

## 서버 업로드 후
1. `/en/`, `/ja/`, `/ar/`를 열고 페이지 소스 보기에서 해당 언어 제목·본문이 있는지 확인.
2. `/sitemap.xml`, `/robots.txt`, `/assets/social-preview.png` 확인.
3. Google Search Console에 heungkglobal.com 도메인 속성 추가. 제공된 DNS TXT를 카페24 도메인 DNS에 등록하여 소유권 인증.
4. Search Console 사이트맵에 `https://heungkglobal.com/sitemap.xml` 제출. URL 검사로 대표 언어 페이지의 실제 URL 테스트 후 색인 생성 요청.
5. 네이버 서치어드바이저에도 사이트를 추가하고 소유확인 및 사이트맵 제출. 인증 파일/코드는 해당 계정에서 발급받아야 하며 임의로 만들 수 없음.

FTP 업로드, DNS 소유권 인증, Search Console 제출은 코드 생성만으로 완료되지 않습니다. 검색 반영 시점과 순위는 검색엔진이 결정합니다.

## 참고
- https://developers.google.com/search/docs/specialty/international/localized-versions
- https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
