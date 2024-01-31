FROM node:20-alpine

WORKDIR /app

COPY . .

ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}

RUN npm install 
RUN npx prisma generate
# RUN npx prisma migrate deploy

EXPOSE 3000

CMD [ "npm", "run", "dev" ]

