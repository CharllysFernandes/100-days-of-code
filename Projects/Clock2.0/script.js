// 

function showOff(htmlId) {
  document.getElementById(`${htmlId}`).style.display = "block";
}

function notShow(htmlId) {
  document.getElementById(`${htmlId}`).style.display = "none";
}
function baixarArquivoLocal(name, dados) {
  let link = document.createElement('a');
  link.href = 'data:application/octet-stream;charset=utf-8,' + JSON.stringify(dados);
  link.download = name;
  link.click();
}

/* Check if there is data or not from user responses. */

// buttons user responses.

const buttonNotDB = document.getElementById('btnNot');
const buttonYesDB = document.getElementById('btnYes');

// Show Off to User

const sectionShowOff = document.getElementById("showOff");

// NOT DATABASE

buttonNotDB.addEventListener("click", function () {
  console.log("not database create one...")

  notShow("sectionOne");

  sectionShowOff.innerHTML =
    `
    <input class="fs-5" type="date" id="date">
    <div id="dateErro" class="text-warning"></div>
    <input class="fs-4" type="text" id="logMessge" maxlength="50" placeholder="create a log message">
    <div id="msgErro" class="text-warning"></div>
    <button class="btn-primary btn text-capitalize" id="createJsonFile">create JSON file</button>
    `
  // create Json File
  document.getElementById("createJsonFile").addEventListener("click", function () {
    // create body of json
    let msgDate = document.getElementById("date").value;
    let log = document.getElementById("logMessge").value;
    const id = "1";

    const firstDay = [{ id, log, msgDate }];
    console.log(firstDay[0])
    baixarArquivoLocal('100DaysOfCode.json', firstDay)

  })
})

// YES DATABASE

buttonYesDB.addEventListener("click", function () {
  console.log("Database yes, upload then..");
  
  // Read file .json
  document.getElementById("uploadJSON").addEventListener("click", function () {
    console.log("click uploadJson");
    var jsonUploaded = document.getElementById('fileInput').files[0];
    usingJSON(jsonUploaded)
  })
})

// Reader JSON

function usingJSON(databaseJSON) {
  let jsonReader = new FileReader();
  jsonReader.onload = function(e) {
    var content = e.target.result;
    var intern = JSON.parse(content); // parse json 
    console.log(intern[0].id); // You can index every object

    // TODO
    // PROCESS JSON INTO LIST
    
  };
  jsonReader.readAsText(databaseJSON);
  
}



// comecarAgora.addEventListener("", function () {
//     // const date = new Date();
//     // let msgDate = `${date.getDate()}/${date.getUTCMonth() + 1}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}h`
//     // let log = document.getElementById("floatingTextarea").value
//     let id = 1;
//     const firstDay = [{ id, msgDate, log, }]

//     //criar o link de compartilhamento.
//     const tweet = `https://twitter.com/intent/tweet?text=Day%20${id},%20100DaysOfCode%20Challenge%20&hashtags=100DaysOfCode`
//     const list = document.getElementById("tableList");
//     list.innerHTML += `
//     <tr>
//     <th scope="row">${firstDay[0].id}</th>
//     <td>${firstDay[0].log}</td>
//     <td>${firstDay[0].msgDate}</td>
//     <td id="btnCompatilhar">
//     <a href="${tweet}" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">
//     <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
//     </svg></a>
//     </td>
//     </tr>
//     `;


// })

//=======================================
// Clock

const getHours = () => {
  // const clock = document.getElementsByClassName('clock')[0]
  const relogio = document.getElementById("relogio")
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  const hour = hours < 10 ? `0${hours}` : hours
  const minute = minutes < 10 ? `0${minutes}` : minutes
  const second = seconds < 10 ? `0${seconds}` : seconds
  relogio.innerHTML = `${hour}:${minute}:${second}`
}

setInterval(() => {
  getHours()
}, 1000)

// End Clock
//=========================================

//=========================================
// Upload json File

window.addEventListener('', function () {

  var upload = document.getElementById('fileInput');

  // Make sure the DOM element exists
  if (upload) {
    upload.addEventListener('change', function () {
      // Make sure a file was selected
      if (upload.files.length > 0) {
        var reader = new FileReader(); // File reader to read the file 

        // This event listener will happen when the reader has read the file
        reader.addEventListener('load', function () {
          var result = JSON.parse(reader.result); // Parse the result into an object 

          for (let i = 0; i < result.length; i++) {

            const list = document.getElementById("tableList");
            list.innerHTML += `
                    <tr>
                    <th scope="row">${result[i].id}</th>
                    <td>${result[i].log}</td>
                    <td>${result[i].msgDate}</td>
                    <td id="btnCompatilhar">
                    <a href="#" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">
                    <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
                    </svg></a>
                    </td>
                    </tr>
                    `;
          }
          mostrar("sectionList")
          mostrar("sectionClock")
          esconder("barraProgresso")
          esconder("sectionOne")

        });
        reader.readAsText(upload.files[0]); // Read the uploaded file

      }
    });
  }
});

// End upload Files
//============================================
