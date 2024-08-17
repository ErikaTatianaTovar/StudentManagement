const fetch = require('node-fetch');

const checkApproval = async (numDocumento) => {
    try {
        const response = await fetch('https://api.talentotech.cymetria.com/api/v1/blockchain/obtener-estudiantes-aprobados');
        const data = await response.json();
        const { estudiantes_aprobados } = data;

        // Buscar el estudiante en los datos obtenidos usando num_documento
        const student = data.estudiantes_aprobados.find(student => student.estudiante.num_documento === numDocumento);

        if (!student) {
            throw { status: 404, message: 'Student not found or not approved' };
        }

        if (!student.aprobado) {
            return { message: 'Student is not approved' };
        }

        return {
            nombreCompleto: `${student.estudiante.nombres} ${student.estudiante.apellidos}`,
            numeroDocumento: student.estudiante.num_documento,
            correoElectronico: student.estudiante.email,
            nombreCurso: student.curso.nombreCurso
        };
    } catch (error) {
        throw { status: error.status || 500, message: error.message || 'Error fetching data from external endpoint' };
    }
};

module.exports = { checkApproval };
