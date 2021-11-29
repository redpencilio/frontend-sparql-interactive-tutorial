FROM madnificent/ember:3.26.1 AS builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN ember build -prod

FROM semtech/ember-proxy-service:1.5.1
COPY --from=builder /app/dist /app
