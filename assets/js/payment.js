$('body').on('click', '.makePayments', function () {

    companyDetails = localStorage.getItem('companyDetails');
    companyDetails = JSON.parse(companyDetails);
    let content = `
        
        <div class="px-4 py-2 signin-form">
            <p>Kindly click the button below to request for payment details</p>
            <div class="col-md-12 black-text mb-2">
                <div class="tab-pane fade show active" id="bankTransfer" role="tabpanel" aria-labelledby="nav-bankTransfer-tab" tabindex="0">
                            <div class="px-2 py-3">
                            <a href="javascript:;" id="requestBankAccount" class="btn default-button">Request Bank Account</a> 
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

$('body').on('click', '#requestBankAccount', function () {
    $('.imodal').pleaseWait();
    getBankAccount();
});

function getBankAccount() {
    let api_endpoint = "/api/Payments/CompanyAccount";
    $.ajax({
        type: 'get',
        url: loan_app_url + api_endpoint,
        headers: { 'Content-Type': 'application/json' },
        error: function (d) {
            $('.imodal').pleaseWait('stop');
            displayToast('error','error sending bank account details', 'Bank Account Details')
        },
        success: function (d) {
            $('.imodal').pleaseWait('stop');
            displayToast('success','A copy of payment bank account have been sent to your email', 'Bank Account Details');
            uploadPaymentProof();
        }
    })
  }

  function uploadPaymentProof(){
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
                        <div class="col-md-6">
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
                        Upload Payment Proof Screenshot
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
  }