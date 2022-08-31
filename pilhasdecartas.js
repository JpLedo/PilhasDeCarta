let array = ["Carta 1"," Carta 2", " Carta 3", " Carta 4"]
let menuInterativo;
let adicionarCarta;
do{
    menuInterativo = prompt(
        "\nSeja bem vindo ao jogo de cartas" +
        "\nAqui estão as cartas disponiveis: " + array +
        "\n O que deseja? " +
        "\n 1 - Adicionar carta" + 
        "\n 2 - Puxar uma carta " +
        "\n 3 - Sair"
    )
        switch(menuInterativo){
            case "1":
                adicionarCarta = prompt("Qual o nome da carta que deseja adicionar? ")
                let adicionada = array.push(adicionarCarta);
                alert("A carta " + adicionada + " foi adicionada")
                break;
            //incluindo uma carta
            case "2":
                alert("Retirando uma carta...")
                let removidoArray = array.pop();
                alert("A carta retirada foi... " + removidoArray)
                alert("O baralho está assim: " + array)
                break;

            case "3":
                alert("Você escolheu sair")
                alert("Saindo do programa...")
            default:
                alert("Digite algo valido..")
        }
         

}while(menuInterativo !== "sair"){

}