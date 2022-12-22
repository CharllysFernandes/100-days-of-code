const inputJson = document.getElementById("contentFile")

inputJson.addEventListener("change", handleFiles, false);

function handleFiles() {
    const file = this.files

    console.log(file)
}