# react_nginx_tomcat

誰かのやりたいことを検証するためだけのリポジトリ。
構成としては

nginx: listen 80 -> ./frontend 配下の react app
react app -> sprint_boot_app:8080 でapiをコールする

## 検証状況
- `http://localhost:8080` でレスポンスが取れるのを確認
- `http://localhost` で画面の表示を確認。
  - 一方でAPIの呼び出しには `strict-origin-when-cross-origin` がついているっぽい？

## How to run this ?
1. Install dependency for frontend and build front-codes.
  ```
  $ npm install --prefix ./frontend
  $ npm run build
  ```
2. Build serverside code
  ```
  $ cd serverside
  $ ./gradlew build
  ```
3. Run below command
  ```
  $ docker-compose build
  $ docker-compose up -d
  ```
