
import prompt from 'prompt-sync'
const read = prompt()

export function escolhaMenu(escolha){
    console.log(`
    O que deseja?
    
    1 Depositar
    2 Saque
    3 Saldo
    4 Simulador de investimentos
    5 Sair
    `)

    escolha = read('    insira o numero correspondente: ')
    return escolha
}

export function promptDepositar(saldo){
console.log('Insira o valor a depositar')
saldo += +read()
return saldo
}

export function promptSimuladorInvestimentoCapital(){
    console.log('Diga o capital inicial:')
    return +read()
}

export function promptSimuladorInvestimentoTempoInvestido(){
    console.log('Insira o tempo do investimento:')
    return +read()
}

export function promptSimuladorInvestimentoJuros(){
    console.log('Diga a taxa de juros')
    return +read()
}