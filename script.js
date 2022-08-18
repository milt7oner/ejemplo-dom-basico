/*const h1 = document.querySelector('h1')
const p = document.querySelectorAll('p')
const parrafito = document.querySelector('.parrafito')
const pid = document.getElementById('pid')
const input = document.querySelector('input')
console.log(input.value)
console.log({
    h1,
    p,
    parrafito,
    pid,
    input
})

h1.innerText = 'Patito'

// Crear un elemento de html desde Js

const img = document.createElement('img')
img.setAttribute('src', 'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg')

pid.append(img)

const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const pResult = document.querySelector('#result')
const form = document.querySelector('#form')
form.addEventListener('sumit', btnOnClick)
function btnOnClick(event){
    console.log(event)
    event.preventDefault();
    const sumaInputs = +input1.value + +input2.value ;
    pResult.innerText = "Resultado:" + sumaInputs;
}*/
const input1 = document.querySelector("#numero1"); 
const form = document.querySelector("#form"); 
const input2 = document.querySelector("#numero2"); 
const btn = document.querySelector("#btncalcular"); 
const suma = document.querySelector("#sumaid");

//addEventListener

form.addEventListener("mouseover", enviarFormulario)

function enviarFormulario(e){
    e.preventDefault();

    alert("virus")
}