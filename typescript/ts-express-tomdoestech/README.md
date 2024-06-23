```bash
npx tsc --init
npm init -y
mkdir src
cd src
touch app.ts
npm i ts-node-dev typescript -D

# in package.json
"scripts":{
    "dev":"ts-node-dev --respawn --transpile-only src/app.ts"
}

npm i express
npm i @types/node @types/express -D
```
