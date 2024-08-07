

/* FUNCION  QUE CAMBIA DE COLOR EL BOTON DE WHATSAPP*/ 
var btnWhats = document.getElementById('botonWhatsApp');
btnWhats.addEventListener('pointerover', cambiarColor);
btnWhats.addEventListener('pointerout', regresarcolor);
function cambiarColor(){
   document.getElementById('letraBotonwhat').style.color = '#54A228';
}
function regresarcolor(){
   document.getElementById('letraBotonwhat').style.color = '#FFFFFF';
}
function irWhatsApp(){
   window.location= "https://acortar.link/ZeAqcY";
}
function irMap(){
   window.location="https://www.google.com/maps/place/Corpmetales/@-2.1678488,-79.8421832,15.26z/data=!4m6!3m5!1s0x902d6c0cb6a4812f:0x246dcd76e692c3e6!8m2!3d-2.1697693!4d-79.8364498!16s%2Fg%2F11clv_lhgx?entry=ttu";
}
