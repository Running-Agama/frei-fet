
import { depositar, exibirSaldo, sacar, simuladorInvestimentos, } from './financeiro.js'
import {escolhaMenu} from './interacao.js'

let saldo = 0
export function menu(){
    let escolha = escolhaMenu()

    switch(escolha){
        case '1':
            saldo = depositar(saldo)
        break

        case '2':
            saldo = sacar(saldo)
        break

        case '3':
            exibirSaldo(saldo)
        break

        case '4':
             simuladorInvestimentos()
        break;

        case '5':
           return 'sair'
        
        
    }

}