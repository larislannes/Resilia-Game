function FaseUm() {
    while (true) {
        var personagem = prompt("Olá, Harold, o Lorde! Vamos com sua missão? A humanidade precisa de você! Mesmo com suas capacidades de força além do normal, você precisa saber onde usá-las. Ao iniciar sua jornada, você se depara com um caminho dois monstros gigantescos. Você usa a sua força para matá-los (1) ou encontra um caminho para fugir (2)? ");
        if (personagem == 1) {

            alert("Ao usar sua super força (parece até o Superman) você chamou muita atenção! Vários outros monstros apareceram e te mataram. GAME OVER");
            location.reload()
            break
        }
        if (personagem == "2") {
            alert("Sucesso! Você encontrou um bueiro e entrou nele, achando um caminho secreto");

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
        var personagem = prompt("FASE 2! Dentro do bueiro, você encontra uma porta emperrada. Você sabe que depois dessa porta é onde a bomba está instalada. Você procura uma chave nessa rede de esgoto (1) ou usa seu chutão super bruto (2)?");
        if (personagem === "1") {
            alert("Vixi, ao procurar a chave no esgoto, a radiação afetou seu cérebro, e você perdeu sua sanidade. Você virou um bicho como os outros. GAME OVER");
            location.reload()
            break
        }
        if (personagem === "2") {
            alert("Sucesso! O seu super chutão bruto é super afetivo e derruba a porta!.")
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
            alert("BBBBBBBBBOOOOOOOOOOOOOOOOOMMMMMMMMMMMMMMMMMM GAME OVERRRRRRRRRRR!! Foi por pouco :(")
            
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