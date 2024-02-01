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
            if(d.message == "upload all required documents profile"){
                //redirect to document upload page
                let message = `You need to update your profile in order to add a loan. 
                <a href="upload-documents">Click here</a> to update now.`;
                $('#stepsNotification').html(message).show();
            }else if(d.message != true){
                let message = `You need to update your profile in order to add a loan. 
                <a href="update-profile">Click here</a> to update now.`;
                $('#stepsNotification').html(message).show();
            }else{
                location.href = "loan-request";
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
            let api_endpoint = "/api/Documents/all";
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
                    let addressDocName = "";
                    let addressDocId = "";
                    for (let i = 0; i < lists.length; i++) {
                        if(lists[i].type=="Identity"){
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
                        if(lists[i].type=="Address"){
                            localStorage.setItem('addressDocName',lists[i].name);
                            localStorage.setItem('addressDocId',lists[i].id);
                        }
                       
                    }
                    $('#documentsList').html(documents);
                    
                }
            })
        }
    }

    if($("#kyc2-form").length > 0) {
        let document = localStorage.getItem('chosenDocumentName');  
        $('#selected-document').html(document);
    }

    if($("#kyc3-form").length > 0) {
        let document = localStorage.getItem('addressDocName');  
        $('#selected-document').html(document);
    }

    
    // Prefill profile 
    if($("#updateProfile").length > 0) {
        let email = localStorage.getItem("email");
        preloadProfileDetails(email);
        function preloadProfileDetails(email){
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

    if($('#loanType').length > 0) {
        let api_endpoint = "/api/Loan";
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
                        <option value="${lists[i].loancode}" 
                            loanCategory="${lists[i].category}"
                            loanDescription="${lists[i].loandesc}">
                            ${lists[i].category}
                        </option>
                    `;
                }
                $('#loanTypeDescription').html(`<b>Loan Type Description</b><br><br>${lists[0].loandesc}`);
                $('#category').val(lists[0].category);
                $('#loanType').html(documents);
            }
        })

        uploadedDocuments();
    }

    if($('#collateralType').length > 0) {
        loadCollateralTypes();
    }

    fetchLoanRequests();
        
    
    //load datepicker
    $('.mydatepicker, #dob').datepicker();

    

})

function loadCollateralTypes(){
    let api_endpoint = "/api/Collateral/all";
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
                    <option value="${lists[i].name}">
                        ${lists[i].name}
                    </option>
                `;
            }
            $('#collateralType').html(documents);
            
        }
    })
}


$("body").on('change', '.singleCheck', function() {
    $(".singleCheck").prop('checked', false);
    $(this).prop('checked', true);
});

$("body").on('change', '#loanType', function(){
    let description = $("#loanType :selected").attr("loanDescription");
    let category = $("#loanType :selected").attr("loanCategory");
    console.log(description, category);
    let descriptionBox = $('#loanTypeDescription');
    let categoryBox = $('#category');
    descriptionBox.html(`<b>Loan Type Description:</b><br><br> ${description}`);
    categoryBox.val(category);
})

/***
** PRELOAD FUNCTIONS
***/

function uploadedDocuments() {
    let api_endpoint = "/api/Documents";
    $.ajax({
        type:'get',
        url: loan_app_url+api_endpoint,
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
                        <input class="form-check-input" 
                            name="verificationDocument" required 
                            type="checkbox" 
                            valueName="${lists[i].name}"
                            value="${lists[i].id}">
                        <label class="form-check-label" for="flexCheckDefault">
                            <b>${lists[i].name}</b><br>
                            ${lists[i].url}
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
        type:'get',
        url: loan_app_url+api_endpoint,
        headers: { 'Content-Type': 'application/json' },
        error: function(d){
            displayToast('error',d.responseJSON.message, d.responseJSON.status)
        },
        success: function(d){
           
            let lists = d;
            let documents = [];
            for (let i = 0; i < lists.length; i++) {
                documents.push(lists[i].colleteralId); 
            }
            localStorage.setItem('collateralRefId', JSON.stringify(documents));
            
        }
    })
}

function fetchLoanRequests() {
    let api_endpoint = "/api/LoanRequest";
    $.ajax({
        type:'get',
        url: loan_app_url+api_endpoint,
        headers: { 'Content-Type': 'application/json' },
        error: function(d){
            displayToast('error',d.responseJSON.message, d.responseJSON.status)
        },
        success: function(d){
            let lists = d;
            let display = "";
            for (let i = 0; i < lists.length; i++) {
                let loanTypeStyle = (lists[i].status =="Pending") 
                    ? "loan-status-pending"
                    : (lists[i].status =="Declined" ? "loan-status-declined" 
                    : (lists[i].status =="Awaiting Approval" ? "loan-status-awaiting" 
                    : "loan-status-running"));
                display += `
                <div class="top-line py-2">
                        <div class="row">
                            <div class="col-md-2">
                                <span class="${loanTypeStyle}">${lists[i].status}</span>
                            </div>
                            <div class="col-md-7 loan-display">
                                <h4>&#8358;${number_format(lists[i].amount,2)}</h4>
                                <p class="grey-text">${lists[i].category}</p>
                            </div>
                            <div class="col-md-3 loan-display">
                                <p class="grey-text">
                                02:45 GMT<br>
                                Fri, Dec 11, 2024
                                </p>
                            </div>
                        </div>
                    </div>
                `;
                
            }
            $('#allLoanRequests').html(display);
            
        }
    })
}

function number_format (number, decimals, dec_point, thousands_sep) {
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

//loan request page 1
$('body').on('click', '#continue-loan-button-1', function(){
    console.log("happening here");
    if($('#uploadedDocumentList input:checked').length < 1){
        displayToast('error','You must select at least one document', 'Select a Document')
    }
    else if(!$('#loanAmountRequested').val()){
        displayToast('error','You must enter loan amount', 'Enter loan amount')
    }
    else {
        
        let loancode = $('#loanType :selected').val();
        let amount = $('#loanAmountRequested').val();
        let category = $('#category').val();
        let documentIdRefs = []; 
        $("input:checkbox[name=verificationDocument]:checked").each(function() { 
            documentIdRefs.push($(this).val()); 
        });  
    
        localStorage.setItem("loancode", loancode);
        localStorage.setItem("amount", amount);
        localStorage.setItem("category", category);
        localStorage.setItem("documentIdRefs", JSON.stringify(documentIdRefs));
        window.location.replace("loan-request2");
             
        
        
    }
})

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
        let name = $('#kyc1-form-step input:checked').attr('valueName');
        localStorage.setItem('chosenDocument', doc);
        localStorage.setItem('chosenDocumentName', name);
        window.location.replace("kyc-2");
    }
})


/*
document upload
*/ 
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
        var files = e.originalEvent.dataTransfer.files[0];
        console.log(files);
        showFile(files);
        formData.append("file", files);
    });

    $('#upload-from-gallery').click(function(e){
        file_explorer();
    })

    $('#upload-collateral-document').click(function(e){
        if(!$('#estimatedValue').val()){
            displayToast('error', 'Please enter collateral estimated value', 'Enter Estimate Value');
        }
        else {
            document.getElementById("selectfile").click();
            document.getElementById("selectfile").onchange = function() {
            files = document.getElementById("selectfile").files[0];
                showFile(files);
                formData = new FormData();
                formData.append("file", files);

                let api_endpoint = "/api/Collateral/UploadFile";
                let estimatedValue = $('#estimatedValue').val() ?? "None";
                let collateralRefId = $('#collateralType :selected').val();
                let otherdetails = $('#otherdetails').val() ?? 0;
                formData.append("estimatedValue", estimatedValue);
                formData.append("collateralRefId", collateralRefId);
                formData.append("otherdetails", otherdetails);

                $(".preloader-2").show();
                $.ajax({
                    url: loan_app_url+api_endpoint,
                    method: "POST",
                    data: formData,
                    contentType: false,
                    cache: false,
                    processData: false,
                    success: function(data) {
                        displayToast('success', 'Document was uploaded successfully', 'File upload successful');
                        fetchUploadedCollaterals();
                        $('#upload-collateral-document').hide();
                    }
                });
            }
            
        }
        
    })

    function file_explorer() {
        document.getElementById("selectfile").click();
        document.getElementById("selectfile").onchange = function() {
        files = document.getElementById("selectfile").files[0];
        showFile(files);
        formData.append("file", files);
      };
    }

    function showFile(file){
        let fileType = file.type; 
        let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; 
        let imgPreview = document.getElementById('imgPreview');
            if(validExtensions.includes(fileType)){ 
                let fileReader = new FileReader();
                fileReader.onload = ()=>{
                let fileURL = fileReader.result; 
                let imgTag = `<img src="${fileURL}" class="imgTag" alt="">`; 
                imgPreview.innerHTML = imgTag; 
                $('#upload-from-gallery').hide();
                $('#uploadDocumentExtrafields').removeClass('hide');
            }
            fileReader.readAsDataURL(file);
        }else {
          displayToast("error","The image to be uploaded must be either .png, .jpg or .jpeg format", "Invalid Image File");
        }
    }
    
    /**
     Kyc page 2 
    */ 
    $('#uploadDocument').click(function(){
        let api_endpoint = "/api/Documents/UploadFile";
        let documentRefId = localStorage.getItem("chosenDocument");
        let documentNo = $('#documentNo').val() ?? 0;
        let expiryDate = $('#expiryDate').val() ?? 0;
        formData.append("documentRefId", documentRefId);
        formData.append("documentNo", documentNo);
        formData.append("expiryDate", expiryDate);

        $(".preloader-2").show();
        $.ajax({
            url: loan_app_url+api_endpoint,
            method: "POST",
            data: formData,
            contentType: false,
            cache: false,
            processData: false,
            success: function(data) {
                location.href = "/kyc-3";
            }
        });
    })

    /**
     Kyc page 3 
    */ 
     $('#uploadAddress').click(function(){
        console.log("upload address doc clicked");
        let api_endpoint = "/api/Documents/UploadFile";
        let documentRefId = localStorage.getItem("addressDocId");
        let documentNo = 0;
        let expiryDate = '1900/1/1';
        formData.append("documentRefId", documentRefId);
        formData.append("documentNo", documentNo);
        formData.append("expiryDate", expiryDate);

        $(".preloader-2").show();
        $.ajax({
            url: loan_app_url+api_endpoint,
            method: "POST",
            data: formData,
            contentType: false,
            cache: false,
            processData: false,
            success: function(data) {
                //console.log(data);
                location.href = "/kyc-complete";
            }
        });
    })


});


//submit loan request
$('body').on('click','#submitLoanRequest',function(){
    console.log("loan request submitted");
    let api_endpoint = "/api/LoanRequest";
    let documentIdRefs = JSON.parse(localStorage.getItem("documentIdRefs"));
    let loancode = localStorage.getItem("loancode");
    let amount = localStorage.getItem("amount");
    let category = localStorage.getItem("category");
    let collateralRefId = JSON.parse(localStorage.getItem("collateralRefId"));

    let formData = {
        documentIdRefs,
        loancode,
        amount,
        category,
        collateralRefId
    }

 

    $(".preloader-2").show();
    $.ajax({
        url: loan_app_url+api_endpoint,
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify(formData),
        success: function(data) {
            //console.log(data);
            localStorage.removeItem("documentIdRefs");
            localStorage.removeItem("loancode");
            localStorage.removeItem("amount");
            localStorage.removeItem("category");
            localStorage.removeItem("collateralRefId");
            location.href = "/loan-request-complete";
        }
    });
})