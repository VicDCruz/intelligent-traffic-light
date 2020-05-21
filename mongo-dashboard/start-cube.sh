#!/bin/bash

mongoimport --host db --db trafficlights --collection history --file /history.json
cd /real-time-dashboard
npm run dev