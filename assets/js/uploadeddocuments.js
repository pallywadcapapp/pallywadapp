
$(window).on('load', function () {
    if ($('#loanUploadedDocumentsArea').length > 0) {
        //loadPayments();
        //loadPaymentsHistory()
        loadUserUploadedDocuments()
    }
    if ($('#loanUploadedCollateralsArea').length > 0) {
        //loadPayments();
        //loadPaymentsHistory()
        loadUserUploadedCollaterals()
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
                        <div class="repayment-price">
                            <img onclick="previewImage(this)" style="width:50px; height:50px" alt="${lists[i].name}" src="${loan_app_url + '/api/documents/fileuploads?filepath=' + lists[i].url}" />
                            ${lists[i].name}
                        </div>
                        <small class="grey-text">${lists[i].doctype}</small><br>
                        
                    </div>
                    <div class="col-md-3 repayment-item2">
                        <small class="black-text"><b>Status:</b>
                        <br> ${payment_status} </small>
                    </div>
                    <div class="col-md-4 repayment-item2">
                        <small>${formatDate3(lists[i].expiryDate).time}</small><br>
                        <small>${formatDate3(lists[i].expiryDate).date2}</small>
                        
                    </div>
                </div>
                `;

            }


            $('#userDocItems').html(content);

        }
    })
}

function loadUserUploadedCollaterals() {
    let api_endpoint = "/api/Collateral";
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

            var itemsPerPage = 10;
            var currentPage = 1;
            for (var i = 0; i < lists.length; i++) {
                console.log(currentPage)
                if (i >= (currentPage - 1) * itemsPerPage && i < currentPage * itemsPerPage) {
                    //console.log(lists[i]);
                }
            }

            //const itemsPerPage = 5;
            const paginationContainer = "#pagination";


            paginateCollateral(d, itemsPerPage, paginationContainer, 'userDocItems');

        }
    })
}



function paginateCollateral(items, itemsPerPage, paginationContainer, itemContainer) {
    let currentPage = 1;
    const totalPages = Math.ceil(items.length / itemsPerPage);
    function showItems(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageItems = items.slice(startIndex, endIndex);


        var itemsContainer = document.querySelector("#" + itemContainer + "");
        itemsContainer = ""

        pageItems.forEach((item) => {
            const li = document.createElement("li");
            verificationStatus = (item.verificationStatus == true)
                    ? `<span class="badge text-bg-warning">${item.verificationStatus}</span>`
                    : `<span class="badge text-bg-success">${item.verificationStatus}</span>`;
            var content = `<div class="row">
    <div class="col-md-5 repayment-item2">
        <div class="repayment-price">
            <img onclick="previewImage(this)" style="width:50px; height:50px" alt="${item.name}" src="${loan_app_url + '/api/documents/fileuploads?filepath=' + item.url}" />
            ${item.name}
        </div>
        <small class="grey-text">&#8358;${number_format(item.estimatedValue)}</small><br />
        <small class="grey-text">${item.otherdetails}</small><br />
        
    </div>
    <div class="col-md-3 repayment-item2">
        <small class="black-text"><b>Status:</b>
        <br> ${verificationStatus} </small>
    </div>
    <div class="col-md-4 repayment-item2">
        <small>${formatDate3(item.created_date).time}</small><br>
        <small>${formatDate3(item.created_date).date2}</small>
        
    </div>
</div>
`

            itemsContainer += content;
        });
        $('#userDocItems').html(itemsContainer);
    }


    function setupPagination() {
        const pagination = document.querySelector(paginationContainer);
        pagination.innerHTML = "";

        
        const ul = document.createElement("ul");
        for (let i = 1; i <= totalPages; i++) {
            const li = document.createElement("li");
            const link = document.createElement("a");
            link.href = "#";
            link.innerText = i;
            link.classList.add("page-link");
            li.classList.add("page-item");

            if (i === currentPage) {
                link.classList.add("active");
            }

            link.addEventListener("click", (event) => {
                event.preventDefault();
                currentPage = i;
                showItems(currentPage);

                const currentActive = pagination.querySelector(".active");
                currentActive.classList.remove("active");
                link.classList.add("active");
            });
            li.append(link);
            ul.appendChild(li);
        }
        
        ul.classList.add("pagination");
        pagination.appendChild(ul);

    }
    showItems(currentPage);
    setupPagination();
}


function paginate(items, itemsPerPage, paginationContainer, itemContainer) {
    let currentPage = 1;
    const totalPages = Math.ceil(items.length / itemsPerPage);
    function showItems(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageItems = items.slice(startIndex, endIndex);


        const itemsContainer = document.querySelector("#" + itemContainer + "");
        itemsContainer.innerHTML = ""

        pageItems.forEach((item) => {
            const li = document.createElement("li");
            li.innerText = item;
            itemsContainer.appendChild(li);
        });

    }


    function setupPagination() {
        const pagination = document.querySelector(paginationContainer);
        pagination.innerHTML = "";


        for (let i = 1; i <= totalPages; i++) {
            const link = document.createElement("a");
            link.href = "#";
            link.innerText = i;

            if (i === currentPage) {
                link.classList.add("active");
            }

            link.addEventListener("click", (event) => {
                event.preventDefault();
                currentPage = i;
                showItems(currentPage);

                const currentActive = pagination.querySelector(".active");
                currentActive.classList.remove("active");
                link.classList.add("active");
            });

            pagination.appendChild(link);
        }

    }
    showItems(currentPage);
    setupPagination();
}



