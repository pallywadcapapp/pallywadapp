
var lvClickId = 0;
$('body').on('click', '.loanView', function () {

    
    companyDetails = localStorage.getItem('companyDetails');
    companyDetails = JSON.parse(companyDetails);
    let content = loanRequestView(userLoanRequest[lvClickId]);
    console.log(userLoanRequest[lvClickId])
    $('.modal-body').html(content);
    $('.modal-title').html('Loan Details');
    //var myModal = new bootstrap.Modal(document.getElementById('pallywadModal'))
    myModal.show({
        keyboard: false,
        backdrop: 'static'
    });
});

function loanRequestView(loanRequest){
    let content = '';
    if(loanRequest.status == 'Pending'){
        content = `
        
        <div class="px-4 py-2">
            
            <div class="col-md-12 black-text mb-2">
                 <div class="px-2 py-3 payment-details-bank">
                                <b>Request ID:</b> ${loanRequest.loanId}<br>
                                <b>Loan Type: </b> ${loanRequest.category}<br> 
                                <b>Amount (&#8358;): </b> ${moneyFormat(loanRequest.amount)}<br> 
                                <b>Interest Rate (%): </b> ${loanRequest.loaninterest} - ${parseInt(loanRequest.loaninterest) + 5}<br> 
                                <b>Tenor (Months):</b> ${loanRequest.duration}<br>
                                <b>Loan Status:</b> ${loanRequest.status}<br>
                                <b>Request Date:</b> ${new Date(loanRequest.requestDate).toLocaleDateString()}
                            </div>
            </div>
        </div>
        `
    }else if(loanRequest.status == 'Pending'){
        
        content = `
        
        <div class="px-4 py-2">
            
            <div class="col-md-12 black-text mb-2">
                 <div class="px-2 py-3 payment-details-bank">
                                <b>Request ID:</b> ${loanRequest.loanId}<br>
                                <b>Loan Type: </b> ${loanRequest.category}<br> 
                                <b>Amount (&#8358;): </b> ${moneyFormat(loanRequest.amount)}<br> 
                                <b>Interest Rate (%): </b> ${loanRequest.loaninterest.toFixed(2)}<br> 
                                <b>Tenor (Months):</b> ${loanRequest.duration}<br>
                                <b>Loan Status:</b> ${loanRequest.status}<br>
                                <b>Request Date:</b> ${new Date(loanRequest.requestDate).toLocaleDateString()}<br>
                                <b>Approved Date:</b> ${dateFormatter(loanRequest.approvalDate)}
                            </div>
            </div>
            <div><a class="btn continue-button-2"> View More </a></div>
        </div>
        `
    }
    else{
        content = `
        
        <div class="px-4 py-2">
            
            <div class="col-md-12 black-text mb-2">
                 <div class="px-2 py-3 payment-details-bank">
                                <b>Request ID:</b> ${loanRequest.loanId}<br>
                                <b>Loan Type: </b> ${loanRequest.category}<br> 
                                <b>Amount (&#8358;): </b> ${moneyFormat(loanRequest.amount)}<br> 
                                <b>Interest Rate (%): </b> ${loanRequest.loaninterest.toFixed(2)}<br> 
                                <b>Tenor (Months):</b> ${loanRequest.duration}<br>
                                <b>Loan Status:</b> ${loanRequest.status}<br>
                                <b>Request Date:</b> ${new Date(loanRequest.requestDate).toLocaleDateString()}<br>
                                <b>Approved Date:</b> ${dateFormatter(loanRequest.approvalDate)}
                            </div>
            </div>
        </div>
        `
    }

return content;
}

function lvClick(id){
    lvClickId = id;
    
}