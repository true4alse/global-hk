CREATE TABLE IF NOT EXISTS reservation_guard_events (
 id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 bucket CHAR(64) NOT NULL,
 created_at DATETIME NOT NULL,
 INDEX guard_bucket_time (bucket,created_at),
 INDEX guard_time (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE IF NOT EXISTS sms_attempts (
 id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 created_at DATETIME NOT NULL,
 INDEX attempt_time (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
