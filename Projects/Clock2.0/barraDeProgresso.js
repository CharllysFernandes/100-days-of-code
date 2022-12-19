    // Funçao para calcular o tempo do primeiro dia.
    // Acredito nesse momento que apenas contar os minutos seja o suficiente.

document.getElementById("comecarAgora").addEventListener("click", function () {
    console.log("funcionou")
    let minutos = 0;
        let porcentagemBarra = 0;
        cron = setInterval(() => { timer(); }, 60000); // para fazer em minutos

        function timer() {
            if (minutos <= 60) {
                minutos++
                porcentagemBarra += 100 / 60; // 100% / 60 minutos
                console.log(porcentagemBarra)
                document.getElementById("progress-bar").style.width = `${porcentagemBarra}%`
            }
        }

        document.getElementById("barraProgresso").style.display = "flex";
        barraProgresso.innerHTML = `
        <div id="progress-bar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: ${parseFloat(barraProgresso)}%"></div>
        `
})

