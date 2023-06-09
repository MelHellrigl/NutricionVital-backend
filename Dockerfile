FROM node:19-alpine

ENV NODE_ENV=production
ENV PORT=3001
ENV MONGO_CLIENT=nutricionvitaldb
ENV MONGO_PASSWORD=yxhyFMicnJyvuMIK
ENV MONGO_CNN=mongodb+srv://nutricionvitaldb:yxhyFMicnJyvuMIK@nutricionvitalcluster.2pqdlni.mongodb.net/?retryWrites=true&w=majority
ENV GOOGLE_PASSWORD=yjaambhnutnllxrs
ENV MP_ACCESS_TOKEN=APP_USR-6947092047695338-051714-ef92b38d1c096926e8e628b595d738fd-281769051


WORKDIR /app

COPY ["package.json", "./"]
RUN npm install
RUN npm install --dev
COPY . .

CMD ["node", "src/index.js"]