# BACKEND PROJECT

Este es un proyecto realizado por Angel Santiago Yañez Espinoza, en el cual se realizo una API que crea y gestiona usuarios y publicaciones

## INSTALA DEPENDENCIAS:
Para poder instalar las dependencias usa el siguiente comadno en tu terminal

```bash
npm install (el nombre de la dependencia deseada)
```

En este caso usamos la extension de VScode **Thunder Client**, para poder realizar las solicitudes
Primero tendras que levantar el servidor con el siguiente comando:
~~~
npm run dev
~~~

## ENDPOINTS 

El proyecto tiene los siguientes endpoints para su funcionamiento:
- **POST /auth/login**: Aqui se iniciara sesion una vez creado el usuario, este mismo te proporcionara un TOKEN para poder realizar publicaciones.
- **POST /user**: Crea un nuevo usuario.
- **GET /user/:id**: Obtiene la información de un usuario por su ID.
- **POST /post**: Crea una nueva publicación (para poder crear una puiblicacion tendras que poner el token antes mencionado en el apartado de HEADERS de ThunderClient, poniendo en la seccion HEADER "Authorization" y en value poner el token ).
- **GET /post**: Te dara todos los post publicados.
- **GET /post/:id**: Obtiene la información de una publicación por su ID.
- **PATCH /post/:id**: Actualiza la publicacion seleccionada por el ID.
- **DELETE /post/:id**: Elimina la publicacion seleccionada por el ID.


### Dependencias instaladas
bcryptjs
cors
dotenv
express
http-errors
jsonwebtoken
mongoose