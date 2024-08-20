-- +goose Up
ALTER TABLE users 
ADD COLUMN `key` VARCHAR(64);

UPDATE users 
SET `key` = lower(hex(randomblob(32)));

CREATE UNIQUE INDEX idx_users_key 
ON users(`key`);

-- +goose Down
DROP INDEX IF EXISTS idx_users_key;

ALTER TABLE users 
DROP COLUMN `key`;
