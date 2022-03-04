function validar() {
    var seuNumero = document.getElementById("numPlayer").value;
    var rFinal = "" ;

    if (seuNumero == "") {
    alert("Digite um número");
    return false;
        }else if (seuNumero > 256 || seuNumero < 0) {
    alert("Apenas números entre 0 e 256");
    return false;
        }
    return true;
}

function par() {

    if (!validar()) return;

    var seuNumero = document.getElementById("numPlayer").value;
    var pcNumero = Math.floor(Math.random() * 256);
    var soma = parseInt(seuNumero) + parseInt(pcNumero);
    var musicPerdeu = new Audio('perdeu.mp3');
    var musicVenceu = new Audio('venceu.mp3');

    if (soma %2 == 0) {
        musicVenceu.play();
        alert ("Parabéns, você venceu!")
        var rFinal = "Venceu!" ;         
    }else {
        musicPerdeu.play();
        var rFinal = "Perdeu!" ;
        alert("Tente novamente!")
    }
    var tag = document.createElement("div");
	tag.innerHTML = seuNumero; 
	seuN.appendChild(tag); 

    var tag = document.createElement("div");
	tag.innerHTML = pcNumero; 
	nPc.appendChild(tag); 

    var tag = document.createElement("div");
	tag.innerHTML = soma; 
	sN.appendChild(tag); 

    var tag = document.createElement("div");
	tag.innerHTML = rFinal; 
	resultado.appendChild(tag);
}

function impar() {
   if (!validar()) return;

   var seuNumero = document.getElementById("numPlayer").value;
   var pcNumero = Math.floor(Math.random() * 256);
   var soma = parseInt(seuNumero) + parseInt(pcNumero);
   var musicPerdeu = new Audio('perdeu.mp3');
   var musicVenceu = new Audio('venceu.mp3');

   if (soma %2 != 0) {
        musicVenceu.play();
        alert("Parabéns, você venceu!")
        var rFinal = "Venceu!" ;
    }else {
        alert("Tente novamente!")
        var rFinal = "Perdeu!";
        musicPerdeu.play();
    }
    var tag = document.createElement("div");
	tag.innerHTML = seuNumero; 
	seuN.appendChild(tag); 

    var tag = document.createElement("div");
	tag.innerHTML = pcNumero; 
	nPc.appendChild(tag); 

    var tag = document.createElement("div");
	tag.innerHTML = soma; 
	sN.appendChild(tag); 

    var tag = document.createElement("div");
	tag.innerHTML = rFinal; 
	resultado.appendChild(tag);
}
