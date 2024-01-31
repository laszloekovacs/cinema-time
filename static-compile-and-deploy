FROM node:20-alpine as build

WORKDIR /build

COPY . .

ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}

RUN npm install 
RUN npx prisma generate
# RUN npx prisma migrate deploy
RUN npm run build

# create new image
FROM node:20-alpine

WORKDIR /app

COPY --from=build /build/.next /app/.next 
COPY --from=build /build/node_modules /app/node_modules
COPY --from=build /build/public /app/public
COPY --from=build /build/package*.json /app

EXPOSE 3000

CMD [ "npm", "run", "start" ]

