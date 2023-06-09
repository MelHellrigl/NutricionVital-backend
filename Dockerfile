FROM node:19-alpine

ENV NODE_ENV=production
ENV PORT=3001
ENV MONGO_CLIENT=root
ENV MONGO_PASSWORD=NutricionVital123
ENV MONGO_CNN=mongodb://root:NutricionVital123@mongo:27017
ENV GOOGLE_PASSWORD=yjaambhnutnllxrs
ENV MP_ACCESS_TOKEN=APP_USR-6947092047695338-051714-ef92b38d1c096926e8e628b595d738fd-281769051


WORKDIR /app

COPY ["package.json", "./"]
RUN npm install
RUN npm install --dev
COPY . .

CMD ["node", "src/index.js"]