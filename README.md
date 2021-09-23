# react_nginx_tomcat

誰かのやりたいことを検証するためだけのリポジトリ。
構成としては

nginx: listen 80 -> ./frontend 配下の react app
react app -> sprint_boot_app:8080 でapiをコールする
