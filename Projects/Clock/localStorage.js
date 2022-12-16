
const getStorage = document.getElementById("getLocalStorage")
let key
let myObj = { name: 'Gabriel', age: 25 };
localStorage.setItem(key, JSON.stringify(myObj));

getStorage.addEventListener("click", function () {
    console.log("Clicou no botão para pegar o Storage Local")
    // // Criar item:
    
    // // Ler item:
    let myItem = JSON.parse(localStorage.getItem(key));
    console.log(myItem)
})