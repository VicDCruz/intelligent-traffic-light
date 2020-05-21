FROM node:10.16.0

RUN apt update
RUN apt install -y mongodb
RUN apt install -y nano
RUN npm install -g cubejs-cli
RUN npm i --save @cubejs-client/core
RUN npm i --save @cubejs-client/react

WORKDIR /real-time-dashboard

COPY real-time-dashboard /real-time-dashboard
RUN rm -rf node_modules
RUN npm install

COPY dashboard-app /real-time-dashboard/dashboard-app
WORKDIR /real-time-dashboard/dashboard-app
RUN rm -rf node_modules
RUN npm install

ENV PATH /real-time-dashboard/node_modules/.bin:$PATH
ENV PATH /real-time-dashboard/dashboard-app/node_modules/.bin:$PATH

WORKDIR /

COPY start-cube.sh start-cube.sh
RUN chmod +x start-cube.sh

EXPOSE 4000
EXPOSE 3000

# ENTRYPOINT [ "npm", "run", "dev" ]
ENTRYPOINT [ "sh", "./start-cube.sh" ]
