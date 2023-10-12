FROM node:16

WORKDIR /usr/src/app

COPY . .
COPY next.config.js tsconfig.json ./
COPY tailwind.config.js postcss.config.js ./
RUN npm install --production

RUN npm run build
CMD ["npm","start"]