var profilefile = '';
$(document).ready(function() {

    localStorage.removeItem('tempProfile')
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
            profilefile = input.files[0];
        }
    }
    

    $(".file-upload").on('change', function(){
        readURL(this);
        localStorage.setItem('tempProfile', true);
    });
    
    $(".upload-buttons").on('click', function() {
       $(".file-upload").click();
    });
});

function uploadProfilePicture(){
    let api_endpoint = "/api/Profile/saveProfilePicture";
    var formData = new FormData();
    console.log(profilefile)
    formData.append('file', profilefile);
    $.ajax({
        type: 'put',
        url: api_url + api_endpoint,
        //headers: { 'Content-Type': 'application/json' },
        data: formData,
        contentType: false,
        cache: false,
        processData: false,
        error: function (d) {
            $('#updateProfileForm').pleaseWait('stop');
            displayToast('error', d.responseJSON.message, d.responseJSON.title)
        },
        success: function (d) {
            $('#updateProfileForm').pleaseWait('stop');
            displayToast('success', "Your profile picture was updated successfully", "Profile picture update successful")
            
        }
    })
}