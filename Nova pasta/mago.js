
function FaseUm() {
    while (true) {
        var personagem = prompt("Olá, Oszor, o mais poderoso de todos os magos... Vamos com sua missão, que é desativar a bomba! Você fez uma poção encantadora na qual transforma tudo que é ruim em bom mas com alguns efeitos colaterais. Você decide carregar a poção sozinho(1) ou manda a fada Aine carregar a poção(2)? ");
        if (personagem == 1) {

            alert("Ao carregar a poção sozinho, você acabou misturando as poções dentro de sua mala. Acabou bebendo a poção e morreu de MaldadisNisCoraçao. GAME OVER");
            location.reload()
            break
        }
        if (personagem == "2") {
            alert("Sucesso! A fada Aine se atentou bastante em carregar a poção e vocês chegam em uma floresta!");
            FaseDois()
            break
        }
        else {
            alert("resposta inválida!!")
        }
    }
}
FaseUm ()


function FaseDois() {
    while (true) {
        var personagem = prompt("FASE 2! Ao chegarem na floresta, há uma ponte sobre um riacho. Você, Fada Aine e Lorde Harold podem passar de uma vez (1) ou cada um esperar a vez do outro (2)?");
        if (personagem === "1") {
            alert("Ao passar de uma vez, logicamente a ponte cedeu, e todos os três caíram dentro da boca de um peixe mutante que vivia dentro do riacho. GAME OVER");
            location.reload()
            break
        }
        if (personagem === "2") {
            alert("Sucesso! Os três passaram calmamente e chegaram em segurança até o final da floresta.")
            FaseTres()
            break
        }
        else {
            alert("resposta inválida!!")
        }
    }
}



function FaseTres() {
    while (true) {
        var personagem = prompt("FASE 3! Parabéns! Você chegou onde a bomba está instalada. CUIDADO!! A bomba tem dois botões. O botão n1 é vermelho e o botão n2 é azul. Você só tem uma chance. Qual é o botão certo???");
        if (personagem == "1") {
            alert("BBBBBBBBBOOOOOOOOOOOOOOOOOMMMMMMMMMMMMMMMMMM GAME OVERRRRRRRRRRR!! Foi por pouco :(");
            
        }
        if (personagem == "2") {
            alert("PARABÉNS!!! VOCÊ DESATIVOU A BOMBA!!!!")
            break
        }
        else {
            alert("resposta inválida!!")
        }
    }

}