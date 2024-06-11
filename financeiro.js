import { promptDepositar, promptSimuladorInvestimentoCapital, promptSimuladorInvestimentoJuros, promptSimuladorInvestimentoTempoInvestido } from "./interacao.js";

export function depositar(saldo){
    saldo = promptDepositar(saldo)

    console.clear()
    console.log('Dinheiro depositado com sucesso')
    
    return saldo

}

export function sacar(saldo){
    saldo = 0
    console.clear()
    console.log('Dinheiro sacado')

    return saldo

}

export function exibirSaldo(saldo){
    console.clear()
    console.log('Saldo é de ' + saldo)
}

export function simuladorInvestimentos(){
    const capitalInicial = promptSimuladorInvestimentoCapital()
    const tempoInvestido = promptSimuladorInvestimentoTempoInvestido()
    const juros = promptSimuladorInvestimentoJuros()

let resultado = capitalInicial*((juros/100 + 1)**tempoInvestido)

    console.log(`AO fim do periodo de ${tempoInvestido} meses, você terá um retorno de R$${resultado.toFixed(2)}`)
}