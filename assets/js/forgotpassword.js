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
                displayToast('error', d.responseJSON.message, d.responseJSON.status)
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
    let oldPassword = $('#oldPassword').val();
    let newPassword = $('#newPassword').val();
    username = localStorage.getItem('email');
    api_endpoint = "/api/v1/auth/ChangPassword";


    $('#chgPass').pleaseWait();
    //check if token is valid
    if (password != confirmpassword) {
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
                displayToast('error', "Error Changing Password", "Error");
                $('#chgPass').pleaseWait('stop');
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

$('body').on('click', '#change-pass', function (e) {
    e.preventDefault();
    let confirmpassword = $('#confirmpassword').val();
    let password = $('#password').val();
    let oldPassword = $('#oldPassword').val();
    username = localStorage.getItem('email');
    api_endpoint = "/api/v1/auth/ChangePassword";


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