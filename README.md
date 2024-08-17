# Students Management

**Students Management** es una aplicación web para la gestión de estudiantes. Utiliza una combinación de tecnologías modernas como React, Redux Toolkit, Tailwind CSS, y Vite para ofrecer una experiencia de usuario dinámica y eficiente.

## Tecnologías

- **Frontend**: React, Redux Toolkit, React Router DOM, SweetAlert2, Tailwind CSS
- **Backend**: JSON Server (para desarrollo), JSON Web Token (JWT) para autenticación
- **Build Tool**: Vite
- **Linter**: ESLint

## Instalación

Para comenzar a trabajar con el proyecto, sigue estos pasos:

### Clonar el Repositorio

Primero, clona el repositorio a tu máquina local:

```bash
git clone https://github.com/tu-usuario/students-management.git
cd students-management

# Student Management Backend

Este proyecto es un backend para gestionar usuarios y validar estudiantes aprobados utilizando Node.js, Express y MySQL. 

## Descripción

Este backend ofrece funcionalidades básicas como:
1. Registro de nuevos usuarios.
2. Inicio de sesión de usuarios.
3. Validación de la aprobación de estudiantes a través de un servicio externo.

## Tecnologías Utilizadas-**Node.js**: Entorno de ejecución para JavaScript en el servidor.
-**Express**: Framework para Node.js para construir aplicaciones web.
-**MySQL**: Sistema de gestión de bases de datos relacional.
-**bcrypt**: Librería para el hash de contraseñas.
-**jsonwebtoken (JWT)**: Librería para manejar tokens de autenticación.
-**node-fetch**: Librería para hacer solicitudes HTTP.

## Instalación1.**Clona el repositorio**:
    ```bash
    git clone https://github.com/ErikaTatianaTovar/StudentManagement_backend.git
    ```
2.**Instala las dependencias**:
    ```bash
    cd backend
    npm install
    ```
3.**Configura la base de datos**:
    - Asegúrate de tener MySQL en ejecución.
    - Configura el archivo de conexión a la base de datos con tus credenciales.

4.**Ejecuta el servidor**:
    ```bash
    npm start
    ```
    El servidor debería estar corriendo en `http://localhost:3000`.

## Endpoints### 1. Registro de Usuario-**Método**: `POST`-**Ruta**: `/register`-**Cuerpo**:
    ```json
    {
        "email": "usuario@example.com",
        "password": "contraseña"
    }
    ```
- **Descripción**: Crea un nuevo usuario en la base de datos.

### 2. Inicio de Sesión-**Método**: `POST`-**Ruta**: `/login`-**Cuerpo**:
    ```json
    {
        "email": "usuario@example.com",
        "password": "contraseña"
    }
    ```
- **Descripción**: Inicia sesión y devuelve un token JWT.

### 3. Obtener Usuario por Email (Autenticado)-**Método**: `GET`-**Ruta**: `/users/:email`-**Headers**:
    -`Authorization`: `Bearer <TOKEN_JWT>`-**Descripción**: Obtiene los detalles del usuario basado en el email.

### 4. Validar Aprobación de Estudiante (Autenticado)-**Método**: `POST`-**Ruta**: `/students/:num_documento/approval`-**Headers**:
    -`Authorization`: `Bearer <TOKEN_JWT>`-**Descripción**: Verifica si el estudiante con el `num_documento` está aprobado. Usa un servicio externo para validar.

## Autenticación

Para acceder a los endpoints protegidos, necesitas un token JWT. Puedes obtener este token a través del endpoint de inicio de sesión (`/login`).