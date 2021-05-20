#! /bin/sh

set -e
# set -x

# Definit le HOST d'une Review App
which heroku >/dev/null || (echo "Heroku cli not found" && exit 1)

heroku config:set --app $HEROKU_APP_NAME HOST=https://$HEROKU_APP_NAME.herokuapp.com
