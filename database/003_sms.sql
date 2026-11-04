CREATE TABLE IF NOT EXISTS sms_jobs (
 id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 reservation_id BIGINT UNSIGNED NOT NULL,
 phone VARCHAR(11) NOT NULL,
 mode VARCHAR(12) NOT NULL,
 state VARCHAR(20) NOT NULL DEFAULT 'pending',
 attempts INT NOT NULL DEFAULT 0,
 next_attempt DATETIME NOT NULL,
 provider_id VARCHAR(100) NULL,
 result_code VARCHAR(80) NULL,
 created_at DATETIME NOT NULL,
 updated_at DATETIME NOT NULL,
 UNIQUE KEY reservation_phone (reservation_id,phone),
 INDEX pending_jobs (state,next_attempt),
 FOREIGN KEY (reservation_id) REFERENCES reservations(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
