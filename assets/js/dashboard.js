
var pathname = $(location).attr("pathname");


$(function(e){
    if(pathname == '/dashboard'){
        var pl = JSON.parse(localStorage.getItem('processedLoans'));
        
        loadDashboard(pl[0].loanId);
    }
})

function loadDashboard(loanId){
 api_endpoint = "/api/payment/TotalLoanPayment?loanId=" + loanId;
 $.ajax({
     type: 'GET',
     url: api_url + api_endpoint,
     headers: { 'Content-Type': 'application/json' },
     error: function (d) {
         displayToast('error', "Token not provided!", "Error");
     },
     success: function (d) {
        console.log(d)
        $('#amtPaid').html(d);

     }
 })
}