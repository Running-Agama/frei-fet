import { promptDepositar } from "./interacao.js";

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