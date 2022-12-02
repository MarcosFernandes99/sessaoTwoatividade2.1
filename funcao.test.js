const calcular = require("./funcao")

test("Calculando quantos litros de gasolina será necessário para o percurso", () => {
    expect(calcular.calcularGastoCombustível(16000, 'gasolina')).toBe(1)
})

test("Calculando quantos litros de etanol será necessário para o percurso", () => {
    expect(calcular.calcularGastoCombustível(11000, 'etanol')).toBe(1)
})

test("Verificando a quantidade de paradas necessárias", () => {
    expect(calcular.calcularNumeroParadas(['adulto', 'adulto', 'criança'], 360)).toBe(6)
})

