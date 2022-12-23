window.addEventListener('load', function () {
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