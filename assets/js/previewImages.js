var modal = document.getElementById("previewImageModal");
var onboardmodal = document.getElementById("onboard-modal");
function previewImage(id) {
    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    if (id.src.indexOf('pdf.png') == -1) {
        modal.style.display = "block";
        modalImg.src = id.src;
        captionText.innerHTML = id.alt;
    } else {
        window.location.href = id.alt
    }

}

function closeModal(){
    modal.style.display = "none";
}



// When the user clicks on <span> (x), close the modal
$(function(e){   
    var span = document.getElementsByClassName("close")[0]; 
span.onclick = function () {
    modal.style.display = "none";
    onboardmodal.style.display = "none";
}
})