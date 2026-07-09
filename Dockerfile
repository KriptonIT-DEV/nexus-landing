# Build estatico con Bun (Astro v5) y servido con nginx.
# Las PUBLIC_* se hornean en el bundle en build-time -> van como ARG/ENV, no runtime.
FROM oven/bun:1 AS build
WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .

ARG PUBLIC_API_BASE_URL
ARG PUBLIC_URL_REDIRECT_APP_TENNANT
ARG PUBLIC_URL_STATIC_APP_TENNANT
ENV PUBLIC_API_BASE_URL=$PUBLIC_API_BASE_URL
ENV PUBLIC_URL_REDIRECT_APP_TENNANT=$PUBLIC_URL_REDIRECT_APP_TENNANT
ENV PUBLIC_URL_STATIC_APP_TENNANT=$PUBLIC_URL_STATIC_APP_TENNANT

RUN bun run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
