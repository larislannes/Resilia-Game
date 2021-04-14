function FaseUm() {
    while (true) {
        var personagem = prompt("Olá, Aine, a fada... Vamos com sua missão! Você tem como missão desativar a bomba nuclear. Você encontra um caminho nebuloso... Você usa suas pernas para atravessar o caminho (1) ou usa suas asas mágicas (2)? ");
        if (personagem == 1) {

            alert("Ao passar com suas pernas, a névoa contia radiotividade. Você morre com seus pulmões queimados. GAME OVER!");
            location.reload()
            break
        }
        if (personagem == "2") {
            alert("Sucesso! Ao sobrevoar a névoa, você consegue passar com sucesso e chega no galpão!");
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
        var personagem = prompt("FASE 2! Após passar a névoa, vários monstros saem de um bueiro! Você tem duas opcões! Jogue pó de fada neles (1) ou saia correndo! (2)");
        if (personagem === "1") {
            alert("Ao correr para trás, você se depara com mais monstros que te cercam. Não há escapatória e você morre. GAME OVER");
            location.reload()
            break
        }
        if (personagem === "2") {
            alert("Sucesso! O pó de fada diminui os monstros de tamanho, e você consegue pisar neles!")
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