const buttonNotDB = document.getElementById('btnNot');
bancoDados = []

buttonNotDB.addEventListener("click", function () {
    console.log("clicou no botão não")
    //    Criar um novo banco de dados com o dia atual.
    const date = new Date()
    // prepara a msg para data.

    let msgDate = `${date.getDate()}/${date.getUTCMonth() + 1}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}h`
    let log = "Primeiro dia do desafio.";
    let id = 1;
    console.log(msgDate)

    const firstDay = [{id, msgDate, log, }]

    console.log(firstDay)

    console.log(firstDay[0])


    teste = [{
        id: 1,
        msg:"teste do indice 0",
        date: "16/12/2022"
    },
    {
        id:2,
        msg: "Teste do indice 1",
        date: "17/12/2022"
    },
    {
        id:3,
        msg: "Teste do indice 3",
        date: "18/12/2022"
    }]


    
})