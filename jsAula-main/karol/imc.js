function somar(){
    let altura = document.getElementById("altura").value
    let peso = document.getElementById("peso").value
    let imc = peso/(altura*altura)
    let saida = document.createElement("p")
    saida.id = "saida"
    if(imc<18.5){
        saida.innerHTML = "seu imc é: "+imc+" ALERTA: VOCÊ ESTÁ EM MAGREZA!"
        document.body.appendChild(saida)
    }
    else if(imc>=18.5 & imc<=24.9){
        saida.innerHTML = "seu imc é: "+imc+" você está com peso normal."
        document.body.appendChild(saida)
    }
    else if(imc>=25 & imc<=24.9){
        saida.innerHTML = "seu imc é: "+imc+" CUIDADO: você está com excesso de peso."
        document.body.appendChild(saida)
    }
    else if(imc>=30 & imc<=34.9){
        saida.innerHTML = "seu imc é: "+imc+" ALERTA: VOCÊ ESTÁ EM OBESIDADE GRAU 1!"
        document.body.appendChild(saida)
    }
    else if(imc>=35 & imc<=39.9){
        saida.innerHTML = "seu imc é: "+imc+" ALERTA: VOCÊ ESTÁ EM OBESIDADE GRAU 2!"
        document.body.appendChild(saida)
    }
    else{
        saida.innerHTML = "seu imc é: "+imc+" ALERTA: VOCÊ ESTÁ EM OBESIDADE GRAU 3!"
        document.body.appendChild(saida)
    }
}