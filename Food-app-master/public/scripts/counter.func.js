let sumar = document.getElementsByClassName("suma");
let restar = document.getElementsByClassName("resta");
let contador = document.getElementsByClassName("conta-cantidad");
let prevValue=0;

for(let i=0;i<contador.length;i++){

    function validar(){
        let value = contador[i].value;
        let isValid = /^[0-9][0-9]*$/.test(value);

        if (!isValid) {
          contador[i].value = prevValue;
        } else {
          prevValue = value;
        }

    }

    sumar[i].onclick = function() {
        contador[i].value = Number(contador[i].value) + 1;
        validar()
    };
    
    restar[i].onclick = function() {
        contador[i].value = Number(contador[i].value) - 1;
        validar()
    };

    contador[i].onchange = function() {
        validar()
      };

    contador[i].onkeyup = function() {
        if (contador.value === "") {
          return;
        }
        validar()
      };

      validar()


}

