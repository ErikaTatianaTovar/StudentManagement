import Swal from 'sweetalert2';

class Validations {
    static validateEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!regex.test(email)) {
            Swal.fire('Error', 'El correo electrónico es inválido.', 'error');
            return false;
        }
        return true;
    }

    static validateDocumentNumber = (number) => {
        const regex = /^[0-9]{6,10}$/;
        const hasRepeatedSequence = /^(.)\1+$/.test(number);
        const hasConsecutiveSequence = /^(?:(\d+)(?:\1)+)$/.test(number);
    
        if (!regex.test(number)) {
          Swal.fire('Error', 'El número de documento debe tener entre 6 y 10 dígitos.', 'error');
          return false;
        }
    
        if (hasRepeatedSequence || hasConsecutiveSequence) {
          Swal.fire('Error', 'El número de documento no debe contener secuencias repetidas.', 'error');
          return false;
        }
    
        return true;
      };
}

export default Validations;
