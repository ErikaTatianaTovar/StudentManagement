import { useState } from "react";
import Validations from "../../utils/validations";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../api/apiAuthSlice";
import Swal from "sweetalert2";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerUser, { isLoading, error }] = useRegisterUserMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!Validations.validateEmail(email)) {
      return;
    }

    try {
      await registerUser({ email, password }).unwrap();
      navigate("/login");
    } catch (err) {
      if (err.status === 500 && err.data?.error.includes("Duplicate entry")) {
        Swal.fire({
          icon: "error",
          title: "Correo ya registrado",
          text: "El correo electrónico ingresado ya está registrado.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Ocurrió un error al registrar el usuario.",
        });
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-600">
      <div className="max-w-md w-full bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Regístrate
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Correo Electrónico
            </label>
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
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>
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
            disabled={isLoading}
            className={`w-full py-2 px-4 ${
              isLoading ? "bg-gray-400" : "bg-blue-600"
            } text-white font-semibold rounded-lg shadow-md hover:${
              isLoading ? "bg-gray-500" : "bg-blue-700"
            } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105`}
          >
            {isLoading ? "Registrando..." : "Registrarse"}
          </button>
          {error && (
            <p className="text-red-500 text-center mt-2">{error.message}</p>
          )}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              ¿Ya tienes una cuenta?{" "}
              <Link
                to="/login"
                className="text-blue-500 underline hover:text-blue-700"
              >
                Inicia sesión
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
