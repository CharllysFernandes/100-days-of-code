// Se não tem os dados criar uma agora.


const criarDados = document.getElementById("criarDados");

criarDados.addEventListener("click", function () {
    let db = [{day:"01", "LOG":"Iniciando o desafio 100DayOfCode.", date:"14/12/2022 - 22:00h"}]

    // Mostrar lugar para salvar o dado localmente exportar um arquivo db.json

    console.log(db)
})