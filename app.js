import { menu } from "./menu.js"

let continuar = true
let verificarContinuar
while(continuar){
    verificarContinuar = menu(verificarContinuar)

    if(verificarContinuar == 'sair'){
        continuar = false
    }
    
}
