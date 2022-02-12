FROM denoland/deno:alpine

WORKDIR /app
COPY . .

USER deno
CMD deno run --allow-net --allow-env index.js
