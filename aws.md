```cmd
// nvm 및 bash 설치

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

. ~/.nvm/nvm.sh

// nvm 리스트 확인 후 > 설치 > 사용 

nvm ls
nvm install 16.15.1
nvm use 16.15.1

// pm2 설치

npm install -g pm2

// 80 -> 4000 포트 포워딩

sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 4000

// 프로젝트 클론 및 셋팅

git clone https://github.com/unchaptered/hanghae-backend-2.git FOLDER-NAME
cd FOLDER-NAME/
npm ci
npm run dev
```