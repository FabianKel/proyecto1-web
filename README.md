# Proyecto: BLOG CRUD

Sistemas y Tecnologías Web
Derek Arreaga - 22537
<p align="center">
  <img src="https://github.com/FabianKel/lab6-web/assets/86095196/72d0cd41-4660-45e8-8b34-aa8793addeff" alt="logo1">
</p>



Este proyecto es una aplicación web desarrollada en React que consume una API sobre el Futbol Club Barcelona, creada por mi. La documentación de la API se encuentra en [este enlace](https://github.com/FabianKel/lab6-web/blob/main/README.md).

## Tecnologías Utilizadas

- **React:** Framework utilizado para el desarrollo de la aplicación.
- **VITE:** Empaquetador utilizado para la construcción del proyecto.

### Custom Hooks

#### useApi

Un hook para mejorar el manejo de fetching de data a la API.

#### useNavigate

Este hook se encarga de la navegación en la aplicación. Toma como parámetro una URL y actualiza la página actual.

#### useToken

Este hook gestiona el token de autenticación. Permite obtener, establecer y verificar el token de acceso.

### Componentes

El proyecto utiliza contextos y proveedores para manejar el estado de la aplicación.

#### NavigationProvider

Un proveedor de contexto que maneja la navegación en la aplicación. Utiliza el hook `useNavigate` para cambiar entre páginas.

#### TokenProvider

Un proveedor de contexto que gestiona el token de autenticación. Utiliza el hook `useToken` para obtener y establecer el token.

## Funcionalidades

El proyecto cuenta con las siguientes opciones:

- **Visualización de Posts del Blog:** Permite visualizar posts del blog.
- **Visualización de Resultados del FC Barcelona 23/24:** Muestra todos los resultados del FC Barcelona de la temporada 23/24, incluyendo goles a favor, goles en contra y minutos de los goles.
- **CRUD de Posts:** Permite la creación, eliminación y edición de posts.

## Autenticación JWT

El proyecto incluye un sistema de autenticación con JWT con el siguiente flujo:

1. **Registro:** Los usuarios pueden registrarse con un nombre de usuario único, un correo electrónico y una contraseña. Las contraseñas se hashean utilizando crypto-js.
2. **Inicio de Sesión:** Los usuarios pueden iniciar sesión utilizando los datos de la cuenta creada. Las contraseñas se hashean durante el inicio de sesión.
3. **Token JWT:** Al iniciar sesión, se genera un token JWT que expira después de 10 minutos. Después de expirar, el usuario debe iniciar sesión nuevamente para realizar acciones CRUD, excepto para ver la información.

### Installation
Como instalar el proyecto en su ordenador:

1. Clonar el repositorio:

```
git clone https://github.com/FabianKel/proyecto1-web.git
```

3. Dirigirse al directorio del proyecto
```
cd proyecto1-web
```

5. Instalar las dependencias:
```
npm install
```

7. Iniciar el entorno de desarrollo
```
npm run dev
```

## Inspiración

Este proyecto está inspirado en el FC Barcelona, el mejor equipo del mundo. Independientemente de las circunstancias, seguiré apoyando al equipo. ¡Visca Barça!

