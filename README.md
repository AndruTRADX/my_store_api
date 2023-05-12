# My Store API

Esta API es una aplicación de tienda en la que los usuarios pueden realizar diversas acciones relacionadas con la gestión de productos, roles de usuario y más. Se conecta a una base de datos PostgreSQL utilizando Docker Compose. La autenticación se realiza mediante JSON Web Tokens (JWT) y admite operaciones como crear, actualizar, eliminar y obtener datos.

## Tecnologías

- Node.js
- Express.js
- PostgreSQL
- Docker Compose
- JWT (JSON Web Tokens)
- Sequelize (ORM para la base de datos)

## Requisitos del Sistema

- Node.js 14.x
- Docker Compose (si se utiliza la base de datos en contenedor)

## Instalación

1. Clona el repositorio en tu máquina local.
2. Ejecuta el siguiente comando para instalar las dependencias del proyecto:

```bash
#!/bin/bash
npm install
```

3. Configura las variables de entorno. Crea un archivo `.env` en la raíz del proyecto y establece los valores necesarios según el ejemplo provisto en `.env.example`.

4. Para utilizar el Docker Compose, asegúrate de tenerlo instalado y ejecuta el siguiente comando para levantar la base de datos PostgreSQL:

```bash
#!/bin/bash
docker-compose up -d
```

5. Ejecuta el siguiente comando para iniciar la API en modo de desarrollo:

```bash
#!/bin/bash
npm run dev
```

6. La API estará disponible en `http://localhost:3000`.

## Uso

Describe cómo utilizar tu API. Proporciona ejemplos de endpoints, solicitudes y respuestas que ayuden a los usuarios a comprender cómo interactuar con ella.

### Autenticación de Usuarios (Auth)

- `/auth/register`: Permite a los usuarios registrarse en la plataforma.
- `/auth/login`: Permite a los usuarios iniciar sesión y obtener un token de acceso JWT.

### Categorías (Category)

- `/categories`: Permite realizar operaciones CRUD en las categorías de productos.

### Clientes (Customer)

- `/customers`: Permite realizar operaciones CRUD en los clientes de la tienda.

### Pedidos (Order)

- `/orders`: Permite realizar operaciones CRUD en los pedidos realizados por los clientes.

### Productos (Product)

- `/products`: Permite realizar operaciones CRUD en los productos de la tienda.

### Usuarios (User)

- `/users`: Permite realizar operaciones CRUD en los usuarios de la plataforma.

## Estructura del Proyecto

- `/config`: Contiene archivos de configuración del proyecto.
- `/middlewares`: Contiene middlewares personalizados utilizados en las rutas.
- `/models`: Define los modelos de datos y las relaciones de la base de datos.
- `/routes`: Define las rutas y controladores de la API.
- `/services`: Contiene los servicios que realizan la lógica de negocio.
- `/utils`: Contiene funciones de utilidad reutilizables.

Hecho con 💜 por [AndruTRADX](https://github.com/AndruTRADX).
