var _businessInfo = '';
$(document).ready(function() {
   
    if (pathname == '/business-information' || pathname == '/update-business') {
        var email = localStorage.getItem('email');
        preloadBusinessDetails(email);
    }

    
    $('body').on('click', '#update-business-info', function (e) {
        console.log(_businessInfo);
        if ($("#updateBusinessForm").valid()) {
            $('#updateBusinessForm').pleaseWait();
            e.preventDefault();
            let address = $('[name=address]').val();
            let type = $('[name=type]').val();
            let name = $('[name=name]').val();
            let cacno = $('[name=cacno]').val();
            let landmark = $('[name=landmark]').val();
    
            let email = localStorage.getItem("email");
    
            let api_endpoint = "/api/UserBusiness";
            let memberId = localStorage.getItem('email')
    
    
            //check if login credentials are valid
            let data = {
                type,
                address,
                name,
                cacno,
                landmark,
                memberId
            }
    
           if(_businessInfo == '' || _businessInfo == null){
            saveBusiness(data, api_endpoint);
           }else{
            updateBusiness(data, api_endpoint);
           }
    
    
        } else {
            $('#errorNotification').html('input field necessary');
            $('#errorNotification').focus();
        }
    })
});

function preloadBusinessDetails(email) {
    let api_endpoint = "/api/UserBusiness";
    let data = {
        username: email
    }
    $.ajax({
        type: 'get',
        url: loan_app_url + api_endpoint,
        headers: { 'Content-Type': 'application/json' },
        //data: data,
        error: function (d) {
            if(d.responseText == ""){
                displayToast('error', "Unable to Update Business Information Details", 'error')
            }else{
                displayToast('error', d.responseText, 'error')
            }
        },
        success: function (d) {
            _businessInfo = d;
            $('[name="name"]').val(d.name);
            $('[name="type"]').val(d.type);
            $('[name="address"]').val(d.address);
            $('[name="landmark"]').val(d.landmark);
            $('[name="cacno"]').val(d.cacno);
            
            /*$('[name="sex"] option:contains("' + d.sex + '")').prop('selected', true);
            $('[name="employmentStatus"] option:contains("' + d.employmentStatus + '")').prop('selected', true);*/
            $('.nameOutput').html(d.name);
            $('.typeOutput').html(d.type);
            $('.businessAddressOutput').html(d.address);
            $('.landmarkOutput').html(d.landmark);
            $('.cacOutput').html(d.cacno);
        }
    })
}

function saveBusiness(data, api_endpoint){
    $.ajax({
        statusCode: {
            500: function() {
            alert("error");
             }
          },
        type: 'post',
        url: loan_app_url + api_endpoint,
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify(data),
        error: function (d) {
            $('#updateBusinessForm').pleaseWait('stop');
            console.log(d)
            if(d.responseText == ""){
                displayToast('error', "Unable to Update Business Information Details", 'error')
            }else{
                displayToast('error', d.responseText, 'error')
            }
        },
        success: function (d) {
            $('#updateBusinessForm').pleaseWait('stop');
            displayToast('success', "Your profile was updated successfully", "Profile update successful")
            
        }
    })
}

function updateBusiness(data, api_endpoint){
    $.ajax({
        type: 'put',
        url: loan_app_url + api_endpoint,
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify(data),
        error: function (d) {
            $('#updateBusinessForm').pleaseWait('stop');
            if(d.responseText == ""){
                displayToast('error', "Unable to Update Business Information Details", 'error')
            }else{
                displayToast('error', d.responseText, 'error')
            }
        },
        success: function (d) {
            

            displayToast('success', "Your profile was updated successfully", "Profile update successful")
            
        }
    })
}