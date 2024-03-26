var profilefile = '';
$(document).ready(function() {
    let imgUrl = localStorage.getItem('profImgUrl');
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

    if(imgUrl == '' || imgUrl == null){
        var email = localStorage.getItem('email');
        preloadProfileDetails(email);
    }
});

function preloadProfileDetails(email) {
    let api_endpoint = "/api/Profile";
    let data = {
        username: email
    }
    $.ajax({
        type: 'get',
        url: api_url + api_endpoint,
        headers: { 'Content-Type': 'application/json' },
        data: data,
        error: function (d) {
            displayToast('error', d.responseJSON.message, d.responseJSON.status)
        },
        success: function (d) {
            tempImgUrl = d.imgUrl;
            localStorage.setItem('profImgUrl', tempImgUrl);
            $('.profile-pic').attr('src', api_url + '/api/profile/fileuploads?filepath='+ d.imgUrl)
            $('[name="firstname"]').val(d.firstname);
            $('[name="lastname"]').val(d.lastname);
            $('[name="othernames"]').val(d.othernames);
            $('[name="email"]').val(d.email);
            $('[name="phoneNumber"]').val(d.phoneNumber);
            $('[name="bvn"]').val(d.bvn);
            $('[name="nin"]').val(d.nin);
            $('[name="city"]').val(d.city);
            $('[name="lga"]').val(d.lga);
            $('[name="closest"]').val(d.closest);
            $('[name="houseNo"]').val(d.houseNo);
            $('[name="landmark"]').val(d.landmark);
            $('[name="street"]').val(d.street);
            $('[name="address"]').val(d.address);
            let newdate = formatDate3(d.dob);
            finaldate = newdate.date;
            $('[name="dob"]').val(new Date(d.dob).toLocaleDateString());
            $('[name="sex"] option:contains("' + d.sex + '")').prop('selected', true);
            $('[name="employmentStatus"] option:contains("' + d.employmentStatus + '")').prop('selected', true);
            $('.firstnameOutput').html(d.firstname);
            $('.lastnameOutput').html(d.lastname);
            $('.othernamesOutput').html(d.othernames);
            $('.dobOutput').html(newdate.date2);
            $('.emailOutput').html(d.email);
            $('.genderOutput').html(d.sex);
            $('.phoneOutput').html(d.phoneNumber);
            $('.addressOutput').html(d.address);
            $('.bvnOutput').html(d.bvn);
            $('.ninOutput').html(d.nin);
        }
    })
}
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