function obtenerNombre() {
  let nombre=document.getElementById("nombreJugador").value;
  let div = document.getElementById("un_div");
  div.style.display = "none";
   let div1 = document.getElementById("dos_div");
  div1.style.display = "block";
  let div2 = document.getElementById("categorias");
  div2.style.display = "block";
  document.getElementById("nombre").innerHTML ="Hola " + nombre;
} 

function categoriaA() {
  let divDos = document.getElementById("dos_div");
  divDos.style.display = "none";
  let categorias=document.getElementById("categorias");
  categorias.style.display = "none";
   let div = document.getElementById("categoriaA");
  div.style.display = "block";
} 

function pregunta1() {
  let divDos = document.getElementById("pregunta1");
  divDos.style.display = "none";
   let div = document.getElementById("pregunta2");
  div.style.display = "block";
} 
function pregunta2() {
  let divDos = document.getElementById("pregunta2");
  divDos.style.display = "none";
   let div = document.getElementById("pregunta3");
  div.style.display = "block";
} 
function pregunta4() {
  let divDos = document.getElementById("pregunta4");
  divDos.style.display = "none";
  
 let div = document.getElementById("pregunta5");
  div.style.display = "block";
} 
function pregunta5() {
  let divDos = document.getElementById("pregunta5");
  divDos.style.display = "none";
   let div = document.getElementById("pregunta6");
  div.style.display = "block";
} 

function categoriaB() {
   let divDos = document.getElementById("dos_div");
  divDos.style.display = "none";
  
   let div = document.getElementById("categoriaB");
  div.style.display = "block";
  
  let categorias= 
     document.getElementById("categorias");
  categorias.style.display="none";
}

function verResultado() 
{  
    
  let divDos = document.getElementById("pregunta3");
  divDos.style.display = "none";
  
    let c1=0,c2=0,c3=0,i1=0,i2=0,i3=0, correctas,incorrectas;
    if (document.getElementById('r1').checked==true) 
    {
      c1=1;
    }else{
      i1=1;
    }
    if (document.getElementById('r6').checked==true) 
    {
      c2=1;
    }else{
      i2=1;
    }
    if (document.getElementById('r8').checked==true) 
    {
      c3=1;
    }else {
      i3=1;
    }
  
   correctas=c1+c2+c3;
   incorrectas=i1+i2+i3;
   document.getElementById("correctas").innerHTML ="<h5>Tu resultado es:</h5></br><div id='resultadostyle'>Correctas :" + correctas + "</br>Incorrectas:" + incorrectas +"</div>";
  
  let div2 = document.getElementById("categorias");
  div2.style.display = "block";
  
  let volver = document.getElementById("volver");
  volver.style.display = "block";
}

function verResultado2() 
{  
  let divDos = document.getElementById("pregunta6");
  divDos.style.display = "none";
  
 let c1=0,c2=0,c3=0,i1=0,i2=0,i3=0, correctas,incorrectas;
    if (document.getElementById('r11').checked==true) 
    {
      c1=1;
    }else{
      i1=1;
    }
    if (document.getElementById('r13').checked==true) 
    {
      c2=1;
    }else{
      i2=1;
    }
    if (document.getElementById('r18').checked==true) 
    {
      c3=1;
    }else {
      i3=1;
    }
  
   correctas=c1+c2+c3;
   incorrectas=i1+i2+i3;
   document.getElementById("correctas1").innerHTML ="<h5>Tu resultado es:<h5></br><div id='resultadostyle'> Correctas :" + correctas + "</br>Incorrectas:" + incorrectas + "</div>" ;
  
  let div2 = document.getElementById("categorias");
  div2.style.display = "block";
  
  let volver = document.getElementById("volver");
  volver.style.display = "block";
}