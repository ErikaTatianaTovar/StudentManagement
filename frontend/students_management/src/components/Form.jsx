import { useState } from 'react';
import Swal from 'sweetalert2';
import Validations from '../utils/validations';
import { useCheckStudentApprovalMutation } from '../api/apiAuthSlice';
import { Navigate } from 'react-router-dom';

const Form = () => {
  const [documentNumber, setDocumentNumber] = useState('');
  const [studentData, setStudentData] = useState(null);
  const [checkStudentApproval] = useCheckStudentApprovalMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Borra los datos de la consulta anterior
    setStudentData(null);

    if (!Validations.validateDocumentNumber(documentNumber)) {
      return;
    }

    try {
      const result = await checkStudentApproval(documentNumber).unwrap();
      setStudentData(result);
    } catch (err) {
      if (err.status === 401 || err.status === 403) {
        // Muestra un mensaje de error si el correo ya está registrado
        Swal.fire({
          icon: 'error',
          title: 'Sesión inválida',
          text: 'Por favor inicie sesión nuevamente',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Número de documento no encontrado',
          text: 'El número de documento ingresado no está registrado.',
        });
      }
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 pt-8">
      <div className="max-w-lg w-full p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Consulta de Estudiantes</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="documentNumber" className="block text-sm font-medium text-gray-700">Número de Documento</label>
            <input
              type="text"
              id="documentNumber"
              value={documentNumber}
              onChange={(e) => setDocumentNumber(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Buscar
          </button>
        </form>

        {studentData && (
          <div className="mt-6 p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Información del Estudiante</h3>
            <p><strong>Nombre Completo:</strong> {studentData.nombreCompleto}</p>
            <p><strong>Número de Documento:</strong> {studentData.numeroDocumento}</p>
            <p><strong>Correo Electrónico:</strong> {studentData.correoElectronico}</p>
            <p><strong>Nombre del Curso:</strong> {studentData.nombreCurso}</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default Form;
