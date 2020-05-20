# 1 - Base de datos
# 2 - Dir. del archivo
# 3 - Coleccion
mongoimport --host db --db $1 --collection $3 --file $2
