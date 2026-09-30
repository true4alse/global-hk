
## 사용자 콘텐츠 편집 원칙
시안 파일은 사용자가 다운로드 폴더의 `흥케이병원 글로벌 사이트 한글버전 기준.fig`로 갱신할 수 있다. 변경 안내를 받으면 최신 파일을 기준으로 요청한 섹션만 확인·수정한다. 2026-09-30 갱신 시안은 척추 전담센터 배너만 우선 반영하며, 다른 부분을 일괄 재검토하거나 수정하지 않는다.
이미지·아이콘·카드·마키·메뉴 구조는 index.html에 직접 작성한다. JavaScript로 콘텐츠 DOM 생성·복제 또는 이미지 경로 삽입을 하지 않는다. JavaScript는 번역 문구 연결과 이벤트·애니메이션에만 사용한다. 이미지 경로 및 통계 숫자는 HTML이 원본이며 번역 파일에는 문구만 둔다.

## 한국어 기본 문구와 번역 연결 원칙 (모든 후속 작업에 적용)
1. 한국어 기본 문구는 `index.html`에 직접 남긴다. JavaScript가 없어도 제목·본문·버튼·사진 설명을 확인할 수 있어야 한다.
2. 퍼블리싱과 동시에 모든 번역 대상 문구를 `locales/ko.js`에 같은 내용으로 등록하고 HTML의 키와 연결한다. 문구 수정 시 HTML과 ko.js를 함께 수정하며 번역 연결을 후속 작업으로 미루지 않는다. 제목·본문·캡션·이미지 alt·접근성 이름·버튼의 재생/정지 상태까지 포함한다.

- 공통 연결은 `js/translations.js`의 `applyTranslations`가 담당한다. 기존 `data-knee`, `data-center-treatment` 등 섹션 키를 재사용하고, 공통/중첩 키는 `data-i18n="group.key"`, 속성은 `data-i18n-alt`, `data-i18n-label` 등으로 연결한다.
- 강조색·굵기·밑줄·아이콘이 있는 부모에 텍스트 키를 붙이지 않는다. 각 문구 span에 키를 나누어 구조를 유지한다. HTML의 `br`는 ko.js의 `\n`과 맞추고 `data-i18n-lines`로 표시한다.
- 이미지 경로·콘텐츠 구조·독립된 통계 수치와 섹션 번호는 HTML에서만 관리한다. 브랜드 고유 표기와 언어 자국어 이름 등 번역 제외 문구에는 `data-i18n-static`에 이유를 적는다. 이미지 안에 합성된 글자는 alt 번역과 별도로 언어별 이미지가 필요한지 후속 번역 단계에서 확인한다.
- 완료 전 `python scripts/check_locales.py`와 `node --test scripts/translations.test.mjs`를 실행하고 실제 화면에서 줄바꿈·강조·드롭다운·반응형을 확인한다. 번역 데이터가 준비되지 않은 언어 버튼은 활성화하지 않는다.

## 모든 치료박스의 공통 동작
- 이후 무릎·어깨·손발 등 모든 센터의 치료박스는 `center-treatment` 공통 클래스와 `js/center-treatment.js`를 재사용한다. 센터별로 같은 스타일·동작을 중복 구현하지 않는다.
- `details.center-treatment-disclosure > summary`와 `.center-treatment-panel > .center-treatment-content` 구조를 유지한다. 펼침은 720ms, 접힘은 560ms 동안 실제 콘텐츠 높이에 맞춰 부드럽게 전환한다.
- 펼쳐진 본문 제목·문단·캡션·배지·이미지는 화면에 들어올 때 왼쪽 36px에서 제자리로 이동하며 1.1초 동안 나타난다. 다시 열면 재생하며, 아직 보이지 않는 아래 콘텐츠는 스크롤 진입 시 실행한다. 강조 문구는 부모 문장과 함께 움직인다.
- 표준 요소는 자동 적용한다. 추가 묶음에는 `data-center-treatment-reveal`을 붙이고, 배경 장식 등 제외 대상에는 `data-center-treatment-reveal="none"`을 붙인다. JS로 콘텐츠를 만들거나 복제하지 않는다.
- 동작 줄이기 설정에서는 모션 없이 즉시 표시한다. JS가 없어도 기본 details로 열고 닫을 수 있어야 한다. 연속 클릭·키보드 조작·반응형 높이 변경을 확인하고 치료박스 수정 시 `node --test scripts/center-treatment.test.mjs`를 실행한다.
