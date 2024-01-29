$(document).ready(function() {
    var formData = new FormData();
    $("#ddArea").on("dragover", function() {
      $(this).addClass("drag_over");
      return false;
    });

    $("#ddArea").on("dragleave", function() {
      $(this).removeClass("drag_over");
      return false;
    });

    $("#ddArea").on("click", function(e) {
      file_explorer();
    });

    $("#ddArea").on("drop", function(e) {
      e.preventDefault();
      $(this).removeClass("drag_over");
      //
      var files = e.originalEvent.dataTransfer.files[0];
      showFile(files);
      formData.append("file", files);
      //var formData = new FormData();
      // for (var i = 0; i < files.length; i++) {
      //   formData.append("file[]", files[i]);
      // }
      // uploadFormData(formData);
    });

    $('#upload-from-gallery').click(function(e){
      file_explorer();
    })

    function file_explorer() {
      document.getElementById("selectfile").click();
      document.getElementById("selectfile").onchange = function() {
        // files = document.getElementById("selectfile").files;
        // var formData = new FormData();

        // for (var i = 0; i < files.length; i++) {
        //   formData.append("file[]", files[i]);
        // }
        // uploadFormData(formData);
          files = document.getElementById("selectfile").files[0];
          showFile(files);
          formData.append("file", files);
          // var formData = new FormData();
          // 
          // uploadFormData(formData);
      };
    }

    function showFile(file){
        console.log("show file clicked");
        let fileType = file.type; //getting selected file type
        let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
        let imgPreview = document.getElementById('imgPreview');
        if(validExtensions.includes(fileType)){ //if user selected file is an image file
          let fileReader = new FileReader(); //creating new FileReader object
          fileReader.onload = ()=>{
            let fileURL = fileReader.result; //passing user file source in fileURL variable
            let imgTag = `<img src="${fileURL}" class="imgTag" alt="">`; //creating an img tag and passing user selected file source inside src attribute
            imgPreview.innerHTML = imgTag; //adding that created img tag inside dropArea container
            $('#upload-from-gallery').hide();
            $('#re-upload').show();
            $('#uploadDocumentExtrafields').removeClass('hide');
          }
          fileReader.readAsDataURL(file);
        }else{
          displayToast("error","The image to be uploaded must be either .png, .jpg or .jpeg format", "Invalid Image File");
        }
    }
    
    $('#uploadDocument').click(function(){
      let formData = formData;
      uploadFormData(formData);
    })

    function uploadFormData(form_data) {
      $(".preloader-2").show();
      let loan_app_url = "/api/Documents/UploadFile";
      $.ajax({
        url: us,
        method: "POST",
        data: form_data,
        contentType: false,
        cache: false,
        processData: false,
        success: function(data) {
          $(".preloader-2").hide();
          $("#showThumb").append(data);
        }
      });
    }


});