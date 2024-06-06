
import prompt from 'prompt-sync'
const read = prompt()

export function escolhaMenu(escolha){
    console.log(`
    O que deseja?
    
    1 Depositar
    2 Saque
    3 Saldo
    4 Sair`)

    escolha = read('    insira o numero correspondente: ')
    return escolha
}

export function promptDepositar(saldo){
console.log('Insira o valor a depositar')
saldo += +read()
return saldo
}

