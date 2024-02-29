
$(window).on('load', function () {
    if ($('#defaultPayment').length > 0) {
        //loadPayments();
        //loadPaymentsHistory()
        loadBanksHistory()
    }

    $('#saveBankDetails').click(function(e){
        var bankname = $('#bankname').val();
        var bankaccno = $('#bankaccno').val();
        if(bankaccno != '' && bankname !== null){
            $('#updateBankSettingsForm').pleaseWait();
            var data ={
                "name": bankname,
                "accountno": bankaccno,
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
                        <small class="grey-text">${lists[i].accountno}</small><br>
                        
                    </div>
                    <div class="col-md-3 repayment-item2">
                        <small class="black-text"><b>Status:</b>
                        <br> ${payment_status} </small>
                    </div>
                    <div class="col-md-4 repayment-item2">
                        <small>${formatDate3(lists[i].created_date).time}</small><br>
                        <small>${formatDate3(lists[i].created_date).date2}</small>
                        
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