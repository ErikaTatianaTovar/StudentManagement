# Students Management

**Students Management** es una aplicación web para la gestión de estudiantes. Utiliza una combinación de tecnologías modernas para ofrecer una experiencia de usuario dinámica y eficiente.

## Tecnologías

- **Frontend**: React, Redux Toolkit, React Router DOM, SweetAlert2, Tailwind CSS
- **Backend**: Node.js, Express, MySQL, bcrypt, jsonwebtoken (JWT), node-fetch
- **Build Tool**: Vite
- **Linter**: ESLint

## Despliegue en vercel:
- **Frontend**: [student-management-frontend-phi.vercel.app](https://student-management-frontend-phi.vercel.app/)
- **Backend**: [student-management-backend-virid.vercel.app](https://student-management-backend-virid.vercel.app/)


Nota: El backend del proyecto se conecta a una base de datos alojada en Google Cloud, la cual requiere que las IPs que acceden a la base de datos estén autorizadas mediante el uso de direcciones IP estáticas. Sin embargo, es importante destacar que Vercel, la plataforma en la que el backend ha sido desplegado, utiliza direcciones IP dinámicas. Debido a esta limitación, la base de datos en Google Cloud no pudo autorizar las conexiones del backend, lo que ha resultado en la falta de funcionalidad del backend en el entorno de producción. Así mismo, para su funcionamiento en el entorno local, se dejó en el frontend el llamado a la API https://localhost:3000, puerto donde el backend corre localmente. Las indicaciones para la conexión a la base de datos local se detallan más adelante.


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
Estará corriendo en el puerto que aparece en la terminal.

### Scripts de NPM

- **`dev`**: Inicia el servidor de desarrollo usando Vite.
- **`build`**: Construye la aplicación para producción.
- **`preview`**: Muestra una vista previa de la versión construida de la aplicación.
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
    El servidor estará corriendo en el puerto que aparece en la terminal.

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
