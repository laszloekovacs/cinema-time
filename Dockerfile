FROM node:20-alpine

WORKDIR /app

COPY . .

ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}

RUN npm install 
RUN npx prisma generate
RUN npx prisma migrate deploy
RUN npm run build

EXPOSE 3000

## until next stops static compiling...
CMD [ "npm", "run", "dev" ]

