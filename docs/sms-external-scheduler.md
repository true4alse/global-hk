# 카페24 외부 문자 스케줄러

## 업로드
- `api/sms-worker.php` → `www/api/sms-worker.php`
- `php/sms_scheduler.php` → `www/php/sms_scheduler.php`
- `php/sms.php` → `www/php/sms.php`
- DB 변경 없음. 운영 config와 번역 파일을 덮어쓰지 않음.

## 인증키 준비
PuTTY에서 `/usr/local/php82/bin/php -r 'echo bin2hex(random_bytes(32)),PHP_EOL;'` 실행.
출력된 64자리 값을 서버 `private/sms.php`의 반환 배열에 추가:
`'scheduler_token' => '생성한값',`
솔라피 키와는 별개인 스케줄러 전용 키이다. 채팅/URL/저장소에 올리지 않는다.

## cron-job.org 연결
가입/로그인 후 작업 생성. 최초에는 비활성화 상태로 준비한다.
- URL: `https://heungkglobal.com/api/sms-worker.php`
- 주기: 매 1분
- HTTP method: POST
- 요청 헤더: `X-HK-Cron-Token` = 위 64자리 값
- 첫 확인용 요청 헤더: `X-HK-Cron-Check` = `1`
- 응답 저장과 실패 알림을 켠다. 리다이렉트된 HTTP 주소를 사용하지 않는다.

첫 테스트 실행에서 HTTP 200과 `{"ok":true,"check":true,"mode":"live"}` 확인.
이 확인 요청은 DB나 발송 기능을 실행하지 않는다.
이후 `X-HK-Cron-Check` 헤더를 삭제해야 실제 대기 처리가 시작된다.
새 테스트 예약을 넣고 실제 실행 및 문자 수신 확인 후 정기 실행을 활성화한다.
정기 실행을 켜면 기존 pending/retry 건도 처리될 수 있으므로 테스트 대기를 확인한다.

## 결과
- 200 / processed: 처리 건수이며 문자 전달 성공 수가 아니다. 0은 대기 없음 또는 다른 작업 실행 중일 수 있다.
- 403: HTTPS 또는 인증 헤더 확인.
- 405: POST 설정 확인. 주소를 브라우저에서 열면 405가 정상이다.
- 503: 인증키 미설정, 문자 disabled, 설정/DB 오류 확인.
- 기본 30초 제한을 고려해 약 24초 작업 예산과 요청별 타임아웃을 적용한다. 남은 대기는 다음 실행에서 처리한다.
- 기존 DB 잠금/중복 방지/발송량 제한 유지. unknown/failed/held는 자동 재발송하지 않는다.
- SOLAPI accepted는 접수 성공이며 최종 배달은 솔라피 발송 내역에서 확인한다.
- 서버의 DB 지연 등으로 타임아웃이 난 경우 무조건 재발송하지 말고 발송 내역을 확인한다.

병원 계정 준비 후 private/sms.php의 API 키/시크릿/발신번호와 관리자 알림 수신번호를 변경한다.
스케줄러에는 환자 정보나 SOLAPI 키를 등록하지 않는다.

공식 참고: https://cron-job.org/en/faq/ , https://docs.cron-job.org/creating-cron-jobs.html
