document.addEventListener("DOMContentLoaded", function() {
    const cardNumberInput = document.getElementById("card-number");
    const cardHolderInput = document.getElementById("card-holder");
    const expirationDateInput = document.getElementById("expiration-date");
    const cvvInput = document.getElementById("cvv");
  
    cardNumberInput.addEventListener("input", function() {
      this.value = this.value.replace(/[^0-9 ]/g, "");
    });
  
    cardHolderInput.addEventListener("input", function() {
      this.value = this.value.replace(/[^a-zA-Z ]/g, "");
    });
  
    expirationDateInput.addEventListener("input", function() {
      this.value = this.value.replace(/[^0-9/]/g, "");
    });
  
    cvvInput.addEventListener("input", function() {
      this.value = this.value.replace(/[^0-9]/g, "");
      if (this.value.length > 3) {
        this.value = this.value.slice(0, 3); 
      }
    });
  
    function validarCaracteresAlfabeticos(cadena) {
      const abecedario = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      return [...cadena].every(caracter => abecedario.includes(caracter));
    }
  
    function validarNumerosEnteros(cadena) {
      const numerosValidos = '0123456789';
      return [...cadena].every(caracter => numerosValidos.includes(caracter));
    }
  
    function validarFecha(cadena) {
      const partes = cadena.split("/");
      if (partes.length !== 3) {
        return false;
      }
      for (const parte of partes) {
        if (!/^\d{2}$/.test(parte)) {
          return false;
        }
      }
      const [dia, mes, anio] = partes.map(Number);
      if (dia < 1 || dia > 31 || mes < 1 || mes > 12) {
        return false;
      }
      if (anio < 1900 || anio > 2099) {
        return false;
      }
      return true;
    }
  });
  