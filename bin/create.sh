#!/bin/bash

npm init -y

## Install dependencies libraries
declare -a dependencies=(
"express"
"bcrypt"
"cookie-parser"
"cors"
"dotenv"
"express-mongo-sanitize"
"helmet"
"jsonwebtoken"
"mongodb"
"mongoose"
"morgan"
"xss-clean")

for i in "${dependencies[@]}"
do
   npm install $i
done

## install Development dependencies libraries
declare -a devDependencies=(
"nodemon"
"@types/bcrypt"
"@types/cookie-parser"
"@types/cors"
"@types/express"
"@types/jsonwebtoken"
"@types/morgan"
"@types/node"
"ts-node"
"typescript")

for i in "${devDependencies[@]}"
do
   npm install $i --save-dev
done