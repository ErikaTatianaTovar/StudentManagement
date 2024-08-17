import { useState } from 'react';
import Swal from 'sweetalert2';
import Validations from '../utils/validations';

const Form = () => {
  const [documentNumber, setDocumentNumber] = useState('');
  const [studentData, setStudentData] = useState(null);

  // Datos de ejemplo
  const approvedStudents = [
    {
      id: "fffdee6a-adec-4044-b3d5-d103f0e211e7",
      aprobado: true,
      estudiante: {
        nombres: "EDGAR LEONARDO",
        apellidos: "PARRA ALVAREZ",
        tipo_documento: "CC",
        num_documento: "1018473282",
        email: "edgarleonardo03@gmail.com"
      },
      curso: {
        nombreCurso: "Desarrollo Web Full Stack",
        codigoCurso: "DWFSH1-176",
        nivel: "Básico",
        modalidad: "Hibrido"
      }
    },
    {
      id: "ffff11ab-c496-40fc-bbf2-19be5295642b",
      aprobado: true,
      estudiante: {
        nombres: "WENDY JOHANA",
        apellidos: "SARMIENTO GUAYACUNDO",
        tipo_documento: "CC",
        num_documento: "53049323",
        email: "johana.sarmiento85@gmail.com"
      },
      curso: {
        nombreCurso: "Análisis y Visualización de Datos",
        codigoCurso: "AVDV2-88",
        nivel: "Intermedio",
        modalidad: "Virtual"
      }
    }
  ];


  const handleSubmit = (e) => {
    e.preventDefault();

    // Borra los datos de la consulta anterior
    setStudentData(null);

    if (!Validations.validateDocumentNumber(documentNumber)) {
      return;
    }

    const student = approvedStudents.find(student => student.estudiante.num_documento === documentNumber);
    
    if (student) {
      setStudentData(student);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Número de documento no encontrado',
        text: 'El número de documento ingresado no está registrado.',
      });
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
            <p><strong>Nombre Completo:</strong> {studentData.estudiante.nombres} {studentData.estudiante.apellidos}</p>
            <p><strong>Número de Documento:</strong> {studentData.estudiante.num_documento}</p>
            <p><strong>Correo Electrónico:</strong> {studentData.estudiante.email}</p>
            <p><strong>Nombre del Curso:</strong> {studentData.curso.nombreCurso}</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default Form;
