$(document).ready(function() {
  $("#ddArea2").on("dragover", function() {
    $(this).addClass("drag_over");
    return false;
  });

  $("#ddArea2").on("dragleave", function() {
    $(this).removeClass("drag_over");
    return false;
  });

  $("#ddArea2").on("click", function(e) {
    file_explorer2();
  });

  $("#ddArea2").on("drop", function(e) {
    e.preventDefault();
    $(this).removeClass("drag_over");
    var formData = new FormData();
    var files = e.originalEvent.dataTransfer.files;
    for (var i = 0; i < files.length; i++) {
      formData.append("file[]", files[i]);
    }
    uploadFormData(formData);
  });

  function file_explorer2() {
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