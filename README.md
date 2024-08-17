# Students Management

**Students Management** es una aplicación web para la gestión de estudiantes. Utiliza una combinación de tecnologías modernas para ofrecer una experiencia de usuario dinámica y eficiente.

## Tecnologías

- **Frontend**: React, Redux Toolkit, React Router DOM, SweetAlert2, Tailwind CSS
- **Backend**: Node.js, Express, MySQL, bcrypt, jsonwebtoken (JWT), node-fetch
- **Build Tool**: Vite
- **Linter**: ESLint

---

## Frontend

### Descripción

El frontend de la aplicación está desarrollado con React y utiliza Redux Toolkit para el manejo del estado. Tailwind CSS se encarga del diseño y la apariencia, mientras que SweetAlert2 se utiliza para mostrar mensajes de alerta.

### Instalación

1. **Clona el repositorio**:
    ```bash
    git clone https://github.com/tu-usuario/students-management.git
    cd students-management
    ```

2. **Instala las dependencias**:
    ```bash
    npm install
    ```

3. **Ejecuta el servidor de desarrollo**:
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:3000`.

### Scripts de NPM

- **`dev`**: Inicia el servidor de desarrollo usando Vite.
- **`build`**: Construye la aplicación para producción.
- **`preview`**: Muestra una vista previa de la versión construida de la aplicación.
- **`lint`**: Ejecuta ESLint para verificar problemas de estilo y errores.

---

## Backend

### Descripción

Este backend ofrece funcionalidades básicas para gestionar usuarios y validar la aprobación de estudiantes. Utiliza Node.js y Express junto con una base de datos MySQL para el almacenamiento de datos.

### Configuración de la Base de Datos

#### Base de Datos en la Nube

Utilizamos MySQL en Google Cloud. La base de datos contiene una tabla `user` con las siguientes columnas:

- `id`
- `email`
- `passwordhash`

Para acceder a la base de datos en Google Cloud, debe compartir la IP, para agregarlo a las redes permitidas.

#### Configuración Local

Si prefieres probar la base de datos localmente, sigue estos pasos:

1. Crea una base de datos en tu entorno local.
2. Edita el archivo de configuración (`config`) para conectar tu aplicación a esta base de datos local.
3. Crea la tabla `user` con las siguientes columnas:
   - `id`
   - `email`
   - `passwordhash`

### Instalación

1. **Clona el repositorio**:
    ```bash
    git clone https://github.com/ErikaTatianaTovar/StudentManagement_backend.git
    cd StudentManagement_backend
    ```

2. **Instala las dependencias**:
    ```bash
    npm install
    ```

3. **Configura la base de datos**:
    - Asegúrate de tener MySQL en ejecución.
    - Configura el archivo de conexión a la base de datos con tus credenciales.

4. **Ejecuta el servidor**:
    ```bash
    npm start
    ```
    El servidor estará corriendo en `http://localhost:3000`.

### Endpoints

1. **Registro de Usuario**
   - **Método**: `POST`
   - **Ruta**: `/register`
   - **Cuerpo**:
     ```json
     {
         "email": "usuario@example.com",
         "password": "contraseña"
     }
     ```
   - **Descripción**: Crea un nuevo usuario en la base de datos.

2. **Inicio de Sesión**
   - **Método**: `POST`
   - **Ruta**: `/login`
   - **Cuerpo**:
     ```json
     {
         "email": "usuario@example.com",
         "password": "contraseña"
     }
     ```
   - **Descripción**: Inicia sesión y devuelve un token JWT.

3. **Obtener Usuario por Email (Autenticado)**
   - **Método**: `GET`
   - **Ruta**: `/users/:email`
   - **Headers**:
     - `Authorization`: `Bearer <TOKEN_JWT>`
   - **Descripción**: Obtiene los detalles del usuario basado en el email.

4. **Validar Aprobación de Estudiante (Autenticado)**
   - **Método**: `POST`
   - **Ruta**: `/students/:num_documento/approval`
   - **Headers**:
     - `Authorization`: `Bearer <TOKEN_JWT>`
   - **Descripción**: Verifica si el estudiante con el `num_documento` está aprobado. Usa un servicio externo para validar.

### Autenticación

Para acceder a los endpoints protegidos, necesitas un token JWT. Puedes obtener este token a través del endpoint de inicio de sesión (`/login`).

¡Gracias por visitar el repositorio de Students Management!
