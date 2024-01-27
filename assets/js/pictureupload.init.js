$(document).ready(function() {
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
      var formData = new FormData();
      var files = e.originalEvent.dataTransfer.files;
      for (var i = 0; i < files.length; i++) {
        formData.append("file[]", files[i]);
      }
      uploadFormData(formData);
    });

    function file_explorer() {
      document.getElementById("selectfile").click();
      document.getElementById("selectfile").onchange = function() {
        files = document.getElementById("selectfile").files;
        var formData = new FormData();

        for (var i = 0; i < files.length; i++) {
          formData.append("file[]", files[i]);
        }
        uploadFormData(formData);
      };
    }

    function uploadFormData(form_data) {
      $(".lds-facebook").show();
      $.ajax({
        url: "./partials/upload-pictures.php",
        method: "POST",
        data: form_data,
        contentType: false,
        cache: false,
        processData: false,
        success: function(data) {
          $(".lds-facebook").hide();
          $("#showThumb").append(data);
        }
      });
    }
});