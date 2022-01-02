//Declaracion Variables

let button_0 = document.getElementById('0');
let button_1 = document.getElementById('1');
let button_2 = document.getElementById('2');
let button_3 = document.getElementById('3');
let button_4 = document.getElementById('4');
let button_5 = document.getElementById('5');
let button_6 = document.getElementById('6');
let button_7 = document.getElementById('7');
let button_8 = document.getElementById('8');
let button_9 = document.getElementById('9');
let button_punto = document.getElementById('.');
let button_eliminar = document.getElementById('del');
let button_limpiar = document.getElementById('ac');
let button_multiplicacion = document.getElementById('x');
let button_division = document.getElementById('/');
let button_suma = document.getElementById('+');
let button_resta = document.getElementById('-');
let button_potencia = document.getElementById('^');
let button_igual = document.getElementById('=');

function agregarNumero(numero) {
    document.getElementById('display').value+=numero;
}

function agregarPunto() {
    let valor = document.getElementById('display').value;

    if (valor.includes(".") ) {
        alert("Ya escribiste un punto");
    }else{
        agregarNumero(".");
    }
}

function resultado() {
    if (op == "") {
        alert("Primero haga una operacion")
    }else{
        num2 = parseFloat(document.getElementById('display').value);
        contador = 0;
        //Switch

        switch (op) {
            case "Suma":
                res = num1 + num2;
                document.getElementById('display').value = res;
                break;

            case "Resta":
                res = num1 - num2;
                document.getElementById('display').value = res;
                break;

            case "Multiplicacion":
                res = num1 * num2;
                document.getElementById('display').value = res;
                break;

            case "Division":
                res = num1 / num2;
                document.getElementById('display').value = res;
                break;

            case "Potencia":
                res = Math.pow(num1, num2)
                document.getElementById('display').value = res;
                break;
        }

    }
}

function limpiar_operacion() {
    document.getElementById('display').value = "";
}

//Eventos cuando presionen botones

let num1 = 0, num2 = 0, res = 0, op = "", contador = 0;

//Onclick Eliminar
button_eliminar.onclick = function() {
    let contenido = document.getElementById('display').value;

    if (contenido.length > 0) {
        //Me selecciona los caracteres que hay desde la posicion 0 hasta la longitud del input -1, es decir si tiene 6 caracteres, muestra desde el 0 al 5
        contenido = contenido.substring(0, contenido.length-1);
        document.getElementById('display').value = contenido;
    }

}

//Onclick Limpiar
button_limpiar.onclick = function() {
    let contenido = document.getElementById('display').value = "";
    num1 = 0, num1 = 0, res = 0, contador = 0, op = "";
}

//Onclick Sumar
button_suma.onclick = function() {
    contador++;

    if (contador >= 2) {
        resultado();
    }

    num1 = parseFloat(document.getElementById('display').value);
    limpiar_operacion();
    op = "Suma";
}

//Onclick restar
button_resta.onclick = function() {

    contador++;
    
    if (contador >= 2) {
        resultado();
    }

    num1 = parseFloat(document.getElementById('display').value);
    limpiar_operacion();
    op = "Resta";
}

//Onclick Multiplicar
button_multiplicacion.onclick = function() {

    contador++;
    
    if (contador >= 2) {
        resultado();
    }

    num1 = parseFloat(document.getElementById('display').value);
    limpiar_operacion();
    op = "Multiplicacion";
}

//Onclick Dividir
button_division.onclick = function() {

    contador++;
    
    if (contador >= 2) {
        resultado();
    }

    num1 = parseFloat(document.getElementById('display').value);
    limpiar_operacion();
    op = "Division";
}

//Onclick Potencia
button_potencia.onclick = function() {
    num1 = parseFloat(document.getElementById('display').value);
    limpiar_operacion();
    op = "Potencia";
}