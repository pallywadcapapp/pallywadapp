var doclist = '';
$(function(){
    var formData = new FormData();
    if ($('#bus-type').length > 0) {
        let api_endpoint = "/api/documents/type";
        $.ajax({
            type: 'get',
            url: setup_url + api_endpoint,
            headers: { 'Content-Type': 'application/json' },
            error: function (d) {
                displayToast('error', d.responseJSON.message, d.responseJSON.status)
            },
            success: function (d) {
                let lists = d;
                let documents = "";
                for (let i = 0; i < lists.length; i++) {
                    documents += `
                        <option value="${lists[i]}" 
                            pindex="${i}">
                            ${lists[i]}
                        </option>
                    `;
                }
                //$('#loanTypeDescription').html(`<b>Loan Type Description</b><br><br>${lists[0].loandesc}`);
               
                $('#bus-type').html(documents);
            }
        })

        uploadedDocuments();
    }
if ($("#docUpload-form").length > 0) {
    fetchDocumentsList();
    function fetchDocumentsList() {
        let api_endpoint = "/api/Documents/all";
        $.ajax({
            type: 'get',
            url: setup_url + api_endpoint,
            headers: { 'Content-Type': 'application/json' },
            error: function (d) {
                displayToast('error', d.responseJSON.message, d.responseJSON.status)
            },
            success: function (d) {
                doclist = d;
                var filtered = d.filter(a => a.type == "Address");
                var documents = buildData(filtered);
                $('#documentsList').html(documents);

            }
        })
    }
}

$('#uploadDocumentTrans').click(function () {
    //var formData = new FormData();
    console.log(formData.file)
    let api_endpoint = "/api/Documents/UploadFile";
    let documentRefId = localStorage.getItem("chosenDocument");
    let documentNo = $('#documentNo').val() ?? 0;
    let expiryDate = $('#expiryDate').val() ?? new Date();
    formData.append("documentRefId", documentRefId);
    formData.append("documentNo", documentNo);
    formData.append("expiryDate", expiryDate);

    var files = document.getElementById("selectfile").files[0];
    formData.append("file", files);

    //$(".preloader-2").show();
    console.log(formData)
    $('.kyc').pleaseWait();
    $.ajax({
        url: loan_app_url + api_endpoint,
        method: "POST",
        data: formData,
        contentType: false,
        cache: false,
        processData: false,
        success: function (data) {
            $('.kyc').pleaseWait('stop');
            location.href = "/doc-upload-complete";
        },
        error: function (error) {
            $('.kyc').pleaseWait('stop');
            displayToast("error", "Unable to upload document", "File Upload Error");
        }
    });
});

});


$("body").on('change', '#bus-type', function () {
    let value = $("#bus-type :selected").attr("value");
    changeDocListSelection(value);
});

$('body').on('click', '#continue-docupload-2', function () {
    console.log("happening here");
    if ($('#kyc1-form-step input:checked').length < 1) {
        displayToast('error', 'You must select at least one document', 'Select a Document')
    }
    else {
        let doc = $('#kyc1-form-step input:checked').val();
        let name = $('#kyc1-form-step input:checked').attr('valueName');
        localStorage.setItem('chosenDocument', doc);
        localStorage.setItem('chosenDocumentName', name);
        window.location.replace("doc-upload-trans");
    }
})

function buildData(lists){
    var documents = '';
    for (let i = 0; i < lists.length; i++) {
            documents += `
                <div class="form-check">
                    <input class="form-check-input singleCheck" 
                        name="verificationDocument" required 
                        type="checkbox" 
                        valueName="${lists[i].name}"
                        value="${lists[i].id}">
                    <label class="form-check-label" for="flexCheckDefault">
                        ${lists[i].name}
                    </label>
                </div>
            `
        }
    return documents;
}

function changeDocListSelection(sel){
    console.log(sel)
    var filtered = doclist.filter(a => a.type == sel);
    console.log(filtered)
                var documents = buildData(filtered);
                $('#documentsList').html(documents);
}