var Ordenes = [];
var pedido = new Object();
var totalPedido=0;
var totalCombo=7.25;
var msg="";
var comboS="Super combo: $7.25", ensaladaS, papasS, polloGrandeS, polloMedianoS, polloPequenoS, bebidaPequenaS, bebidaMedianaS;
var bebidaGrandeS, cafeS, postreS;
var auxi=0;

var inputTotal = document.getElementById('total');
var radioSuperCombo = document.getElementById('superCombo');
var radioComboPersonal = document.getElementById('comboPersonal');
var radiocomboInfantil = document.getElementById('comboInfantil');
var checkEnsalada = document.getElementById('ensalada');
var checkPapas = document.getElementById('papas');
var checkPolloGrande = document.getElementById('polloGrande');
var checkPolloMediano = document.getElementById('polloMediano');
var checkPolloPequeno = document.getElementById('polloPequeno');
var checkBebidaGrande = document.getElementById('bebidaGrande');
var checkBebidaMediana = document.getElementById('bebidaMediana');
var checkBebidaPequena = document.getElementById('bebidaPequena');
var checkCafe = document.getElementById('cafe');
var checkPostre = document.getElementById('postre');
var divSugerencias = document.getElementById('sugerenciasDiv');
var TextSugerencias = document.getElementById('sugerenciasText');
var btnEnviar = document.getElementById('enviar');
var resultado = document.getElementById('resultado');
var precioFinal = document.getElementById('precioFinal');

function init() {
    if(addEventListener){
        radioSuperCombo.addEventListener('change',combo,false);
        radioComboPersonal.addEventListener('change',combo,false);
        radiocomboInfantil.addEventListener('change',combo,false);
        checkEnsalada.addEventListener('click',ensalada,false);
        checkPapas.addEventListener('click',papas,false);
        checkPolloGrande.addEventListener('click',polloGrande,false);
        checkPolloMediano.addEventListener('click',polloMediano,false);
        checkPolloPequeno.addEventListener('click',polloPequeno,false);
        checkBebidaGrande.addEventListener('click',bebidaGrande,false);
        checkBebidaMediana.addEventListener('click',bebidaMediana,false);
        checkBebidaPequena.addEventListener('click',bebidaPequena,false);
        checkCafe.addEventListener('click',cafe,false);
        checkPostre.addEventListener('click',postre,false);
        divSugerencias.addEventListener('click',cambiarDiv,false);
        btnEnviar.addEventListener('click',guardarPedido,false);
    }
}

function combo(){
    comboS="";
    if(radioSuperCombo.checked){
        totalCombo = 7.25;
        comboS="Super combo: $7.25";
    }else if(radioComboPersonal.checked){
        totalCombo = 5.75;
        comboS="Combo personal: $5.75";
    }else{
        totalCombo = 3.50;
        comboS="Combo infantil: $3.50";
    }
    cambiarTotal();
}

function ensalada(){
    ensaladaS="";
    if(checkEnsalada.checked){
        totalPedido+=1.50;
        ensaladaS="Ensalada: $1.50";
    }else{
        totalPedido-=1.50;
    }
    cambiarTotal();
}

function papas(){
    papasS="";
    if(checkPapas.checked){
        totalPedido+=1.25;
        papasS="Papas fritas:  $1.25"
    }else{
        totalPedido-=1.25;
    }
    cambiarTotal();
}

function polloGrande(){
    polloGrandeS="";
    if(checkPolloGrande.checked){
        totalPedido+=1.75;
        polloGrandeS = "Pieza de pollo grande: $1.75";
    }else{
        totalPedido-=1.75;
    }
    cambiarTotal();
}

function polloMediano(){
    polloMedianoS="";
    if(checkPolloMediano.checked){
        totalPedido+=1.50;
        polloMedianoS = "Pieza de pollo mediana: $1.50";
    }else{
        totalPedido-=1.50;
    }
    cambiarTotal();
}

function polloPequeno(){
    polloPequenoS="";
    if(checkPolloPequeno.checked){
        totalPedido+=1.25;;
        polloPequenoS="Pieza de pollo pequeña: $1.25";
    }else{
        totalPedido-=1.25;
    }
    cambiarTotal();
}

function bebidaGrande(){
    bebidaGrandeS="";
    if(checkBebidaGrande.checked){
        totalPedido+=1.50;
        bebidaGrandeS="Bebida grande: $1.50";
    }else{
        totalPedido-=1.50;
    }
    cambiarTotal();
}

function bebidaMediana(){
    bebidaMediana="";
    if(checkBebidaMediana.checked){
        totalPedido+=1.25;
        bebidaMedianaS="Bebida mediana: $1.25";
    }else{
        totalPedido-=1.25;
    }
    cambiarTotal();
}

function bebidaPequena(){
    bebidaPequenaS="";
    if(checkBebidaPequena.checked){
        totalPedido+=1.00;
        bebidaPequenaS="Bebida pequeña: $1.00";
    }else{
        totalPedido-=1.00;
    }
    cambiarTotal();
}

function cafe(){
    cafeS="";
    if(checkCafe.checked){
        totalPedido+=0.50;
        cafeS="Café: $0.50";
    }else{
        totalPedido-=0.50;
    }
    cambiarTotal();
}

function postre(){
    postreS="";
    if(checkPostre.checked){
        totalPedido+=1.20;
        postreS="Postre: 1.20";
    }else{
        totalPedido-=1.20;
    }
    cambiarTotal();
}

function cambiarTotal(){
    inputTotal.value=totalPedido+totalCombo;
}

function redondearTotal(total){
    return(Math.round(total * 100) / 100);
}

function cambiarDiv(){
    divSugerencias.style.display="none";
    TextSugerencias.style.display="block";
}

shortcut.add("Ctrl+E", function () {  
    cambiarDiv();
}, {
"type": "keydown",
"propagate": true,
"target": document
});

shortcut.add("Ctrl+S", function () {
    divSugerencias.innerHTML = TextSugerencias.value;
    divSugerencias.style.display="block";
    TextSugerencias.style.display="none";
}, {
"type": "keydown",
"propagate": true,
"target": document
});

function guardarPedido(){

    pedido.combo = comboS;
    pedido.ensalada = ensaladaS;
    pedido.papas = papasS;
    pedido.polloGrande = polloGrandeS;
    pedido.polloMediano = polloMedianoS;
    pedido.polloPequeno = polloPequenoS;
    pedido.bebidaGrande = bebidaGrandeS;
    pedido.bebidaMediana = bebidaMedianaS;
    pedido.bebidaPequena = bebidaPequenaS;
    pedido.cafe = cafeS;
    pedido.postre = postreS;
    pedido.total = redondearTotal(inputTotal.value);
    pedido.sugerencias = divSugerencias.textContent;

    msg+='<div class="col-5">';
    msg+="<b>Combo seleccionado: </b></b><br>"+pedido.combo+"<br>";
    msg+="<br>"
    msg+="<b>Extras seleccionados:</b><br>";
    if(checkEnsalada.checked)msg +=pedido.ensalada+"<br>";
    if(checkPapas.checked)msg+= pedido.papas+"<br>";
    if(checkPolloGrande.checked)msg+= pedido.polloGrande+"<br>";
    if(checkPolloMediano.checked)msg+= pedido.polloMediano+"<br>";
    if(checkPolloPequeno.checked)msg+= pedido.polloPequeno+"<br>";
    if(checkBebidaGrande.checked)msg+= pedido.bebidaGrande+"<br>";
    if(checkBebidaMediana.checked)msg+= pedido.bebidaMediana+"<br>";
    if(checkBebidaPequena.checked)msg+= pedido.bebidaPequena+"<br>";
    if(checkCafe.checked)msg+= pedido.cafe+"<br>";
    if(checkPostre.checked) msg+= pedido.postre+"<br>";
    msg+="<br>"
    msg+="<b>Sugerencias:</b><br>";
    if(divSugerencias.textContent)msg+="<p>"+pedido.sugerencias+"</p>";else msg+="Ninguno<br><br>";
    msg+="<b>Total del pedido:</b><br>";
    msg+="$"+pedido.total+"<br>";
    msg+="<br><br>";
    msg+="</div>"

    resultado.innerHTML = msg;

    Ordenes.push(pedido);

    auxi += parseFloat(pedido.total);
    
    precioFinal.textContent = "Total final: $"+auxi;
}

if(window.addEventListener){
    window.addEventListener("load", init, false);
}else if(window.attachEvent){
    window.attachEvent("onload", init);
}