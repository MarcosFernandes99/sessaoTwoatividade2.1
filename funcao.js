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

module.exports = {calcularGastoCombustível}