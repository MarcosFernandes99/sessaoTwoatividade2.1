// GASOLINA = 16KM LITRO
// ETANOL = 11KM LITRO

function calcularGastoCombustível (distanciaParametro, tipoCombustivel){

    let distanciaKm = distanciaParametro/1000
    let litrosGastos = 0

    tipoCombustivel === 'gasolina' ? litrosGastos = distanciaKm / 16 : litrosGastos = distanciaKm / 11
    console.log(`${distanciaKm}Km`)    
    console.log(`Será necessário para o percurso ${litrosGastos} litros de combustível`)
    return litrosGastos
}

function calcularNumeroParadas (passageirosParametro, duracaoViagem){
    let adultos = 0
    let criancas = 0
    let paradas = 0

    for (let index = 0; index < passageirosParametro.length; index++) {
        passageirosParametro[index] === 'adulto' ? adultos++ : criancas++
    }

    if(criancas === 0){
        paradas = duracaoViagem / 90
    }
    else if(adultos >= criancas){
        paradas = duracaoViagem / 60
    }
    else{
        paradas = duracaoViagem / 40
    }

    console.log(`O número de paradas necessárias para o percurso são ${paradas}`)
    return paradas
}
module.exports = {calcularGastoCombustível, calcularNumeroParadas}