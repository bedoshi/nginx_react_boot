# react_nginx_tomcat

誰かのやりたいことを検証するためだけのリポジトリ。
構成としては

nginx: listen 80 -> ./frontend 配下の react app
react app -> sprint_boot_app:8080 でapiをコールする

## How to run this ?
1. Install dependency for frontend and build front-codes.
  ```
  $ npm install --prefix ./frontend
  $ npm run build
  ```
2. Run below command
  ```
  $ docker-compose build
  $ docker-compose up -d
  ```
