import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLoginUserMutation } from '../../api/apiAuthSlice'; // Importa el hook de RTK Query
import { login } from '../../features/authSlice';
import { Link, useNavigate } from 'react-router-dom'; // Importa useNavigate
import Validations from '../../utils/validations';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser, { isLoading, error }] = useLoginUserMutation(); // Usa el hook de RTK Query para manejar el login
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!Validations.validateEmail(email)) {
      return; // Detiene el envío si el correo electrónico es inválido
    }

    try {
      const result = await loginUser({ email, password }).unwrap();
      dispatch(login(result)); // Actualiza el estado de autenticación
      navigate('/form'); // Redirige al usuario a la página /form después de iniciar sesión
    } catch (err) {
      // Aquí puedes manejar el error, ya sea mostrando un mensaje o registrándolo
      console.error("Error logging in:", err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-600">
      <div className="max-w-md w-full bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-transform transform hover:scale-105"
              placeholder="correo@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-transform transform hover:scale-105"
              placeholder="**********"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading} // Desactiva el botón si está cargando
            className={`w-full py-2 px-4 ${isLoading ? 'bg-gray-400' : 'bg-blue-600'} text-white font-semibold rounded-lg shadow-md hover:${isLoading ? 'bg-gray-500' : 'bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105`}
          >
            {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'} {/* Mensaje basado en el estado de carga */}
          </button>
          {error && <p className="text-red-500 text-center mt-2">{error.message}</p>} {/* Mostrar mensajes de error */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              ¿No tienes cuenta?{' '}
              <Link to="/register" className="text-blue-500 underline hover:text-blue-700">
                Regístrate aquí
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
