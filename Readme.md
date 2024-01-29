# First Nodejs App 

1. Instalar dependencias
```shell
npm install
```
2. Revisar scripst en el `package.json`

3. Correr el proyecto 
```shell
npm run dev:ts
```

4. Realizar una peticion HTTP
     En mi caso realizare las peticiònes a traves de HTTPie :
    - Main 
        ```shell
        http GET http:localhost:3000/
        ```
    - Listar todos.
        ```shell
        http GET http:localhost:3000/api/getall
        ```
    - Listar por Id.
        ```shell
        http GET http:localhost:3000/api/getById/1
        ```
    - Crear.
        ```shell
        http POST http:localhost:3000/api/create id="3" nombre="Example 3"
        ```
    - Actuializar.
        ```shell
        http PUT http:localhost:3000/api/update/2 nombre="Nombre Actualizado"
        ```
    - Eliminar.
        ```shell
        http DELETE http:localhost:3000/api/delete/1
        ```






