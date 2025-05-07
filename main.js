let boton_numero = document.querySelectorAll(".boton.numero");
let boton_operaciones = document.querySelectorAll(".boton.operaciones");
let boton_into = document.querySelectorAll(".boton.into")


let operacion;
let num1;
let num2;
let result;
let porcentaje1;

let input = document.querySelector(".interfaz-2");
//input.value = boton_numero[9].textContent;

//Botones numericos
boton_numero[0].addEventListener("click", mostrarnumero);
boton_numero[1].addEventListener("click", mostrarnumero);
boton_numero[2].addEventListener("click", mostrarnumero); // 9
boton_numero[3].addEventListener("click", mostrarnumero); // 4
boton_numero[4].addEventListener("click", mostrarnumero); // 5
boton_numero[5].addEventListener("click", mostrarnumero); // 6
boton_numero[6].addEventListener("click", mostrarnumero); // 1
boton_numero[7].addEventListener("click", mostrarnumero); // 2
boton_numero[8].addEventListener("click", mostrarnumero); // 3
boton_numero[9].addEventListener("click", mostrarnumero); // 0
boton_numero[10].addEventListener("click", mostrarnumero); // punto

//Botones de operaciones:
boton_operaciones[0].addEventListener("click",division)
boton_operaciones[1].addEventListener("click",multiplicacion)
boton_operaciones[2].addEventListener("click",resta)
boton_operaciones[3].addEventListener("click",suma)
boton_operaciones[4].addEventListener("click",resultado)

//Botones de intos
boton_into[0].addEventListener("click",porcentaje)
boton_into[1].addEventListener("click",borrarTodo) //Boton de 'C' osea borrar todo
boton_into[2].addEventListener("click",borrarUno) //Boton de '<----' osea borrar solo uno

function mostrarnumero() {

  // --------------------------
  if(input.value == result) {  //Esto es para borraar el numero despues de que te mande un resultadoo
    input.value = "";
  }
  // ---------------------------

  if(event.target==boton_numero[0]){
    
    input.value += "7";
    
  }
  else if(event.target==boton_numero[1]){
    
    input.value += "8";
  }
  else if(event.target==boton_numero[2]){
    
    input.value += "9";
  }
  else if (event.target == boton_numero[3]) {
    
    input.value += "4";
  } 
  else if (event.target == boton_numero[4]) {
    
    input.value += "5";
  } 
  else if (event.target == boton_numero[5]) {
    
    input.value += "6";
  } 
  else if (event.target == boton_numero[6]) {
    
    input.value += "1";
  } 
  else if (event.target == boton_numero[7]) {
    
    input.value += "2";
  } 
  else if (event.target == boton_numero[8]) {
    input.value += "3";
  } 
  else if (event.target == boton_numero[9]) {
    input.value += "0";
  } 
  else if (event.target == boton_numero[10]) {
    input.value += ".";
  }
  else if (event.target == boton_into[0]) {
    input.value += "%";
  }

  

 
}
/*FUNCIONES DE LAS OPERACIONES */
function suma(){
    num1 = parseFloat(input.value);
    
    operacion ="+";

    input.value =" ";
    
    console.log("Primer numero guardado es: "+ num1)
   
}

function division(){
    num1 = parseFloat(input.value);
    operacion ="/";
    input.value =" ";
    
    console.log("Primer numero guardado es: "+ num1)
}

function multiplicacion(){
  num1 = parseFloat(input.value);
  operacion ="*";
  input.value =" ";
  
  console.log("Primer numero guardado es: "+ num1)
}

function resta(){
  num1 = parseFloat(input.value);
  operacion ="-";
  input.value =" ";
  
  console.log("Primer numero guardado es: "+ num1)
}


//------------------------------------------------------------
//Funcion de resultado
function resultado(){
  num2 = parseFloat(input.value)
  console.log("Segundo numero guardado: "+num2)
   

  if(operacion == "+"){ //Suma
    result = num1 + num2;
    input.value = result;
    console.log("suma de estos numeros: "+ result)
  }
  else if(operacion == "/"){ //Division
    result = num1 / num2;
    input.value = result
  }
  else if(operacion == "*"){ //Multiplicacion
    result = num1 * num2;
    input.value = result
  }
  else if(operacion == "-"){ //Resta
    result = num1 - num2;
    input.value = result
  }
  
}

//----------------------------------------------------------------
//FUNCIONES PARA LOS BOTONES INTO

//Porcentaje:
function porcentaje(){
num1 = input.value / 100;
console.log("El numero con porcentaje es: "+num1);

input.value = num1;
}

//Boton para borrar todo:
function borrarTodo(){
input.value="";
}

//Boton para borrar uno:
function borrarUno(){
num1 = input.value;

input.value = num1.slice(0,-1)  //slice(inicio, fin)  - inicio: Desde la posicion empiezas a cortar - fin: hasta que posicion cortas sin incluirla

}











/*
let numero_7 = boton_numero[0].textContent;
let numero_8 = boton_numero[1].textContent;
let numero_9 = boton_numero[2].textContent;
let numero_4 = boton_numero[3].textContent;
let numero_5 = boton_numero[4].textContent;
let numero_6 = boton_numero[5].textContent;
let numero_1 = boton_numero[6].textContent;
let numero_2 = boton_numero[7].textContent;
let numero_3 = boton_numero[8].textContent;
let numero_0 = boton_numero[9].textContent;
let punto = boton_numero[0].textContent;
*/


