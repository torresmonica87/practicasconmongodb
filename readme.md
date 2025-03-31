para ver los datos contenidos en bd. no estaba el archivo mongosh en bin entonces tocó descargarlo por aparte y luego de eso hacer la siguiente configuración para poder ver el contenido de la base de datos en la terminal 

con net start MongoDB
no permitió el acceso

en la power shell ponemos 

cd "C:\Program Files\MongoDB\Server\8.0\bin"

.\mongod.exe
 DE ESTA MANERA QUEDÓ INSTALADO mongosh

 ahora sólo bastó colocar:
  show dbs ....muestra las bd listas
  use curso ......aqui elegimod la bd
  show collections ....muestra lo que contiene la carpeta bd elegida ej cursos contiene alumnos
  db.alumnos.find() .... esto muestra los datos contenidos en alumnos
