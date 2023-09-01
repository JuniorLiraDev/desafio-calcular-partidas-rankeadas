calcularRankeadas(110,1)

let nivel = " "
if(saldoRankeado<10){
	nivel = "Ferro"
}else if (saldoRankeado<=20){
	nivel = "Bronze"
}else if(saldoRankeado<=50){
	nivel = "Prata"
}else if (saldoRankeado<=80){
	nivel = "Ouro"
}else if(saldoRankeado<90){
	nivel = "Diamante"
}else if(saldoRankeado<100){
	nivel = "Lendário"
}else{
	nivel = "Imortal"
}

console.log("O Herói tem de saldo de  " + saldoRankeado + " e está no nível " + nivel);


function calcularRankeadas(vitoria, derrota){
	saldoRankeado = vitoria-derrota
    if(saldoRankeado < 0){
    	saldoRankeado = Math.abs(saldoRankeado)
    }
    return saldoRankeado
}



