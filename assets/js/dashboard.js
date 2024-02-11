
var pathname = $(location).attr("pathname");


$(function(e){
    if(pathname == '/dashboard'){
        var pl = JSON.parse(localStorage.getItem('processedLoans'));
        
        loadDashboard(pl[0].loanId);
    }
})

function loadDashboard(loanId){
 api_endpoint = "/api/Payments/TotalLoanPayment?loanId=" + loanId;
 $.ajax({
     type: 'GET',
     url: loan_app_url + api_endpoint,
     headers: { 'Content-Type': 'application/json' },
     error: function (d) {
         displayToast('error', "Unable to get payment total!", "Error");
     },
     success: function (d) {
        console.log(d)
        $('#amtPaid').html(d);

     }
 })
}