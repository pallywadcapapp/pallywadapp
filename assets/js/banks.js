
$(window).on('load', function () {
    if ($('#defaultPayment').length > 0) {
        //loadPayments();
        //loadPaymentsHistory()
        loadBanksHistory()
    }

    $('#saveBankDetails').click(function(e){
        var bankname = $('#bankname').val();
        var bankaccno = $('#bankaccno').val();
        var accountname = $('#accountname').val();
        if(bankaccno != '' && bankname !== null){
            $('#updateBankSettingsForm').pleaseWait();
            var data ={
                "name": bankname,
                "accountno": bankaccno,
                "accountname": accountname,
                "isDefault": false,
                "memberId": "string"
              }
            let api_endpoint = "/api/UserBank";
            $.ajax({
                type: 'post',
                url: loan_app_url + api_endpoint,
                data: JSON.stringify(data),
                "content-Type": "application/json",
                headers: { 'Content-Type': 'application/json' },
                success: function (d) {
                    $('#updateBankSettingsForm').pleaseWait('stop');
                    loadBanksHistory();
                },
                error: function(d){
                    $('#updateBankSettingsForm').pleaseWait('stop');
                }
            })
        }
    })
    });
    

function loadBanksHistory() {
    let api_endpoint = "/api/UserBank";
    $.ajax({
        type: 'get',
        url: loan_app_url + api_endpoint,
        headers: { 'Content-Type': 'application/json' },
        error: function (d) {
            displayToast('error', d.responseJSON.message, d.responseJSON.status)
        },
        success: function (d) {
            console.log(d)
            let lists = d;
            let content = '';
            if(d.length < 1){
                $('#payBankItems').html('<h5>No list of bank payment record found</h5>');
            }else{
            for (let i = 0; i < lists.length; i++) {
                payment_status = (lists[i].isDefault == true)
                    ? `<span class="badge text-bg-success">Default</span>`
                    : `<span class="badge text-bg-warning">Not Default</span>`;
                content += `
                <div class="row">
                    <div class="col-md-5 repayment-item2">
                        <div class="repayment-price"> ${lists[i].name}</div>
                        <small>${lists[i].accountname}</small><br/>
                        <small class="grey-text">${lists[i].accountno}</small><br>
                        
                    </div>
                    <div class="col-md-3 repayment-item2">
                        <small class="black-text"><b>Status:</b>
                        <br> ${payment_status} </small><br />
                        <span class="badge text-bg-success" style="cursor:pointer;" onclick="makedefault(${lists[i].id})">Make Default</span>
                    </div>
                    <div class="col-md-3 repayment-item2">
                        <small>${formatDate3(lists[i].created_date).time}</small><br>
                        <small>${formatDate3(lists[i].created_date).date2}</small>
                        
                    </div>
                    <div class="col-md-1 repayment-item2">
                        <i class="fa fa-trash"  onclick="deleteItem(${lists[i].id})"
                         style="color:#eb3d5d; background-color:#fff2f5; border-radius: 60px; box-shadow: 0 0 2px #888;padding: 0.5em 0.6em;"></i>
                    </div>
                </div>
                `;

            }


            $('#payBankItems').html(content);
        }

        },
        error: function(d){
            $('#payBankItems').html('<h5>No list of bank payment record found</h5>');
        }
    })
}

function makedefault(id){
    let api_endpoint = "/api/UserBank/makedefault?id=" + id;
    $('#payBankItems').pleaseWait();
            $.ajax({
                type: 'put',
                url: loan_app_url + api_endpoint,
                //data: JSON.stringify(data),
                "content-Type": "application/json",
                headers: { 'Content-Type': 'application/json' },
                success: function (d) {
                    loadBanksHistory();
                    $('#payBankItems').pleaseWait('stop');
                    displayToast('success', 'default bank set successfully', 'Bank Default');
                },
                error: function(d){
                    $('#payBankItems').pleaseWait('stop');
                    displayToast('error', 'error setting bank default', 'Bank Default');
                }
            })
}
function deleteItem(id){
    let api_endpoint = "/api/UserBank/deletebank?id=" + id;
    $('#payBankItems').pleaseWait();
            $.ajax({
                type: 'del',
                url: loan_app_url + api_endpoint,
                //data: JSON.stringify(data),
                "content-Type": "application/json",
                headers: { 'Content-Type': 'application/json' },
                success: function (d) {
                    loadBanksHistory();
                    $('#payBankItems').pleaseWait('stop');
                    displayToast('success', 'bank account deleted successfully', 'Bank Account Deletion');
                },
                error: function(d){
                    $('#payBankItems').pleaseWait('stop');
                    displayToast('error', 'error deleting bank account', 'Bank Account Deletion');
                }
            })
}
