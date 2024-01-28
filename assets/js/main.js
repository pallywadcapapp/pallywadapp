(function($) {
    "use strict";

    /*-------------------------------------
    ** All Functions List **
    0. Lazy load images on page load
    1. API URL 
    2. Initialize onscroll animations
    3. Onboarding steps initialization
    4. Toggle password
    5. History navigation
    6. General utilities
    7. Sign in user
    -------------------------------------*/

    /*-------------------------------------
    1. On Load
    -------------------------------------*/
    $(window).on('load resize', function() {

        $('body').imagesLoaded().done(function(instance) {
            $('body').addClass('loaded');
        });
    });

    
})(jQuery);


/*-------------------------------------
1. API URL
-------------------------------------*/
const api_url = 'https://auth.pallywad.com'; 
const loan_app_url = 'https://user.pallywad.com';
const setup_url = 'https://setup.pallywad.com';

$.ajaxSetup({
    beforeSend: function (xhr) {
        try {
            var auth = localStorage.getItem('token');
            var expirydate = localStorage.getItem('expiry');
            xhr.setRequestHeader('Expiry', expirydate);
            xhr.setRequestHeader('Authorization', 'Bearer ' + auth);
        } catch(ex){
            var auth = '';
            localStorage.removeItem('token');
            xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
            xhr.setRequestHeader('Authorization', 'Bearer ' + auth);
        }
    }
});


/*-------------------------------------
2. initialize onscroll animations
-------------------------------------*/
//AOS.init();

/*-------------------------------------
3. onboarding steps initialization
-------------------------------------*/

//onboarding page 1
$('body').on('click','#continue', function(e){

    if($("#step-1").valid()){
        e.preventDefault();
        let email = $('#email').val();
        let password  = $('#password').val();
        let api_endpoint = "/api/v1/Auth/newUser";

        //check email if available
        let data =  {
            "username": email
        }

        $.ajax({
            type:'get',
            url: api_url+api_endpoint,
            headers: { 'Content-Type': 'application/json' },
            data: data,
            error: function(d){
                displayToast('error',d.responseJSON.message, d.responseJSON.status)
            },
            success: function(d){
                if(d.status=="success"){
                    localStorage.setItem("email", email);
                    localStorage.setItem("password", password);
                    localStorage.setItem("verificationPin", d.message)
                    location.href = "/onboarding-2";
                }
                else {
                    displayToast('error', "Email is already registered to another user", "Error");
                }
                
            }
        })

        
    }
})

//onboarding page 2
$(document).ready(function(){
    $('.pin').segmentedInput({
        // options
        autoSubmit: false,
        fieldClasses: 'pinClass'
    });
});

//verify email
$('body').on('click', '#verifyEmail', function(e){
    e.preventDefault();
    inputElements = $('.pin').map((i, e) => e.value).get();
    username = localStorage.getItem('email');
    token = localStorage.getItem('verificationPin');
    api_endpoint = "/api/v1/Auth/ValidateNewUser";
    

    //check if token is valid
    let data =  {
        "token": token,
        "username": username
    }

    $.ajax({
        type:'get',
        url: api_url+api_endpoint,
        headers: { 'Content-Type': 'application/json' },
        data: data,
        error: function(d){
            displayToast('error', "Token not provided!", "Error");
        },
        success: function(d){
            if(d.status=="Ok"){
                location.href = "/onboarding-3";
            }
            else {
                displayToast('error', "PIN Incorrect!", "Error");
            }
            
        }
    })
})

//onboarding page 3
$('body').on('click', '#submit-onboarding', function(e){
    if($("#step-2").valid()){
        e.preventDefault(); 
        let api_endpoint = '/api/v1/Auth/register';
        let firstname = $('[name=firstname]').val();
        let lastname = $('[name=lastname]').val();
        let othernames = $('[name=othernames]').val();
        let phoneNo = $('[name=phoneNo]').val();
        let email = localStorage.getItem('email');
        let password = localStorage.getItem('password');
        let confirmPassword = password;
        let ssn = "";
        let type = "";

        let data =  {
            "firstname": firstname,
            "lastname" : lastname,
            "othernames": othernames,
            "phoneNo": phoneNo,
            "email": email,
            "password" : password,
            "confirmPassword" : confirmPassword,
            "ssn": ssn,
            "type" : type
        }

        $.ajax({
            type:'post',
            url: api_url+api_endpoint,
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify(data),
            error: function(d){
                displayToast('error', d.responseJSON.message, d.responseJSON.status);
            },
            success: function(d){
                if(d.status=='Success'){
                    displayToast('success', "Your account was created successfully", "Signup Successful");
                    
                    localStorage.removeItem("email");
                    localStorage.removeItem("password");
                    setTimeout(function(){
                        location.href = "/sign-in";
                    }, 5000);
                }
                else {
                    displayToast("error", d.message, d.status);
                }
                
            }
        })
    }
})

/*-------------------------------------
4. Toggle password
-------------------------------------*/
$("body").on('click','.toggle-password',function () {
    $(this).toggleClass("fa-eye-slash fa-eye");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
    input.attr("type", "text");
    } else {
    input.attr("type", "password");
    }
});

/*-------------------------------------
5. History navigation (goBack)
-------------------------------------*/
function goBack(step){
    console.log("gobackclicked");
    window.history.back(-step);
}

/*-------------------------------------
6. General utilities
-------------------------------------*/
function displayToast(messageType, message, title){
    switch (messageType) {
        case 'success':
            toastr.success(message, title, {
                timeOut: 5e3,
                closeButton: !0,
                debug: !1,
                newestOnTop: !0,
                progressBar: !0,
                positionClass: "toast-top-right",
                preventDuplicates: !0,
                onclick: null,
                showDuration: "300",
                hideDuration: "1000",
                extendedTimeOut: "1000",
                showEasing: "swing",
                hideEasing: "linear",
                showMethod: "fadeIn",
                hideMethod: "fadeOut",
                tapToDismiss: !1,
            });
            
            break;
    
        default:
            toastr.error(message, title, {
                timeOut: 5e3,
                closeButton: !0,
                debug: !1,
                newestOnTop: !0,
                progressBar: !0,
                positionClass: "toast-top-right",
                preventDuplicates: !0,
                onclick: null,
                showDuration: "300",
                hideDuration: "1000",
                extendedTimeOut: "1000",
                showEasing: "swing",
                hideEasing: "linear",
                showMethod: "fadeIn",
                hideMethod: "fadeOut",
                tapToDismiss: !1,
            });
            break;
    }
    
}


/*-------------------------------------
7. Sign in user
-------------------------------------*/
$('body').on('click','#login', function(e){

    if($("#step-1").valid()){
        e.preventDefault();
        let email = $('#email').val();
        let password  = $('#password').val();
        let api_endpoint = "/api/v1/Auth/login";

        //check if login credentials are valid
        let data =  {
            "username": email,
            "password": password
        }

        $.ajax({
            type:'post',
            url: api_url+api_endpoint,
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify(data),
            error: function(d){
                displayToast('error',d.responseJSON.message, d.responseJSON.status)
            },
            success: function(d){
                if(d.token){
                    fetchLoggedInUserDetails(email, d.token, d.expiration);
                }
                else {
                    displayToast('error', "The email or password you entered is incorrect", "Login Failed");
                }
                
            }
        })

        
    }
})

function fetchLoggedInUserDetails(email, token, expiration){
    let api_endpoint = "/api/Profile";
    data = {
        "username": email
    };

    $.ajax({
        type:'get',
        url: api_url+api_endpoint,
        headers: { 'Content-Type': 'application/json' },
        data: data,
        error: function(d){
            displayToast('error',d.responseJSON.message, d.responseJSON.status)
        },
        success: function(d){
            if(d.email){
                localStorage.setItem("firstname", d.firstname);
                localStorage.setItem("lastname", d.lastname);
                
                localStorage.setItem("email", email);
                localStorage.setItem("token", token);
                localStorage.setItem("tokenExpiration", expiration)
                localStorage.setItem("isLoggedIn", "1");
                location.href = "/dashboard";
            } 
        }
    })
}


/*-------------------------------------
7. Add Loan
-------------------------------------*/

//is eligible
function addLoan(email){
    let api_endpoint = "/api/Profile/iseligible";
    $.ajax({
        type:'get',
        url: api_url+api_endpoint,
        headers: { 'Content-Type': 'application/json' },
        error: function(d){
            displayToast('error',d.responseJSON.message, d.responseJSON.status)
        },
        success: function(d){
            /*if(d.message=="update date of birth profile"){
                let message = `You need to update your profile in order to add a loan. 
                <a href="update-profile">Click here</a> to update now.`;
                $('#stepsNotification').html(message).show();
            }
            if(d.message=="upload all required documents profile"){
                let message = `You need to upload required documents. 
                <a href="upload-documents">Click here</a> to get started.`;
                $('#stepsNotification').html(message).show();
            }
            else {
                //location.href = "request-loan";
            }*/
            if(d.message != true){
                let message = `You need to update your profile in order to add a loan. 
                <a href="update-profile">Click here</a> to update now.`;
                $('#stepsNotification').html(message).show();
            }else{
                
            }
        }
    })
}



/*-------------------------------------
7. update profile
-------------------------------------*/
$('body').on('click','#update-profile', function(e){

    if($("#updateProfileForm").valid()){
        e.preventDefault();
        let dob  = $('[name=dob]').val();
        let address  = $('[name=address]').val();
        let phoneNumber  = $('[name=phoneNumber]').val();
        let firstname  = $('[name=firstname]').val();
        let lastname  = $('[name=lastname]').val();
        let othernames  = $('[name=othernames]').val();
        let sex = $('[name=sex]').val();
        let employmentStatus = $('[name=employmentStatus]').val();
        let bvn = "string";
        let memberid = "string";
        let email = localStorage.getItem("email");

        let api_endpoint = "/api/Profile";

        //check if login credentials are valid
        let data =  {
            dob,
            address,
            phoneNumber,
            firstname,
            lastname,
            othernames,
            sex,
            employmentStatus,
            bvn,
            email,
            memberid
        }

        $.ajax({
            type:'put',
            url: api_url+api_endpoint,
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify(data),
            error: function(d){
                
                displayToast('error',d.responseJSON.message, d.responseJSON.title)
            },
            success: function(d){
                displayToast('success', "Your profile was updated successfully", "Profile update successful")
            }
        })

        
    }
})



//section to get all needed ids loaded by import
$(window).on('load', function(){

    //prefill document types
    if($("#kyc1-form").length > 0) {
        fetchDocumentsList();
        function fetchDocumentsList(){
            let api_endpoint = "/api/Documents";
            $.ajax({
                type:'get',
                url: setup_url+api_endpoint,
                headers: { 'Content-Type': 'application/json' },
                error: function(d){
                    displayToast('error',d.responseJSON.message, d.responseJSON.status)
                },
                success: function(d){
                    let lists = d;
                    let documents = "";
                    for (let i = 0; i < lists.length; i++) {
                        documents += `
                            <div class="form-check">
                                <input class="form-check-input singleCheck" name="verificationDocument" required type="checkbox" value="${lists[i]}">
                                <label class="form-check-label" for="flexCheckDefault">
                                    ${lists[i]}
                                </label>
                            </div>
                        `
                    }
                    $('#documentsList').html(documents);
                }
            })
        }
    }

    if($("#kyc2-form").length > 0) {
        let document = localStorage.getItem('chosenDocument');  
        $('#selected-document').html(document);
    }

    
    // Prefill profile 
    if($("#updateProfile").length > 0) {
        let email = localStorage.getItem("email");
        preloadProfileDetails(email);
        function preloadProfileDetails(email){
            console.log("preload here");
            let api_endpoint = "/api/Profile";
            let data = {
                username: email
            }
            $.ajax({
                type:'get',
                url: api_url+api_endpoint,
                headers: { 'Content-Type': 'application/json' },
                data: data,
                error: function(d){
                    displayToast('error',d.responseJSON.message, d.responseJSON.status)
                },
                success: function(d){
                    $('[name="firstname"]').val(d.firstname);
                    $('[name="lastname"]').val(d.lastname);
                    $('[name="othernames"]').val(d.othernames);
                    $('[name="email"]').val(d.email);
                    $('[name="phoneNumber"]').val(d.phoneNumber);
                    $('[name="address"]').val(d.address);
                    $('[name="dob"]').val(d.dob);
                    $('[name="sex"] option:contains("'+d.sex+'")').prop('selected', true);
                    $('[name="employmentStatus"] option:contains("'+d.employmentStatus+'")').prop('selected', true);
                    
                }
            })
        }
    }

    //load datepicker
    $('.mydatepicker, #dob').datepicker();

})

$("body").on('change', '.singleCheck', function() {
    $(".singleCheck").prop('checked', false);
    $(this).prop('checked', true);
});

/*
kyc page 1
*/ 
$('body').on('click', '#continue-button-2', function(){
    console.log("happening here");
    if($('#kyc1-form-step input:checked').length < 1){
        displayToast('error','You must select at least one document', 'Select a Document')
    }
    else {
        let doc = $('#kyc1-form-step input:checked').val();
        localStorage.setItem('chosenDocument', doc);
        window.location.replace("kyc-2");
    }
})
