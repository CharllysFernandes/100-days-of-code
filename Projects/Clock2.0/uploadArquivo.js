window.addEventListener('load', function() {
    var upload = document.getElementById('fileInput');
    
    // Make sure the DOM element exists
    if (upload) 
    {
      upload.addEventListener('change', function() {
        // Make sure a file was selected
        if (upload.files.length > 0) 
        {
          var reader = new FileReader(); // File reader to read the file 
          
          // This event listener will happen when the reader has read the file
          reader.addEventListener('load', function() {
            var result = JSON.parse(reader.result); // Parse the result into an object 
            
            console.log(result[2].id);
            console.log(result[2].log)
            console.log(result[2].msgDate)
            
          });
          reader.readAsText(upload.files[0]); // Read the uploaded file
          
        }
      });
    }
  });