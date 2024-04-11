var userLoanRequest = '';
(function ($) {
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
    $(window).on('load resize', function () {

        $('body').imagesLoaded().done(function (instance) {
            $('body').addClass('loaded');
        });
    });



})(jQuery);

$(document).ajaxError(function (event, xhr, ajaxOptions, thrownError) {
    console.log(event);
    console.log(xhr);
    console.log(ajaxOptions);
    var pathname = $(location).attr("pathname");
    if (pathname != '/sign-in' && pathname != '/forgot-password'
        && pathname != '/password-code' && pathname != '/new-passWord') {
        if (xhr.status === 401) {
            window.location.href = "/logout";
        }
        if (xhr.statusText === 'Unauthorized') {
            window.location.href = "/logout";
        }
    }
});


/*-------------------------------------
1. API URL
-------------------------------------*/
const api_url = 'https://auth.pallywad.com';
const loan_app_url = 'https://user.pallywad.com';
const admin_app_url = 'https://adminapi.pallywad.com';
const setup_url = 'https://setup.pallywad.com';
var uploadedFilesHolder = [];
var colls = '';

$.ajaxSetup({
    beforeSend: function (xhr) {
        try {
            var auth = localStorage.getItem('token');
            var expirydate = localStorage.getItem('expiry');
            xhr.setRequestHeader('Expiry', expirydate);
            xhr.setRequestHeader('Authorization', 'Bearer ' + auth);
        } catch (ex) {
            var auth = '';
            localStorage.removeItem('token');
            xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
            xhr.setRequestHeader('Authorization', 'Bearer ' + auth);
        }
    }
});

$(document).ajaxError(function (event, xhr, ajaxOptions, thrownError) {
    console.log(event);
    console.log(xhr);
    var pathname = $(location).attr("pathname");
    console.log(pathname);
    console.log((pathname != '/sign-in' && pathname != '/forgot-password'
        && pathname != '/password-code'));
    if (pathname != '/sign-in' && pathname != '/forgot-password'
        && pathname != '/password-code' && pathname != '/new-passWord') {

        if (xhr.status === 401) {
            window.location.href = "/sign-in";
        }
        if (xhr.statusText === 'Unauthorized') {
            window.location.href = "/logout";
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

$('body').on('click', '#continue', function (e) {

    if ($("#step-1").valid()) {
        e.preventDefault();
        let email = $('#email').val();
        let password = $('#password').val();
        let api_endpoint = "/api/v1/Auth/newUser";

        //check email if available
        let data = {
            "username": email
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
                if (d.status == "success") {
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
$(document).ready(function () {
    $('.pin').segmentedInput({
        // options
        autoSubmit: false,
        fieldClasses: 'pinClass'
    });
});

//verify email
$('body').on('click', '#verifyEmail', function (e) {
    e.preventDefault();
    inputElements = $('.pin').map((i, e) => e.value).get();
    username = localStorage.getItem('email');
    token = localStorage.getItem('verificationPin');
    api_endpoint = "/api/v1/Auth/ValidateNewUser";


    //check if token is valid
    let data = {
        "token": token,
        "username": username
    }

    $.ajax({
        type: 'get',
        url: api_url + api_endpoint,
        headers: { 'Content-Type': 'application/json' },
        data: data,
        error: function (d) {
            displayToast('error', "Token not provided!", "Error");
        },
        success: function (d) {
            if (d.status == "Ok") {
                location.href = "/onboarding-3";
            }
            else {
                displayToast('error', "PIN Incorrect!", "Error");
            }

        }
    })
})

//onboarding page 3
$('body').on('click', '#submit-onboarding', function (e) {
    if ($("#step-2").valid()) {
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

        let data = {
            "firstname": firstname,
            "lastname": lastname,
            "othernames": othernames,
            "phoneNo": phoneNo,
            "email": email,
            "password": password,
            "confirmPassword": confirmPassword,
            "ssn": ssn,
            "type": type
        }

        $.ajax({
            type: 'post',
            url: api_url + api_endpoint,
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify(data),
            error: function (d) {
                displayToast('error', d.responseJSON.message, d.responseJSON.status);
            },
            success: function (d) {
                if (d.status == 'Success') {
                    displayToast('success', "Your account was created successfully", "Signup Successful");

                    localStorage.removeItem("email");
                    localStorage.removeItem("password");
                    setTimeout(function () {
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
$("body").on('click', '.toggle-password', function () {
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
function goBack(step) {
    console.log("gobackclicked");
    window.history.back(-step);
}

/*-------------------------------------
6. General utilities
-------------------------------------*/
function displayToast(messageType, message, title) {
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
$('body').on('click', '#login', function (e) {

    if ($("#step-1").valid()) {
        e.preventDefault();
        let email = $('#email').val();
        let password = $('#password').val();
        let api_endpoint = "/api/v1/Auth/login";

        //check if login credentials are valid
        let data = {
            "username": email,
            "password": password
        }
        $('.signin-form').pleaseWait();
        $.ajax({
            type: 'post',
            url: api_url + api_endpoint,
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify(data),
            error: function (d) {
                $('.signin-form').pleaseWait('stop');
                displayToast('error', d.responseJSON.message, d.responseJSON.status)
            },
            success: function (d) {
                $('.signin-form').pleaseWait('stop');
                if (d.token) {
                    fetchLoggedInUserDetails(email, d.token, d.expiration);
                }
                else {
                    displayToast('error', "The email or password you entered is incorrect", "Login Failed");
                }

            }
        })


    }
})

function fetchLoggedInUserDetails(email, token, expiration) {
    let api_endpoint = "/api/Profile";
    data = {
        "username": email
    };

    $.ajax({
        type: 'get',
        url: api_url + api_endpoint,
        headers: { 'Content-Type': 'application/json' },
        data: data,
        error: function (d) {
            displayToast('error', d.responseJSON.message, d.responseJSON.status)
        },
        success: function (d) {
            if (d.email) {
                $('.profile-pic').attr('src', d.imgUrl)
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
function addLoan(email) {
    let api_endpoint = "/api/Profile/iseligible";
    $.ajax({
        type: 'get',
        url: api_url + api_endpoint,
        headers: { 'Content-Type': 'application/json' },
        error: function (d) {
            displayToast('error', d.responseJSON.message, d.responseJSON.status)
        },
        success: function (d) {
            if (d.message == "upload all required documents profile") {
                //redirect to document upload page
                let message = `You need to update your profile in order to add a loan. 
                <a href="upload-documents">Click here</a> to update now.`;
                $('#stepsNotification').html(message).show();
            } else if (d.message != true) {
                let message = `You need to update your profile in order to add a loan. 
                <a href="update-profile">Click here</a> to update now.`;
                $('#stepsNotification').html(message).show();
                localStorage.setItem('gotoDocuments', 'true');
            } else {
                location.href = "loan-request";
            }
        }
    })
}

function checkEligibility() {
    console.log("check eligibility");
    let api_endpoint = "/api/Profile/iseligible";
    $.ajax({
        type: 'get',
        url: api_url + api_endpoint,
        headers: { 'Content-Type': 'application/json' },
        error: function (d) {
            //displayToast('error', d.responseJSON.message, d.responseJSON.status)
        },
        success: function (d) {
            if (d.message != true) {
                $('.notEligible').show();
                $('.Eligible').hide();
                localStorage.setItem('iseligible', false);
            } else {
                $('.notEligible').hide();
                $('.Eligible').show();
                localStorage.setItem('iseligible', true)
            }
        }
    })
}

/*-------------------------------------
7. update profile
-------------------------------------*/
$('body').on('click', '#update-profile', function (e) {
    var stt = qs['status'];
    if ($("#updateProfileForm").valid()) {
        $('#updateProfileForm').pleaseWait();
        e.preventDefault();
        let dob = new Date($('[name=dob]').val());
        let phoneNumber = $('[name=phoneNumber]').val();
        let firstname = $('[name=firstname]').val();
        let lastname = $('[name=lastname]').val();
        let othernames = $('[name=othernames]').val();


        let bvn = $('[name=bvn]').val();
        let nin = $('[name=nin]').val();
        let houseNo = $('[name=houseNo]').val();
        let street = $('[name=street]').val();
        let city = $('[name=city]').val();
        let lga = $('[name=lga]').val();
        let closest = $('[name=closest]').val();
        let landmark = $('[name=landmark]').val();

        let sex = $('[name=sex]').val();
        let employmentStatus = $('[name=employmentStatus]').val();
        let memberid = "string";
        let email = localStorage.getItem("email");
        let imgUrl = tempImgUrl;

        let api_endpoint = "/api/Profile";

        var checkProf = localStorage.getItem('tempProfile');


        let address = houseNo + " " + street + " " + city + " " + lga + ", " + closest + " " + landmark;

        //check if login credentials are valid
        let data = {
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
            memberid,
            imgUrl,
            nin, houseNo, street, city, lga, closest, landmark
        }

        $.ajax({
            type: 'put',
            url: api_url + api_endpoint,
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify(data),
            error: function (d) {
                $('#updateProfileForm').pleaseWait('stop');
                if (d.responseText == "") {
                    displayToast('error', "Unable to Update Business Information Details", 'error')
                } else {
                    displayToast('error', "Unable to Update Business Information Details", 'error')
                    //displayToast('error', d.responseText, 'error')
                }
            },
            success: function (d) {
                if (checkProf) {
                    uploadProfilePicture();
                } else {

                    $('#updateProfileForm').pleaseWait('stop');
                }

                displayToast('success', "Your profile was updated successfully", "Profile update successful")
                let redirect = localStorage.getItem('gotoDocuments');
                if (stt == 'new') {
                    localStorage.removeItem('gotoDocuments');
                    location.href = "/upload-documents";
                }
            }
        })


    } else {
        $('#errorNotification').html('input field necessary');
        $('#errorNotification').focus();
    }
})



// display datepicker in popup mode
$(window).on('load', function () {
    if ($('#dob').length > 0) {
        const dob = dobDatepicker('#dob', {
            display_mode: 'popup',
            enable_built_in_validation: false,
        });
    }

    $("#updateProfileForm").submit(function (e) {
        e.preventDefault();
    });

    if ($('#loanRepaymentArea').length > 0) {
        loadPayments();
        loadPaymentsHistory()
    }

    if ($('#dashboard').length > 0) {
        $('.Eligible').hide();
        checkEligibility();

    }

    if ($('#main').length > 0) {
        var iselig = localStorage.getItem('iseligible');
        if (iselig == "true") {
            $('.Eligible').show();
        } else {
            $('.Eligible').hide();
        }
    }





})

var tempImgUrl = '';

//section to get all needed ids loaded by import
$(window).on('load', function () {
    fetchLoanRequests();
    //fetchProcessedLoanRequests();
    fetchCompanyDetails();
    fetchLoanProductType();
    fetchNotifications();
    setInterval(fetchNotifications, 900000); //every 15 minutes
    //prefill document types
    if ($("#kyc1-form").length > 0) {
        fetchDocumentsList();
        function fetchDocumentsList() {
            let api_endpoint = "/api/Documents/all";
            $.ajax({
                type: 'get',
                url: setup_url + api_endpoint,
                headers: { 'Content-Type': 'application/json' },
                error: function (d) {
                    displayToast('error', d.responseJSON.message, d.responseJSON.status)
                },
                success: function (d) {
                    let lists = d;
                    let documents = "";
                    let addressDocName = "";
                    let addressDocId = "";
                    for (let i = 0; i < lists.length; i++) {
                        if (lists[i].type == "Identity") {
                            documents += `
                                <div class="form-check">
                                    <input class="form-check-input singleCheck" 
                                        name="verificationDocument" required 
                                        type="checkbox" 
                                        valueName="${lists[i].name}"
                                        value="${lists[i].id}">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        ${lists[i].name}
                                    </label>
                                </div>
                            `
                        }
                        if (lists[i].type == "Address") {
                            localStorage.setItem('addressDocName', lists[i].name);
                            localStorage.setItem('addressDocId', lists[i].id);
                        }

                    }
                    $('#documentsList').html(documents);

                }
            })
        }
    }

    if ($("#kyc2-form").length > 0) {
        let document = localStorage.getItem('chosenDocumentName');
        $('#selected-document').html(document);
    }

    if ($("#kyc3-form").length > 0) {
        let document = localStorage.getItem('addressDocName');
        $('#selected-document').html(document);
    }


    // Prefill profile 
    if ($("#updateProfile").length > 0) {
        let email = localStorage.getItem("email");
        preloadProfileDetails(email);

    }

    if ($('#loanType').length > 0) {
        let api_endpoint = "/api/Loan";
        $.ajax({
            type: 'get',
            url: setup_url + api_endpoint,
            headers: { 'Content-Type': 'application/json' },
            error: function (d) {
                displayToast('error', d.responseJSON.message, d.responseJSON.status)
            },
            success: function (d) {
                localStorage.setItem('loanProducts', JSON.stringify(d))
                let lists = d;
                let documents = "";
                for (let i = 0; i < lists.length; i++) {
                    documents += `
                        <option value="${lists[i].loancode}" 
                            loanCategory="${lists[i].category}"
                            collateralPercentage="${lists[i].collateralPercentage}"
                            pindex="${i}"
                            loanDescription="${lists[i].loandesc}">
                            ${lists[i].category}
                        </option>
                    `;
                }
                $('#loanTypeDescription').html(`<b>Loan Type Description</b><br><br>${lists[0].loandesc}`);
                $('#category').val(lists[0].category);
                $('#collateralPercentage').val(lists[0].collateralPercentage);
                $('#pindex').val(0);
                $('#loanType').html(documents);
                $('#interestrate').val(lists[0].loaninterest);
            }
        })

        uploadedDocuments();
    }

    if ($('#collateralType').length > 0) {
        //loadUserCollateralTypes();
        loadCollateralTypes();
    }




    //load datepicker
    $('.mydatepicker, #dob').datepicker();



})

function loadCollateralTypes() {
    let api_endpoint = "/api/Collateral/all";
    $.ajax({
        type: 'get',
        url: setup_url + api_endpoint,
        headers: { 'Content-Type': 'application/json' },
        error: function (d) {
            displayToast('error', d.responseJSON.message, d.responseJSON.status)
        },
        success: function (d) {
            let lists = d;
            let documents = "";
            for (let i = 0; i < lists.length; i++) {
                documents += `
                    <option value="${lists[i].name}"
                    collateralDescription="${lists[i].description}">
                        ${lists[i].name}
                    </option>
                `;
            }
            localStorage.setItem('selCollateral', lists[0].name);
            $('#collateralType').html(documents);
            $('#collateralTypeDescription').html(`<br>${lists[0].description}`);
            $('.collat').html(lists[0].name);
            if (lists[0].name == 'Car') {
                $('.car').show();
                $('.collatType').html('Make');
                $('#make').attr('placeholder', "Car Make");

            } else {
                $('.car').hide();
                $('.collatType').html('Type');
                $('#make').attr('placeholder', "Gold Type");
            }

        }
    })
}

function loadUserCollateralTypes() {
    let api_endpoint = "/api/Collateral/all";
    $.ajax({
        type: 'get',
        url: loan_app_url + api_endpoint,
        headers: { 'Content-Type': 'application/json' },
        error: function (d) {
            displayToast('error', d.responseJSON.message, d.responseJSON.status)
        },
        success: function (d) {
            console.log
            let lists = d;
            colls = d;
            if (lists.length < 1) {
                $('.nc').show();
                $('.oc').hide();
                loadCollateralTypes();
            } else {
                $('.nc').hide();
                $('.oc').show();
                let documents = '<option value="0">- Select Collateral -</option>';
                for (let i = 0; i < lists.length; i++) {
                    documents += `
                    <option value="${i}">
                        ${lists[i].name} - ${lists[i].otherdetails}
                    </option>
                `;
                }
                $('#userCollateralType').html(documents);
            }


        }
    })
}


function loadPayments() {
    let api_endpoint = "/api/Payments";
    let content = '';
    $.ajax({
        type: 'get',
        url: loan_app_url + api_endpoint,
        headers: { 'Content-Type': 'application/json' },
        error: function (d) {
            $('#repaymentItems').html('<div class="top-line py-2" ><h4 style="color:#B7B7B7 !important;">No payment made</h4></div>');
            displayToast('error', d.responseJSON.message, d.responseJSON.status)
        },
        success: function (d) {
            console.log(d)
            let lists = d;
            if (lists.length > 0) {
                for (let i = 0; i < lists.length; i++) {
                    payment_status = (lists[i].status == "Pending")
                        ? `<span class="badge text-bg-warning">${lists[i].status}</span>`
                        : `<span class="badge text-bg-success">${lists[i].status}</span>`;
                    content += `
                <div class="row">
                    <div class="col-md-8 repayment-item">
                        <b>${lists[i].loanRefId} </b><br>
                        <small class="grey-text">${formatDate3(lists[i].requestDate).date2}</small><br>
                        <small class="grey-text"><b>Status:</b> ${payment_status} </small>
                        
                    </div>
                    <div class="col-md-4 repayment-item">
                        <small>Amount Repaid:</small><br>
                        <div class="repayment-price">&#8358; ${number_format(lists[i].amount)}</div>
                    </div>
                </div>
                `;

                }
            } else {
                content = '<div class="top-line py-2" ><h4 style="color:#B7B7B7 !important;">No payment made</h4></div>';
            }


            $('#repaymentItems').html(content);

        }
    })
}

function loadPaymentsHistory() {
    let api_endpoint = "/api/Payments";
    $.ajax({
        type: 'get',
        url: loan_app_url + api_endpoint,
        headers: { 'Content-Type': 'application/json' },
        error: function (d) {
            $('#repaymentItems2').html('<div class="top-line py-2" ><h4 style="color:#B7B7B7 !important;">No payment made</h4></div>');
            displayToast('error', d.responseJSON.message, d.responseJSON.status);
        },
        success: function (d) {
            console.log(d)
            let lists = d;
            let content = '';
            if (lists.length > 0) {
                for (let i = 0; i < lists.length; i++) {
                    payment_status = (lists[i].status == "Pending")
                        ? `<span class="badge text-bg-warning">${lists[i].status}</span>`
                        : `<span class="badge text-bg-success">${lists[i].status}</span>`;
                    content += `
                    <div class="row">
                        <div class="col-md-5 repayment-item2">
                            <div class="repayment-price">&#8358; ${number_format(lists[i].amount)}</div>
                            <small class="grey-text">${lists[i].loanRefId}</small><br>
                            
                        </div>
                        <div class="col-md-3 repayment-item2">
                            <small class="black-text"><b>Status:</b>
                            <br> ${payment_status} </small>
                        </div>
                        <div class="col-md-4 repayment-item2">
                            <small>${formatDate3(lists[i].requestDate).time}</small><br>
                            <small>${formatDate3(lists[i].requestDate).date2}</small>
                            
                        </div>
                    </div>
                    `;

                }
            } else {
                content = '<div class="top-line py-2" ><h4 style="color:#B7B7B7 !important;">No payment made</h4></div>';
            }



            $('#repaymentItems2').html(content);

        }
    })
}


$("body").on('change', '.singleCheck', function () {
    $(".singleCheck").prop('checked', false);
    $(this).prop('checked', true);
});

$("body").on('change', '#loanType', function () {
    let description = $("#loanType :selected").attr("loanDescription");
    let category = $("#loanType :selected").attr("loanCategory");
    let collateralPercentage = $("#loanType :selected").attr("collateralPercentage");
    let pindex = $("#loanType :selected").attr("pindex");
    console.log(description, category);
    let descriptionBox = $('#loanTypeDescription');
    let categoryBox = $('#category');
    let collateralPercentageyBox = $('#collateralPercentage');
    let pindexBox = $('#pindex');

    if (category == 'Business Loan') {
        $('.busLoanView').show();
    } else {
        $('.busLoanView').hide();
    }

    descriptionBox.html(`<b>Loan Type Description:</b><br><br> ${description}`);
    categoryBox.val(category);
    collateralPercentageyBox.val(collateralPercentage);
    pindexBox.val(pindex);
});

$('body').on('change', '#collateralType', function () {
    let collat = $("#collateralType :selected").attr("value");
    let description = $("#collateralType :selected").attr("collateralDescription");

    $('#collateralTypeDescription').html(`<br>${description}`);
    localStorage.setItem('selCollateral', collat);
    $('.collat').html(collat);
    if (collat == 'Car') {
        $('.car').show();
        $('.collatType').html('Make');
        $('#make').attr('placeholder', "Car Make");

    } else {
        $('.car').hide();
        $('.collatType').html('Type');
        $('#make').attr('placeholder', "Gold Type");
    }
});

$("body").on('change', '#loanAmountRequested', function () {
    //$('#loanAmountRequested').change(function (e) {
    var amount = ($(this).val());
    var intrate = parseFloat($('#interestrate').val());

    var loanAmount = (amount * intrate) / 100;
    $('#interest').val(loanAmount);
});

/***
** PRELOAD FUNCTIONS
***/


function uploadedDocuments() {
    let api_endpoint = "/api/Documents";
    $.ajax({
        type: 'get',
        url: loan_app_url + api_endpoint,
        headers: { 'Content-Type': 'application/json' },
        error: function (d) {
            displayToast('error', d.responseJSON.message, d.responseJSON.status)
        },
        success: function (d) {

            let lists = d;
            let documents = "";
            for (let i = 0; i < lists.length; i++) {
                documents += `
                    <div class="form-check">
                        <input class="form-check-input" 
                            name="verificationDocument" required 
                            type="checkbox" checked
                            valueName="${lists[i].name}"
                            value="${lists[i].id}">
                        <label class="form-check-label" for="flexCheckDefault">
                            <b>${lists[i].name}</b><br>
                            <img src="https://user.pallywad.com/api/documents/uploads?filename=${lists[i].url}" style="width:50px; height:50px;" alt="${lists[i].url}" />
                            
                        </label>
                </div>`;
            }
            $('#uploadedDocumentList').html(documents);

        }
    })
}


function fetchUploadedCollaterals() {
    let api_endpoint = "/api/Collateral/all";
    $.ajax({
        type: 'get',
        url: loan_app_url + api_endpoint,
        headers: { 'Content-Type': 'application/json' },
        error: function (d) {
            displayToast('error', d.responseJSON.message, d.responseJSON.status)
        },
        success: function (d) {

            let lists = d;
            let documents = [];
            for (let i = 0; i < lists.length; i++) {
                documents.push(lists[i].colleteralId);
            }
            localStorage.setItem('collateralRefId', JSON.stringify(documents));

        }
    })
}
function formatType(type){
    if(type == 'Approved'){
        return 'Pre-Approved'
    }else if(type == 'Collaterized'){
        return 'Collateralized'
    }else if(type == 'Processed'){
        return 'Disbursed'
    }else{
        return type;
    }
}

function fetchLoanRequests() {
    let api_endpoint = "/api/LoanRequest";
    var fmt = new DateFormatter();

    $.ajax({
        type: 'get',
        url: loan_app_url + api_endpoint,
        headers: { 'Content-Type': 'application/json' },
        error: function (d) {
            //console.log(d);
            //displayToast('error',d.responseJSON.message, d.responseJSON.status)
        },
        success: function (d) {
            userLoanRequest = d;
            let lists = d;
            let display = "";
            console.log(lists.length)
            if (lists.length < 1) {
                display += `
                <div class="top-line py-2" ><h4 style="color:#B7B7B7 !important;">You have no active loan</h4></div>
                `;
            } else {
                for (let i = 0; i < lists.length; i++) {
                    let loanTypeStyle = (lists[i].status == "Pending")
                        ? "loan-status-pending"
                        : (lists[i].status == "Declined" ? "loan-status-declined"
                            : (lists[i].status == "Awaiting Approval" ? "loan-status-awaiting"
                                : (lists[i].status == "Approved" ? "loan-status-approved"
                                : (lists[i].status == "Collaterized" ? "loan-status-collaterized"
                                    : "loan-status-running"))));

                    //Handle date and time formatting
                    let records = formatDate(lists[i]);
                    timeOutput = records.time;
                    dayOutput = records.date;

                    display += `
                <div class="top-line py-2">
                        <div class="row loanView" id="lview${i}" onclick="lvClick('${i}')">
                            <div class="col-md-3">
                                <span class="${loanTypeStyle}">${formatType(lists[i].status)}</span>
                            </div>
                            <div class="col-md-6 loan-display">
                                <h4>&#8358;${number_format(lists[i].amount)}</h4>
                                <p class="grey-text">${lists[i].category}</p>
                            </div>
                            <div class="col-md-3 loan-display">
                                <p class="grey-text">
                                ${timeOutput}<br>
                                ${dayOutput}
                                </p>
                                <br/>
                            </div>
                        </div>
                    </div>
                `;

                }
            }
            $('#allLoanRequests').html(display);

        }
    })
}



function fetchCompanyDetails() {
    let api_endpoint = "/api/Company";

    $.ajax({
        type: 'get',
        url: setup_url + api_endpoint,
        headers: { 'Content-Type': 'application/json' },
        error: function (d) {
            //displayToast('error', d.responseJSON.message, d.responseJSON.status)
        },
        success: function (d) {
            localStorage.setItem('companyDetails', JSON.stringify(d));
        }
    })
}

function fetchLoanProductType() {
    let api_endpoint = "/api/Loan";

    $.ajax({
        type: 'get',
        url: setup_url + api_endpoint,
        headers: { 'Content-Type': 'application/json' },
        error: function (d) {
            //displayToast('error', d.responseJSON.message, d.responseJSON.status)
        },
        success: function (d) {
            localStorage.setItem('loanProducts', JSON.stringify(d));
        }
    })
}

var notificationRecord = '';
function fetchNotifications() {
    let api_endpoint = "/api/notifications";
    $.ajax({
        type: 'get',
        url: loan_app_url + api_endpoint,
        headers: { 'Content-Type': 'application/json' },
        error: function (d) {
            //displayToast('error', d.responseJSON.message, d.responseJSON.status)
            $('.icon-button__badge').html(0);
        },
        success: function (d) {
            notificationRecord = d;
            $('.icon-button__badge').html(d.length);
            var display = '';
            for (let i = 0; i < d.length; i++) {
                let loanTypeStyle = (d.readStatus == false)
                ? "notification-status-read"
                : "notification-status-unread"
                display += `
            <li onclick="loadNotification(${d[i].id}, ${i})"><a href="javascript:void(0);" class="${loanTypeStyle} dropdown-item notify-item">
    <div class="notify-icon bg-primary"><i class="mdi mdi-cart-outline"></i></div>
    <p class="notify-details"><b>${d[i].subject}</b><br/><small class="text-muted">${d[i].message.slice(0, 40)}.</small></p>
</a></li>
            `;
            }

            $('#notbar').html(display)
        }
    })
}

function loadNotification(id, index) {
    //sessionStorage.setItem('notificationId', id);
    //window.location.href = '/notifications';
    $('#prembd').html(notificationRecord[index].message);
    $('.modal-title').html(notificationRecord[index].subject);
    myModal.show({
        keyboard: false,
        backdrop: 'static'
    });
}

function number_format(number, decimals, dec_point, thousands_sep) {
    // Strip all characters but numerical ones.
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

function formatDate(dateInput) {
    //Handle date and time formatting from DB
    var fmt = new DateFormatter();
    let rawDate = dateInput.requestDate.split("T");

    let dayDate = fmt.parseDate(rawDate[0], 'Y-m-d');
    let timeDate = fmt.parseDate(rawDate[1], 'H:i:s');

    let dayOutput = fmt.formatDate(dayDate, 'D, M d, Y');
    let timeOutput = fmt.formatDate(timeDate, 'g:i A');


    return {
        "date": dayOutput,
        "time": timeOutput
    }

}

function formatDate2(dateInput) {
    //Handle date and time formatting from DB
    var fmt = new DateFormatter();

    //handle date formatting from input field
    let dayDate = fmt.parseDate(dateInput, 'm/d/Y');
    let dayOutput = fmt.formatDate(dayDate, 'Y-m-d');
    let dayOutput2 = fmt.formatDate(dayDate, 'm/d/Y');


    return {
        "date": dayOutput,
        "date2": dayOutput2
    }

}

function formatDate3(dateInput) {
    //Handle date and time formatting from DB
    var fmt = new DateFormatter();
    let rawDate = dateInput.split("T");

    let dayDate = fmt.parseDate(rawDate[0], 'Y-m-d');
    let timeDate = fmt.parseDate(rawDate[1], 'H:i:s');

    let dayOutput = fmt.formatDate(dayDate, 'm/d/Y');
    let dayOutput2 = fmt.formatDate(dayDate, 'D, M d, Y');
    let timeOutput = fmt.formatDate(timeDate, 'g:i A');

    return {
        "date": dayOutput,
        "date2": dayOutput2,
        "time": timeOutput
    }

}


//loan request page 1
$('body').on('click', '#continue-loan-button-1', function () {
    console.log("happening here");
    if ($('#uploadedDocumentList input:checked').length < 1) {
        displayToast('error', 'You must select at least one document', 'Select a Document')
    }
    else if (!$('#loanAmountRequested').val()) {
        displayToast('error', 'You must enter loan amount', 'Enter loan amount')
    }
    else if ((parseInt($('#preferredTenor').val()) < 0) || (parseInt($('#preferredTenor').val()) > 12)) {
        displayToast('error', 'Tenor not within range', 'Invalid Tenor')
    }
    else {

        let loancode = $('#loanType :selected').val();
        let repaymentPlan = $('#repaymentPlan :selected').val();
        let amount = $('#loanAmountRequested').val();
        let purpose = $('#purpose').val();
        let businessname = $('#businessname').val();
        let preferredRate = $('#preferredRate').val();
        let preferredTenor = $('#preferredTenor').val();
        let sector = $('#sector').val();
        let age = $('#age').val();
        let category = $('#category').val();
        let collateralPercentage = $('#collateralPercentage').val();
        let pindex = $('#pindex').val();
        let documentIdRefs = [];
        let proofDocuments = []
        $("input:checkbox[name=verificationDocument]:checked").each(function () {
            documentIdRefs.push($(this).val());
            proofDocuments.push($(this).attr("ValueName"));
        });
        localStorage.setItem("loancode", loancode);
        localStorage.setItem("repaymentPlan", repaymentPlan);
        localStorage.setItem("amount", amount);
        localStorage.setItem("purpose", purpose);
        localStorage.setItem("category", category);
        localStorage.setItem("businessname", businessname);
        localStorage.setItem("sector", sector);
        localStorage.setItem("preferredRate", preferredRate);
        localStorage.setItem("preferredTenor", preferredTenor);
        localStorage.setItem("age", age);
        localStorage.setItem('collateralRate', collateralPercentage);
        localStorage.setItem('selIndex', pindex)
        localStorage.setItem('pindex', pindex)
        localStorage.setItem("documentIdRefs", JSON.stringify(documentIdRefs));
        window.location.replace("loan-request2");



    }
})

/*
kyc page 1
*/
$('body').on('click', '#continue-button-2', function () {
    console.log("happening here");
    if ($('#kyc1-form-step input:checked').length < 1) {
        displayToast('error', 'You must select at least one document', 'Select a Document')
    }
    else {
        let doc = $('#kyc1-form-step input:checked').val();
        let name = $('#kyc1-form-step input:checked').attr('valueName');
        localStorage.setItem('chosenDocument', doc);
        localStorage.setItem('chosenDocumentName', name);
        window.location.replace("kyc-2");
    }
})


/*
document upload
*/
$(document).ready(function () {
    var formData = new FormData();
    $("#ddArea").on("dragover", function () {
        $(this).addClass("drag_over");
        return false;
    });

    $("#ddArea").on("dragleave", function () {
        $(this).removeClass("drag_over");
        return false;
    });

    $("#ddArea").on("click", function (e) {
        file_explorer();
    });

    $("#ddArea").on("drop", function (e) {
        e.preventDefault();
        $(this).removeClass("drag_over");
        var files = e.originalEvent.dataTransfer.files[0];
        console.log(files);
        showFile(files);
        formData.append("file", files);
    });

    $('#upload-from-gallery').click(function (e) {
        file_explorer();
    })

    var uploadedFiles = [];

    $('#upload-collateral-document').click(function (e) {

        document.getElementById("selectfile").click();
        document.getElementById("selectfile").onchange = function () {
            file = document.getElementById("selectfile").files[0];

            //check if uploaded file is valid
            let validExtensions = ["image/jpeg", "image/jpg", "image/png", "application/pdf"];
            let fileType = file.type;
            if (validExtensions.includes(fileType)) {
                let fileReader = new FileReader();
                let uploadedFilesPreview = $('#uploadedFilesPreview');
                fileReader.onload = () => {
                    let fileURL = fileReader.result;
                    let imgTag = `<img src="${fileURL}" class="imgTag2" alt="">`;
                    if(fileType == "application/pdf")
                    imgTag = `<img src="assets/img/pdf.png" class="imgTag2" alt="">`;
                    let output = `
                        ${imgTag}
                    `;

                    uploadedFiles.push('file', file);

                    uploadedFilesPreview.append(`${output}`);
                    console.log(uploadedFiles);
                }
                fileReader.readAsDataURL(file);

            }
            else {
                displayToast("error", "The image to be uploaded must be either .png, .jpg, .jpeg or .pdf format", "Invalid Image File");
            }
        }

    })


    $('#preview-loan-details').click(function () {
        $('#kyc2-form').pleaseWait();
        var loanAmt = parseFloat(localStorage.getItem('amount'));
        var collateralRate = parseFloat(localStorage.getItem('collateralRate'));
        var estValue = parseFloat($('#estimatedValue').val()) * collateralRate / 100;
        console.log($('#estimatedValue').length)
        console.log(loanAmt)
        console.log(estValue)
        if ($('#estimatedValue').val() < 1) {
            displayToast('error', 'You must enter estimated value of collateral', 'Enter Collateral Value');
            $('#kyc2-form').pleaseWait('stop');
        } else if (loanAmt > estValue) {
            $('#kyc2-form').pleaseWait('stop');
            displayToast('error', 'Loan requested should not exceed ' + collateralRate + '% of the collateral value provided', 'Collateral value requirement');
            displayToast('error', 'Change the loan value or provide another collateral value entity', 'Enter Collateral Value');
        } else if (uploadedFiles.length < 1) {
            $('#kyc2-form').pleaseWait('stop');
            displayToast('error', 'Kindly provide collateral documents', 'Collateral Documents');
        }
        else {
            let api_endpoint = "/api/Collateral/UploadFile";
            let estimatedValue = $('#estimatedValue').val();
            let make = $('#make').val();
            let model = $('#model').val();
            let year = $('#year').val();
            let collateralRefId = $('#collateralType :selected').val();
            let otherdetails = $('#otherdetails').val() ?? "None";

            if (otherdetails = '' || otherdetails == null) {
                otherdetails = 'NIL'
            }
            //console.log(uploadedFiles);
            /*for (let i = 0; i < uploadedFiles.length - 1; i++) {
                console.log(uploadedFiles);
                formData.append("file", uploadedFiles[i].file);

            }*/

            formData.append("estimatedValue", estimatedValue);
            formData.append("collateralRefId", collateralRefId);
            formData.append("otherdetails", otherdetails);
            formData.append("make", make);
            formData.append("model", model);
            formData.append("year", year);

            var coll = [];
            //$.each($("#selectfile")[0].files, function(i, file) {
            $.each(uploadedFiles, function (i, file) {
                if (file != 'file') {
                    coll.push(file);
                    formData.append('file', file);
                }

            });


            $(".preloader-2").show();
            $.ajax({
                url: loan_app_url + api_endpoint,
                method: "POST",
                data: formData,
                contentType: false,
                cache: false,
                processData: false,
                success: function (data) {
                    $('#kyc2-form').pleaseWait('stop');
                    localStorage.setItem("uploadedCollaterals", JSON.stringify(coll));
                    localStorage.setItem("tempCollateral", JSON.stringify(data));
                    localStorage.setItem('estimatedCollateralValue', estimatedValue);
                    location.href = "/preview-loan-request";
                },
                error: function (error) {
                    $('#kyc2-form').pleaseWait('stop');
                    displayToast('error', 'Error uploading collateral documents', 'Collateral Document error');
                }
            });
        }



    })
    var p = localStorage.getItem('pindex');
    var jj = JSON.parse(localStorage.getItem('loanProducts'))[localStorage.getItem('pindex')];
    console.log(jj)
    console.log((JSON.parse(localStorage.getItem('loanProducts'))[localStorage.getItem('pindex')].loaninterest))

    $('body').on('click', '#submitPaymentProof', function (e) {
        $('.signin-form').pleaseWait();
        let api_endpoint = "/api/Payments";

        let files = uploadedFilesHolder;
        for (let i = 0; i < files.length; i++) {
            formData.append("file", files[i].file);
        }

        let loanRefId = $('#loanRefId').val();
        let amount = $('#amount').val();
        let channel = $('#channel').val();
        let otherdetails = $('#otherdetails').val();


        if (otherdetails == null || otherdetails == '') {
            otherdetails = 'No details available';
        }

        try{
            
        console.log(file);
        formData = new FormData();
        formData.append("file", file);

        formData.append("loanRefId", loanRefId);
        formData.append("amount", amount);
        formData.append("channel", channel);
        formData.append("otherdetails", otherdetails);

        if (amount == null || amount < 1 || amount == '') {
            displayToast('error', 'amount must be greater than 0', "Error");
            $('.signin-form').pleaseWait('stop');
        } else if (files.length < 1) {
            $('.signin-form').pleaseWait('stop');
            displayToast('error', 'kindly upload a proof of payment', "Error");
        } else {

            //$(".preloader-2").show();
            $.ajax({
                url: loan_app_url + api_endpoint,
                method: "POST",
                data: formData,
                contentType: false,
                cache: false,
                processData: false,
                error: function (d) {
                    $('.signin-form').pleaseWait('stop');
                    console.log(d.responseJSON.errors);
                    displayToast('error', d.responseJSON.errors.toString(), "Error");
                },
                success: function (data) {
                    $('.signin-form').pleaseWait('stop');
                    displayToast('success', 'Payment Proof Document was uploaded successfully.', 'Upload successful');
                    hideModal();
                }
            });
        }
        
    }catch{
        displayToast('error', 'Please, kindly attach payment proof document', "Error");
        $('.signin-form').pleaseWait('stop');
    }

    })


    function hideModal() {
        $('#pallywadModal').hide();
        $('.modal-backdrop').hide();
    }

    function file_explorer() {
        document.getElementById("selectfile").click();
        document.getElementById("selectfile").onchange = function () {
            files = document.getElementById("selectfile").files[0];
            showFile(files);
            //formData.append("file", files);
        };
    }

    function showFile(file) {
        let fileType = file.type;
        let validExtensions = ["image/jpeg", "image/jpg", "image/png", "application/pdf"];
        let imgPreview = document.getElementById('imgPreview');
        if (validExtensions.includes(fileType)) {
            let fileReader = new FileReader();
            fileReader.onload = () => {
                if (fileType == 'application/pdf') {
                    console.log(fileReader)
                    let fileURL = fileReader.result;
                    let imgTag = `<img src="/assets/img/card-illustration.png" class="imgTag" alt="">`;
                    if(fileType == "application/pdf")
                    imgTag = `<img src="assets/img/pdf.png" class="imgTag" alt="">`;
                    imgPreview.innerHTML = imgTag;
                    $('#upload-from-gallery').hide();
                    $('#uploadDocumentExtrafields').removeClass('hide');
                } else {
                    let fileURL = fileReader.result;
                    let imgTag = `<img src="${fileURL}" class="imgTag" alt="">`;
                    imgPreview.innerHTML = imgTag;
                    $('#upload-from-gallery').hide();
                    $('#uploadDocumentExtrafields').removeClass('hide');
                }
                var doc = localStorage.getItem('chosenDocumentName');
                if (doc == 'NIN' || doc == 'Voters Card' || doc == 'Passport Photo' || doc == 'Proof of Address' ||
                doc == 'CAC Document' || doc == 'Bank Account Statements' || doc == 'National Identity Card' ) {

                    $('.expirySeg').addClass('hide');
                }

                if (doc == 'Passport Photo' || doc == 'Proof of Address' || doc == 'Bank Account Statements') {

                    $('.expiryDoc').addClass('hide');
                }
            }
            fileReader.readAsDataURL(file);
        } else {
            displayToast("error", "The image to be uploaded must be either .png, .jpg, .jpeg or .pdf format", "Invalid Image File");
        }
    }

    /**
     Kyc page 2 
    */
    $('#uploadDocument').click(function () {
        //var formData = new FormData();
        console.log(formData.file)
        let api_endpoint = "/api/Documents/UploadFile";
        let documentRefId = localStorage.getItem("chosenDocument");
        let documentNo = $('#documentNo').val() ?? 0;
        let expiryDate = $('#expiryDate').val() ?? new Date();
        formData.append("documentRefId", documentRefId);
        formData.append("documentNo", documentNo);
        formData.append("expiryDate", expiryDate);

        var files = document.getElementById("selectfile").files[0];
        formData.append("file", files);

        //$(".preloader-2").show();
        console.log(formData)
        $('.kyc').pleaseWait();
        $.ajax({
            url: loan_app_url + api_endpoint,
            method: "POST",
            data: formData,
            contentType: false,
            cache: false,
            processData: false,
            success: function (data) {
                $('.kyc').pleaseWait('stop');
                location.href = "/kyc-3";
            },
            error: function (error) {
                $('.kyc').pleaseWait('stop');
                displayToast("error", "Unable to upload document", "File Upload Error");
            }
        });
    })

    /**
     Kyc page 3 
    */
    $('#uploadAddress').click(function () {
        console.log("upload address doc clicked");
        $('.kyc').pleaseWait();
        let api_endpoint = "/api/Documents/UploadFile";
        let documentRefId = localStorage.getItem("addressDocId");
        let documentNo = 0;
        let expiryDate = '1900/1/1';
        formData.append("documentRefId", documentRefId);
        formData.append("documentNo", documentNo);
        formData.append("expiryDate", expiryDate);

        var files = document.getElementById("selectfile").files[0];
        formData.append("file", files);

        $(".preloader-2").show();
        $.ajax({
            url: loan_app_url + api_endpoint,
            method: "POST",
            data: formData,
            contentType: false,
            cache: false,
            processData: false,
            success: function (data) {
                $('.kyc').pleaseWait();
                //console.log(data);
                location.href = "/kyc-complete";
            },
            error: function (error) {
                $('.kyc').pleaseWait('stop');
                displayToast("error", "Unable to upload document", "File Upload Error");
            }
        });
    })


});


//submit loan request
$('body').on('click', '#submitLoanRequest', function () {
    console.log("loan request submitted");
    let api_endpoint = "/api/LoanRequest";
    let documentIdRefs = JSON.parse(localStorage.getItem("documentIdRefs"));
    let loancode = localStorage.getItem("loancode");
    let amount = localStorage.getItem("amount");
    let category = localStorage.getItem("category");
    let collateral = localStorage.getItem("selCollateral");
    let preferredRate = localStorage.getItem("preferredRate");
    let preferredTenor = localStorage.getItem("preferredTenor");
    let repaymentPlan = localStorage.getItem('repaymentPlan');
    let estimatedCollateralValue = localStorage.getItem("estimatedCollateralValue");
    let sector = localStorage.getItem("sector");
    let age = localStorage.getItem("age");
    let purpose = localStorage.getItem("purpose");
    let businessname = localStorage.getItem("businessname");
    let tempCollateral = JSON.parse(localStorage.getItem('tempCollateral'));
    console.log(tempCollateral);
    var collArray = [];
    collArray.push(tempCollateral.id.toString())
    let collateralRefId = collArray; //JSON.parse(localStorage.getItem("collateralRefId"));

    let formData = {
        documentIdRefs,
        loancode,
        amount,
        category,
        collateralRefId,
        collateral,
        age,
        purpose,
        businessname,
        preferredRate,
        preferredTenor,
        sector,
        estimatedCollateralValue,
        repaymentPlan
    }

    $('#kyc2-form').pleaseWait();

    $(".preloader-2").show();
    $.ajax({
        url: loan_app_url + api_endpoint,
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify(formData),
        success: function (data) {
            $('#kyc2-form').pleaseWait('stop');
            displayToast("success", "loan request successful", "Loan Request Success");
            //console.log(data);
            localStorage.removeItem("documentIdRefs");
            localStorage.removeItem("loancode");
            localStorage.removeItem("amount");
            localStorage.removeItem("category");
            localStorage.removeItem("collateralRefId");
            localStorage.removeItem("tempCollateral");
            localStorage.removeItem("sector");
            localStorage.removeItem("preferredRate");
            localStorage.removeItem("preferredTenor");
            localStorage.removeItem("businessname");
            localStorage.removeItem("purpose");
            localStorage.removeItem("age");
            localStorage.removeItem("collateral");

            location.href = "/loan-request-complete";
        },
        error: function (e) {
            $('#kyc2-form').pleaseWait('stop');
            displayToast("error", "Unable to process loan request", "Loan Request Error");
        }
    });
})


$('body').on('click', '#uploadPaymentProofFile', function () {
    document.getElementById("selectfile").click();
    document.getElementById("selectfile").onchange = function () {
        file = document.getElementById("selectfile").files[0];

        //check if uploaded file is valid
        let validExtensions = ["image/jpeg", "image/jpg", "image/png", "application/pdf"];
        let fileType = file.type;
        if (validExtensions.includes(fileType)) {
            let fileReader = new FileReader();
            let uploadedFilesPreview = $('#uploadedFilesPreview');
            fileReader.onload = () => {
                let fileURL = fileReader.result;
                let imgTag = `<img src="${fileURL}" class="imgTag2" alt="">`;
                if(fileType == "application/pdf")
                imgTag = `<img src="assets/img/pdf.png" class="imgTag2" alt="">`;
                let output = `
                    ${imgTag}
                `;
                uploadedFilesHolder.push('file', file);
                uploadedFilesPreview.append(`${output}`);
            }
            fileReader.readAsDataURL(file);

        }
        else {
            displayToast("error", "The image to be uploaded must be either .png, .jpg, .jpeg or .pdf format", "Invalid Image File");
        }
    }
})


var myModal = new bootstrap.Modal(document.getElementById('pallywadModal'));

//upload proof of payment
$('body').on('click','.uploadPaymentProof', function(){
    let content = `
        
    <div class="px-4 py-2 signin-form">
        <p>Click on button below to receive payment details in your email.</p>
        <div class="col-md-12 black-text mb-2">
            <div class="tab-pane fade show active" id="bankTransfer" role="tabpanel" aria-labelledby="nav-bankTransfer-tab" tabindex="0">
                        <div class="px-2 py-3">
                        <a href="javascript:;" id="requestLoanBankAccount" class="btn default-button">Request Bank Account</a> 
                        </div>

                        
                    </div>
        </div>
    </div>
`;
$('.modal-body').html(content);
$('.modal-title').html('Make Loan Repayment');
//var myModal = new bootstrap.Modal(document.getElementById('pallywadModal'))
myModal.show({
    keyboard: false,
    backdrop: 'static'
});
});
$('body').on('click', '.uploadPaymentProofss', function () {
    let providedAmount = 0;
    var repaymentamount = $('#repayment-amount').val();
    if (repaymentamount > 0) {
        providedAmount = repaymentamount;
    }

    let processedLoans = JSON.parse(localStorage.getItem('processedLoans'));
    if (processedLoans == null) {
        toastr.warning('No Loan Currently loaning')
    } else {
        let option = '';
        for (let i = 0; i < processedLoans.length; i++) {
            option += `<option value="${processedLoans[i].loanId}">${processedLoans[i].category}
         &#8358; ${number_format(processedLoans[i].amount)}</option>`;
        }

        let content = `
        
        <div class="px-4 py-2 signin-form">
            <div class="col-md-12 black-text mb-2">
                <b>Select Repayment Loan</b>
                <select id="loanRefId" class="form-select">
                    ${option}
                </select>
            </div>

            <div class="col-md-12 mb-3 black-text">
                
                <div class="row">
                    <div class="col-md-12">
                        <b>Amount Paid (&#8358;)</b>
                        <input type="number" 
                        class="form-control" 
                        value="${providedAmount}"
                        id="amount" 
                        placeholder="Amount you paid eg 30000">
                    </div>
                    <div class="col-md-6 hide">

                        <b>Method of payment</b>
                        <select id="channel" class="form-control">
                            <option>Bank Payment</option>
                            <option>Bank Transfer</option>
                            <option>Online Payment</option>
                        </select>

                        
                    </div>
                </div>
                
                
            </div>

            <div class="col-md-12 mb-3 black-text">
                <b>Other Details (if any)</b>
                <input type="text" 
                    class="form-control" 
                    id="otherdetails" 
                    placeholder="Other details">
            </div>

            <div class="form-group mt-3">
                <div id="uploadedFilesPreview" class="table table-striped table-hover"> 
                </div>

                <a href="javascript:;" 
                    id="uploadPaymentProofFile"
                    class="continue-button-5 mb-3"><i class="fa fa-upload"></i> 
                    Upload Proof of Payment
                </a>
                
            </div>

            <div id="uploadDocumentExtrafields" class="form-group mt-2" >
                <input type="file" class="d-none" id="selectfile" />
                <a href="javascript:;" id="submitPaymentProof" 
                class="default-button block text-center" >Submit Form</a>
                
            </div>

        </div>
    `;

        $('.modal-body').html(content);
        $('.modal-title').html('Upload Proof Of Payment');
        myModal.show({
            keyboard: false,
            backdrop: 'static'
        });
    }
});

$('body').on('click', '.uploadedDocument', function (e) {
    window.location.href = 'upload-documents';
});

//pay loan
$('body').on('click', '.makePayment', function () {

    companyDetails = localStorage.getItem('companyDetails');
    companyDetails = JSON.parse(companyDetails);
    let content = `
        
        <div class="px-4 py-2 signin-form">
            <p>You can make your loan repayment by using any of the channels below:</p>
            <div class="col-md-12 black-text mb-2">
                <div class="nav-area">
                    <nav>
                        <div class="nav nav-pills" id="nav-tab" role="tablist">
                            <button class="nav-link active" id="nav-bankTransfer-tab" data-bs-toggle="tab" data-bs-target="#bankTransfer" type="button" role="tab" aria-controls="bankTransfer" aria-selected="true">Bank Transfer</button>
                            <button class="nav-link" id="nav-onlinePayment-tab" data-bs-toggle="tab" data-bs-target="#onlinePayment" type="button" role="tab" aria-controls="onlinePayment" aria-selected="false">ATM Card/Online Payment</button>
                        </div>
                    </nav>
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="bankTransfer" role="tabpanel" aria-labelledby="nav-bankTransfer-tab" tabindex="0">
                            <div class="px-2 py-3">Make your payment using the details below and after payment, 
                            click the  
                            <a href="javascript:;" class="uploadPaymentProof">Upload Payment Proof</a> 
                            button to upload proof of your payment.
                            </div>

                            <div class="px-2 py-3 payment-details-bank">
                                <b>Bank: </b> ${companyDetails.bank}<br> 
                                <b>Account Name:</b> ${companyDetails.name}<br>
                                <b>Acount Number:</b> ${companyDetails.accountno}
                            </div>
                        </div>
                        <div class="tab-pane fade" id="onlinePayment" role="tabpanel" aria-labelledby="nav-onlinePayment-tab" tabindex="0">
                            <div class="px-2 py-3">
                                Enter the amount that you would link to repay below and click the Repay Online Button
                                <div class="mt-2">
                                    <input type="text" class="form-control" placeholder="Enter repayment amount" />
                                    <a href="javascript:;" class="default-button-green mt-3">Repay Online</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    $('.modal-body').html(content);
    $('.modal-title').html('Make Loan Repayment');
    //var myModal = new bootstrap.Modal(document.getElementById('pallywadModal'))
    myModal.show({
        keyboard: false,
        backdrop: 'static'
    });
});

function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}