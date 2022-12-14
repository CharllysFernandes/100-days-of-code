const getHours = () => {
    const clock = document.getElementsByClassName('clock')[0]
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const hour = hours < 10 ? `0${hours}` : hours
    const minute = minutes < 10 ? `0${minutes}` : minutes
    const second = seconds < 10 ? `0${seconds}` : seconds
    clock.innerHTML = `${hour}:${minute}:${second}`
}

setInterval(() => {
    getHours()
}, 1000)

//   Get time start

const button = document.getElementById('btn')
button.addEventListener("click", function () {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const hour = hours < 10 ? `0${hours}` : hours
    const minute = minutes < 10 ? `0${minutes}` : minutes

    document.getElementById("startTime").innerHTML = `Você iniciou as ${hour}:${minute}`;
    document.getElementById("startTime").style.display = "block";

    document.getElementById("alert-info").innerHTML = `Deve finalizar as ${hour + 1}:${minute}`;
    document.getElementById("alert-info").style.display = "block";

    console.log('clicou no botão')
});