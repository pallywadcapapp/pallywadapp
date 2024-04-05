
var pathname = $(location).attr("pathname");


$(function (e) {
    if (pathname == '/dashboard' || pathname == '/') {
        loadTotalLoanOverheads();
        var pl = JSON.parse(localStorage.getItem('processedLoans'));
        localStorage.setItem('pindex', 0)
        if (pl != null) {
            loadDashboard(pl[0].loanId);
        }
        if (localStorage.getItem('onboarding') == null) {
            onboarding();
            localStorage.setItem('onboarding', true);
        }

        loadReadLanding();
        toggleBalance();
    }

    var tempp = localStorage.getItem('totalLoanBalance');
    
    $("#icon-click").click(function() {

        var className = $("#icon").attr('class');
        className = className.indexOf('slash') !== -1 ? 'fa fa-eye' : 'fa fa-eye-slash'
    
        $("#icon").attr('class', className);
        var input = $("#pass");

        if ($('.totalLoanBalance').html() == "xxxxxx") {
            $('.totalLoanBalance').html(tempp);
        } else {
            $('.totalLoanBalance').html('xxxxxx');
        }
      });

      $('#skip-intro').click(function(){
        $('.modal-backdrop').remove();
      })
})

function loadDashboard(loanId) {
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
            $('#amtPaid').html(number_format(d));

        }
    })
}

function loadTotalLoanOverheads() {
    api_endpoint = "/api/LoanRepayment/LoanOverheads";
    $.ajax({
        type: 'GET',
        url: loan_app_url + api_endpoint,
        headers: { 'Content-Type': 'application/json' },
        error: function (d) {
            displayToast('error', "Unable to get total balance!", "Error");
        },
        success: function (d) {
            console.log(d)
            localStorage.setItem('totalLoanBalance', number_format(d))
            $('.totalLoanBalance').html(number_format(d));

        }
    })
}

function loadReadLanding() {
    var title = '<i class="fa fa-warning" style="color:#eb3d5d; background-color:#fff2f5; border-radius: 60px; box-shadow: 0 0 2px #888;padding: 0.5em 0.6em;"></i>' +
        ' <b><span style="font-size:15px;"> PLEASE READ</span></b>';
    var body = `<ul>
                <li>PallyWad Capital will only disburse your approved loan into the bank account provided on your profile</li>
                <li>PallyWad Capital only accepts loan repayment into our bank account sent via email from <a href="mailto:info@pallywad.com">info@pallywad.com</a>
                </li>
                <li>PallyWad Capital will never ask you to pay additional costs to receive a loan</li>
                <li>PallyWad Capital accepts flexible payment terms </li>
    `;
    //$('.modal-body').html(body);
    $('#prembd').html(body);
    $('.modal-title').html(title);
    myModal.show({
        keyboard: false,
        backdrop: 'static'
    });
}

function onboarding() {
    //var onboadModal = new bootstrap.Modal(document.getElementById('onboard-modal'));


    $('.onboard-modal.show-on-load').modal('show');
    if ($('.onboard-modal .onboard-slider-container').length) {
        $('.onboard-modal .onboard-slider-container').slick({
            dots: true,
            infinite: false,
            adaptiveHeight: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
        $('.onboard-modal').on('shown.bs.modal', function (e) {
            $('.onboard-modal .onboard-slider-container').slick('setPosition');
        });

        /*$('.last').slick({
            // @type {string} html
            nextArrow: '<button class="btn btn-primary">Done</button>',
            prevArrow: '<button class="btn btn-default">Previous</button>'
        });*/
    }
}

function toggleBalance(){
   
}

