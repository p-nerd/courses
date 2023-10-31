FROM node:20-alpine
RUN npm install -g pnpm
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app
COPY package.json pnpm-lock.yaml . 
RUN pnpm install
ENV API_URL=https://keep.37nerds.com/
COPY . . 
EXPOSE 3000
CMD ["pnpm", "dev"]
