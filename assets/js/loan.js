
var lvClickId = 0;
$('body').on('click', '.loanView', function () {

    
    companyDetails = localStorage.getItem('companyDetails');
    companyDetails = JSON.parse(companyDetails);
    let content = loanRequestView(userLoanRequest[lvClickId]);
    console.log(userLoanRequest[lvClickId])
    $('.modal-body').html(content);
    $('.modal-title').html('Loan Details');
    //var myModal = new bootstrap.Modal(document.getElementById('pallywadModal'))
    if(userLoanRequest[lvClickId].status == 'Declined' || userLoanRequest[lvClickId].status == 'Approved'|| userLoanRequest[lvClickId].status == 'Pending')
    myModal.show({
        keyboard: false,
        backdrop: 'static'
    });
});

function loanRequestView(loanRequest){
    let records = formatDate(loanRequest);
                timeOutput = records.time;
                dayOutput = records.date;
    let loanTypeStyle = (loanRequest.status == "Pending")
    ? "loan-status-pending"
    : (loanRequest.status == "Declined" ? "loan-status-declined"
        : (loanRequest.status == "Awaiting Approval" ? "loan-status-awaiting"
            : (loanRequest.status == "Approved" ? "loan-status-approved"
                : "loan-status-running")));
    let content = '';
    if(loanRequest.status == 'Pending'){
        console.log(loanRequest)
        content = `        
        <div class="px-4 py-2">
            <div class="row"">
                            <div class="col-md-5">
                                <span class="${loanTypeStyle}">${loanRequest.status}</span>
                            </div>
                            <div class="col-md-7 loan-display">
                                <h4>&#8358;${number_format(loanRequest.amount)}</h4>
                                <p class="grey-text">Booast working capital</p>
                            </div>
                            <div class="col-md-12">
                                <span><b>Request Date and Time</b> </span>
                                <p class="grey-text">
                                ${timeOutput} - 
                                ${dayOutput}
                                </p>
                            </div>
                            <div class="col-md-12">
                                <span><b>Loan Type:</b></span><span style="float:rigt">${loanRequest.category}</span>
                            </span>
                            <div class="col-md-12">
                                <span>Interest Rate 
                                    <b>${ parseInt(loanRequest.loaninterest) }% - 
                                    ${ parseInt(loanRequest.loaninterest) + 5}% </b>
                                </span>
                                <span style="float:right;">
                                    (you will get your exact rate on loan approval. Rate is dynamic)
                                </span>
                                
                            </div>
                            <br />
                            <div class="col-md-12" style="border-width: medium;">
                                <span> Amount to pay monthly as interest</span>
                                <span style="float:right;">
                                    <b>&#8358;${number_format(parseFloat(loanRequest.amount) * parseInt(loanRequest.loaninterest) / 100)} - 
                                    &#8358;${number_format(parseFloat(loanRequest.amount) * (parseInt(loanRequest.loaninterest) + 5) / 100)} </b>
                                    </span>
                                    
                                
                            </div>
                            <div>
                                
                            </div>
                        </div>
            
            <div class="col-md-12 black-text mb-2">
               
            </div>
        </div>`
    }else if(loanRequest.status == 'Declined'){
        content = `
        
        <div class="px-4 py-2">
        <div class="row"">
                            <div class="col-md-5">
                                <span class="${loanTypeStyle}">${loanRequest.status}</span>
                            </div>
                            <div class="col-md-7 loan-display">
                                <h4>&#8358;${number_format(loanRequest.amount)}</h4>
                                <p class="grey-text">Booast working capital</p>
                            </div>
                            <div class="col-md-12">
                                <span><b>Request Date and Time</b> </span>
                                <p class="grey-text">
                                ${timeOutput} - 
                                ${dayOutput}
                                </p>
                            </div>
                            <div class="col-md-12">
                                <span>Reason for decline</span>
                                <div class="grey-text form-control" style="border-width: medium; height:100px;">
                                <span> ${loanRequest.reason} </span>
                                </div>
                                <br />
                                <span class="loan-status-running">${loanRequest.category}</span>
                                <br />
                                <p class="grey-text">
                                    <span>Collateral: <b>${loanRequest.collateralId}</b></span>
                                    <span style="float:right">Loan duration: <b>${loanRequest.duration} months</b></span>
                                </p>
                            </div>
                        </div>
            
            <div class="col-md-12 black-text mb-2">
               
            </div>
        </div>
        `
    } else if(loanRequest.status == 'Processed'){
        localStorage.setItem('currLoan', loanRequest.loanId);
        window.location.href = 'curr-loan'
    }else if(loanRequest.status == 'Approved'){
        
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
        <div class="px-2 py-3 payment-details-bank">
                 
        <div class="px-4 py-2">
            
            <div class="col-md-12 black-text mb-2">
            <div class="px-4 py-2">
            <div class="row"">
                                <div class="col-md-5">
                                    <span class="${loanTypeStyle}">${loanRequest.status}</span>
                                </div>
                                <div class="col-md-7 loan-display">
                                    <h4>&#8358;${number_format(loanRequest.amount)}</h4>
                                    <p class="grey-text">Booast working capital</p>
                                </div>
                                <div class="col-md-12">
                                    <span><b>Request Date and Time</b> </span>
                                    <p class="grey-text">
                                    ${timeOutput} - 
                                    ${dayOutput}
                                    </p>
                                </div>
                                <div class="col-md-12">
                                    <span>Reason for decline</span>
                                    <div class="grey-text form-control" style="border-width: medium; height:100px;"
                                    </div>
                                    <br />
                                    <span class="loan-status-running">${loanRequest.category}</span>
                                    <br />
                                    <p class="grey-text">
                                        <span>Collateral: <b>${loanRequest.collateralId}</b></span>
                                        <span style="float:right">Loan duration: <b>${loanRequest.duration} months</b></span>
                                    </p>
                                </div>
                            </div>
                
                <div class="col-md-12 black-text mb-2">
                   
                </div>
            </div>
        `
    }

return content;
}

function lvClick(id){
    lvClickId = id;
    
}