function fetchCurrProcessedLoanRequests(loanId) {
    let api_endpoint = "/api/LoanRepayment/byloanId?loanId="+ loanId;
    $.ajax({
        type: 'get',
        url: loan_app_url + api_endpoint,
        headers: { 'Content-Type': 'application/json' },
        error: function (d) {
            displayToast('error', d.responseJSON.message, d.responseJSON.status)
        },
        success: function (data) {

            setCurrentLoan(data)


        }
    })
}

function setCurrentLoan(data){
        console.log(data);
        let lists = data;
        if(data.length> 0){
        let amount = lists[0].loanamount;
        let repaymentStartDate = formatDate3(lists[0].repaymentDate).date2;
        let interestDisplay = lists[0].interestRate;
        let interestamt = lists[0].interestamt;

       
            $('.loanAmount').html(number_format(amount));
            //var tempD = formatDate(repaymentStartDate).date;
            $('.duedate').html(repaymentStartDate);
            $('.intrate').html(interestDisplay + '%');
            $('.intamt').html(number_format(interestamt));
            $('#repaymentStartDate').html(repaymentStartDate);
            $('.interestDisplay').html(interestDisplay);
            $('.loanBalance').html(number_format(amount));
            $('.nextduedate').html(repaymentStartDate);
        }
}
function fetchProcessedLoanRequests(loanId) {
    let api_endpoint = '';
    console.log(typeof loanId == 'undefined')
    if(loanId == '' || loanId == null || loanId == 'null' ){
        api_endpoint = "/api/LoanRequest/ProcessedLoanRequests";
        $.ajax({
            type: 'get',
            url: loan_app_url + api_endpoint,
            headers: { 'Content-Type': 'application/json' },
            error: function (d) {
                displayToast('error', d.responseJSON.message, d.responseJSON.status)
            },
            success: function (d) {
                if(d.length > 0){
                    processLoanDetails(d[0],d)
                    fetchCurrProcessedLoanRequests(d[0].loanId)
                }
                
            }
        })
    }else{
        api_endpoint = "/api/LoanRequest/loandetail?loadId=" + loanId;
        $.ajax({
            type: 'get',
            url: loan_app_url + api_endpoint,
            headers: { 'Content-Type': 'application/json' },
            error: function (d) {
                displayToast('error', d.responseJSON.message, d.responseJSON.status)
            },
            success: function (d) {
                processLoanDetails(d)
            }
        })
    }
     
   

    
    //}
}

function processLoanDetails(d, pl){
    //if (d.length > 0) {
        console.log(d);
        let lists = d;
        if(pl != null){
            localStorage.setItem('processedLoans', JSON.stringify(pl));
        }
        

        let amount = lists.amount;
        let duration = lists.duration == 1 ? lists.duration + " Month" : lists.duration + " Months";
        let disbursementDate = lists.approvalDate;
        disbursementDate = formatDate3(disbursementDate).date2;
        repaymentStartDate = formatDate3(lists.approvalDate).date;
        loanCategory = lists.category;
        loanStatus = lists.status;
        let loanStatusStyle = (lists.status == "Pending")
            ? "loan-status-pending"
            : (lists.status == "Declined" ? "loan-status-declined"
                : (lists.status == "Awaiting Approval" ? "loan-status-awaiting"
                    : (lists.status == "Approved" ? "loan-status-approved"
                    : (lists.status == "Collaterized" ? "loan-status-collaterized"
                        : "loan-status-running"))));
        //repaymentStartDate = new Date(repaymentStartDate.setMonth(repaymentStartDate.getMonth()+1));
        let interestDisplay = lists.loaninterest;
        console.log(lists.length)
       if(lists.status == "Processed"){
        $('.Eligible').show();
        lists.status = 'Running'
       }
           // $('.currentLoan').show();
            //$('.loanAmount').html(number_format(amount));
            $('.loanCategory').html(loanCategory);
            $('.loanDuration').html(duration);
            var tempD = new Date(repaymentStartDate)
            var newDate = new Date(tempD.setMonth(tempD.getMonth() + parseInt(duration)));
            $('.duedate').html(newDate.toLocaleDateString());
            $('.loanStatus').html(loanStatus);
            $('.loanStatusStyle').html(`<span class="${loanStatusStyle}">${lists.status}</span>`);
            $('.disbursementDate').html(disbursementDate);
            //$('.repaymentStartDate').html(repaymentStartDate);
            $('.interestDisplay').html(interestDisplay);
    }

$(function(){
    let currLoan = localStorage.getItem('currLoan');
    console.log(currLoan)
    if(currLoan != ''){
        fetchCurrProcessedLoanRequests(currLoan);
    }
    fetchProcessedLoanRequests(currLoan)
})
