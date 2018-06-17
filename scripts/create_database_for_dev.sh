#!/bin/sh
USER_NAME_HERE=nodeshot
DATABASE_NAME_HERE=nodeshot
sudo -u postgres createuser -P $USER_NAME_HERE
sudo -u postgres createdb -O $USER_NAME_HERE $DATABASE_NAME_HERE #Remember to change in settings.py
#Enable PostGIS
sudo -u postgres psql -c "CREATE EXTENSION postgis; CREATE EXTENSION hstore;" $DATABASE_NAME_HERE
