let boton_numero = document.querySelectorAll(".boton.numero");
let boton_operaciones = document.querySelectorAll(".boton.operaciones");


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


function mostrarnumero() {

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
  } else if (event.target == boton_numero[4]) {
    input.value += "5";
  } else if (event.target == boton_numero[5]) {
    input.value += "6";
  } else if (event.target == boton_numero[6]) {
    input.value += "1";
  } else if (event.target == boton_numero[7]) {
    input.value += "2";
  } else if (event.target == boton_numero[8]) {
    input.value += "3";
  } else if (event.target == boton_numero[9]) {
    input.value += "0";
  } else if (event.target == boton_numero[10]) {
    input.value += ".";
  }
  
  suma();
 

}

function suma(){
    let a = input.value;
    console.log(a);

    
    
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


