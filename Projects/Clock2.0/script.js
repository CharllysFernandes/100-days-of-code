function limparTela() {
    document.getElementById("sectionOne").style.display = "none";
}

function esconder(htmlTagId) {
    document.getElementById(`${htmlTagId}`).style.display = "none";
}

function mostrar(htmlTagId) {
    console.log(htmlTagId)
    document.getElementById(`${htmlTagId}`).style.display = "block"
}

const buttonNotDB = document.getElementById('btnNot');
let bancoDados = []

function baixarArquivoLocal(name, dados) {
    let link = document.createElement('a');
    link.href = 'data:application/octet-stream;charset=utf-8,' + JSON.stringify(dados);
    link.download = name;
    link.click();
}

buttonNotDB.addEventListener("click", function () {
    limparTela();
    mostrar("sectionClock");
})

comecarAgora.addEventListener("click", function () {
    const date = new Date();
    let msgDate = `${date.getDate()}/${date.getUTCMonth() + 1}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}h`
    let log = document.getElementById("floatingTextarea").value
    let id = 1;
    const firstDay = [{ id, msgDate, log, }]
    baixarArquivoLocal('100DaysOfCode.json', firstDay)
    
    //criar o link de compartilhamento.
    const tweet = `https://twitter.com/intent/tweet?text=Day%20${id},%20100DaysOfCode%20Challenge%20&hashtags=100DaysOfCode`
    const list = document.getElementById("tableList");
    list.innerHTML += `
    <tr>
    <th scope="row">${firstDay[0].id}</th>
    <td>${firstDay[0].log}</td>
    <td>${firstDay[0].msgDate}</td>
    <td id="btnCompatilhar">
    <a href="${tweet}" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">
    <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
    </svg></a>
    </td>
    </tr>
    `;

    esconder("floatingLog")
    esconder("comecarAgora")
    mostrar("sectionList")
})

