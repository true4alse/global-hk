# 예약 저장 (로컬 개발)

- 접속 주소: http://localhost/hk-global/ko/#reservation
- XAMPP의 Apache와 MySQL을 켜고 사용합니다. Live Server와 Node 미리보기에서는 PHP 접수가 실행되지 않습니다.
- `D:\xampp\php\php.exe scripts/migrate.php`로 예약 테이블을 생성합니다. 기존 테이블이나 예약은 삭제하지 않습니다.
- DB는 `hk-global`, 테이블은 `reservations`입니다.
- `symptoms_original`은 입력한 원문이며 번역/외부 전송을 하지 않습니다. `screen_language`는 작성 내용의 감지 언어가 아니라 신청 화면의 언어입니다.
- 선택하지 않은 날짜/선택 항목은 NULL, 신청 상태는 `received`로 저장합니다. 날짜·시간 기록은 UTC이며 관리 화면에서 한국 시간으로 표시할 예정입니다.
- 요청별 UUID와 내용 해시로 같은 요청의 재시도 시 중복 저장을 방지합니다. 제출 중 클릭 차단, 서버 입력 검사, 세션 CSRF 검사, 세션당 30초 접수 간격을 적용했습니다.
- 성공 안내는 DB 저장 확인 후 표시합니다. 실패하면 입력값을 유지합니다.
- 접수 안내 5개 문구는 모든 언어 파일에 한국어 초안으로 추가했습니다. 외부 번역 담당자가 각 파일에서 번역합니다.

## 연결 및 검증

`config/database.local.php`는 Git에서 제외됩니다. 현재 로컬 설정은 웹 폴더 밖 `D:/xampp/hk-global-private/database.php`를 참조합니다.

- 연결: `D:\xampp\php\php.exe scripts/check_database.php`
- API 통합 검사: `python scripts/test_reservation_api.py` (로컬 XAMPP 필요)
- 통합 검사는 가상 예약만 생성하고 해당 실행의 UUID에 해당하는 테스트 행만 삭제합니다.

## 다음 작업

관리자 로그인, 목록·상세, 상태 변경은 아직 구현하지 않았습니다. 카페24 배포 시 전용 DB 계정/연결 설정과 HTTPS를 적용하고, 병원에서 확정한 개인정보 안내·보유기간·동의 절차를 반영해야 합니다. 현 단계는 로컬 개발용입니다. 공개 운영 전에는 세션 재생성으로 우회 가능한 현재 접수 간격 제한 외에 서버 단위 스팸 방지도 보완합니다.
