
$(window).on('load', function () {
if ($('#loanUploadedDocumentsArea').length > 0) {
    //loadPayments();
    //loadPaymentsHistory()
    loadUserUploadedDocuments()
}
});


function loadUserUploadedDocuments() {
    let api_endpoint = "/api/Documents";
    $.ajax({
        type: 'get',
        url: loan_app_url + api_endpoint,
        headers: { 'Content-Type': 'application/json' },
        error: function (d) {
            //displayToast('error', d.responseJSON.message, d.responseJSON.status)
        },
        success: function (d) {
            console.log(d)
            let lists = d;
            let content = '';
            for (let i = 0; i < lists.length; i++) {
                payment_status = (lists[i].status == "Pending")
                    ? `<span class="badge text-bg-warning">${lists[i].status}</span>`
                    : `<span class="badge text-bg-success">${lists[i].status}</span>`;
                content += `
                <div class="row">
                    <div class="col-md-5 repayment-item2">
                        <div class="repayment-price">&#8358; ${number_format(lists[i].amount)}</div>
                        <small class="grey-text">${lists[i].loanRefId}</small><br>
                        
                    </div>
                    <div class="col-md-3 repayment-item2">
                        <small class="black-text"><b>Status:</b>
                        <br> ${payment_status} </small>
                    </div>
                    <div class="col-md-4 repayment-item2">
                        <small>${formatDate3(lists[i].requestDate).time}</small><br>
                        <small>${formatDate3(lists[i].requestDate).date2}</small>
                        
                    </div>
                </div>
                `;

            }


            $('#userDocItems').html(content);

        }
    })
}