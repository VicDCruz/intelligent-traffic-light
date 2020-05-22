#!/bin/bash

mongoimport --host db --db trafficlights --collection history --file /history.json
# mongorestore --host=db --drop /events-dump/dump/stats/events.bson
cd /real-time-dashboard
npm run dev