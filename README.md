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

1. Run below command, and confirm `.env` file in `docker/docker-springboot`.
  This is parameter file for dockerfile in `docker/docker-springboot`.
  ```
  $ ./docker/docker-springboot/setDotEnv.sh
  ```
1. Run below command
  ```
  $ docker-compose build
  $ docker-compose up -d
  ```
