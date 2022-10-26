
FROM node:latest

WORKDIR /home/api

# copy package.json and package-lock.json
COPY package*.json ./
#  generated prisma files
COPY prisma ./prisma/
# copy env variable
COPY .env ./
# copy tsconfig.json file
COPY tsconfig.json ./

RUN yarn install
RUN npx prisma generate
COPY . .

EXPOSE 3333

CMD ["yarn", "start:dev"]