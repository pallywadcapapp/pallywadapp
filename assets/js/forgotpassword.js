$('body').on('click', '#reset-password', function (e) {

    if ($("#step-1").valid()) {
        e.preventDefault();
        let email = $('#email').val();
        let password = $('#password').val();
        let api_endpoint = "/api/v1/auth/ResetPasswordToken?username=" + email;

        //check if login credentials are valid
        let data = {
            "username": email,
            "password": password
        }

        localStorage.setItem('email', email);
        $.ajax({
            type: 'get',
            url: api_url + api_endpoint,
            headers: { 'Content-Type': 'application/json' },
            //data: JSON.stringify(data),
            error: function (d) {
                //displayToast('error', d.responseJSON.message, d.responseJSON.status)
                displayToast('error', 'Oops, unable to get reset password token', 'Token Error');
            },
            success: function (d) {
                location.href = "/password-code";

            }
        })


    }
})

$('body').on('click', '#verifyPasswordCode', function (e) {
    e.preventDefault();
    inputElements = $('.pin').map((i, e) => e.value).get();
    console.log(inputElements[0]);
    username = localStorage.getItem('email');
    token = inputElements[0]; //localStorage.getItem('verificationPin');
    api_endpoint = "/api/v1/auth/ValidateResetPasswordToken?username=" + username + '&otp=' + token;


    //check if token is valid
    let data = {
        "otp": token,
        "username": username
    }

    $.ajax({
        type: 'POST',
        url: api_url + api_endpoint,
        headers: { 'Content-Type': 'application/json' },
        data: data,
        error: function (d) {
            displayToast('error', "Token not provided!", "Error");
        },
        success: function (d) {
            console.log(d.status);
            if (d.message == 'Valid Token') {
                location.href = "/new-passWord";
            }
            else {
                displayToast('error', "PIN Incorrect!", "Error");
            }

        }
    })
})

$('body').on('click', '#resetPassword', function (e) {
    e.preventDefault();
    let confirmpassword = $('#confirmpassword').val();
    let password = $('#password').val();
    username = localStorage.getItem('email');
    api_endpoint = "/api/v1/auth/SetNewPassword";


    
    //check if token is valid
    if (password != confirmpassword) {
        displayToast('error', "Password Mismatch", "Error");
    } else {
        let data = {
            "confirmpassword": confirmpassword,
            "userid": username,
            'newpassword': password
        }


        $.ajax({
            type: 'POST',
            url: api_url + api_endpoint,
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify(data),
            error: function (d) {
                displayToast('error', "Error Changing Password", "Error");
               
            },
            success: function (d) {
                console.log(d.status);
                location.href = "/sign-in";
                

            }
        })
    }
})

$('body').on('click', '#change-pass', function (e) {
    e.preventDefault();
    let confirmpassword = $('#confirmPassword').val();
    let oldPassword = $('#oldPassword').val();
    let newPassword = $('#newPassword').val();
    username = localStorage.getItem('email');
    api_endpoint = "/api/v1/auth/ChangePassword";
    $('#chgPass').pleaseWait();

    //check if token is valid
    if (newPassword != confirmpassword) {
        console.log(newPassword)
        console.log(confirmpassword)
        $('#chgPass').pleaseWait('stop');
        displayToast('error', "Password Mismatch", "Error");
    } else {
        
        let data = {
            "confirmpassword": confirmpassword,
            "userid": username,
            'newpassword': newPassword,
            'oldPassword': oldPassword
        }

        $.ajax({
            type: 'POST',
            url: api_url + api_endpoint,
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify(data),
            error: function (d) {
                $('#chgPass').pleaseWait('stop');
                displayToast('error', d.responseJSON[0], "Error");
            },
            success: function (d) {
                console.log(d.status);
                $('#chgPass').pleaseWait('stop');
                displayToast('success', "Password Chaged successfully", "Success");
                location.href = "/logout";
                
                

            }
        })
    }
})

$(function(){
    $("#confirmpassword").on('keyup', function () {
        var password = $("#password").val();
        var confirmPassword = $("#confirmpassword").val();
        if (password != confirmPassword)
          $("#CheckPasswordMatch").html("Password does not match !").css("color", "red");
        else
          $("#CheckPasswordMatch").html("Password match !").css("color", "green");
      });
})


function showError(error, value, xhr) {
    console.log(error);
    try {
        var appError = error.responseJSON.error_description;

        if (appError == 'Password Must be changed before login') {
            var username = $('#username').val();
            localStorage.setItem("uemail", username)
            window.location.href = 'changepassword';
        } else {
            $('#formarea').pleaseWait('stop');
            toastr.error('unable to signin');
            toastr.error(error.responseJSON.message)
        }

        if (error.responseJSON.message == 'Email confirmation required') {
            var username = $('#username').val();
            sendEmailValidation(username);
        }
    } catch {
        $('#formarea').pleaseWait('stop');
        toastr.error('unable to signin');
    }

}

function checkPasswordStrength() {
    var number = /([0-9])/;
    var alphabets = /([a-zA-Z])/;
    var special_characters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
    var password = $('#password').val().trim();
    if (password.length < 8) {
      $('#password-strength-status').removeClass();
      $('#password-strength-status').addClass('weak-password');
      $('#password-strength-status').html("Weak (should be atleast 8 characters.)");
    } else {
      if (password.match(number) && password.match(alphabets) && password.match(special_characters)) {
        $('#password-strength-status').removeClass();
        $('#password-strength-status').addClass('strong-password');
        $('#password-strength-status').html("Strong");
      }
      else {
        $('#password-strength-status').removeClass();
        $('#password-strength-status').addClass('medium-password');
        $('#password-strength-status').html("Medium (should include alphabets, numbers and special characters.)");
      }
    }
  }