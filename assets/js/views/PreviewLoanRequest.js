import DefaultView from "./DefaultView.js";

export default class extends DefaultView {
    constructor(params) {
        super(params);
        this.setTitle("Preview Loan Request  | Pallywad Capital ");
    }

    async getHtml() {
        return `
        <div id="main" class="has-animation">
            <dashboard-header></dashboard-header>
            <div class="dashboard-area">
                <left-sidebar></left-sidebar>
                <div class="right-pane">
                    
                    <div class="container">
                        <div class="row">
                            <div class="col-md-7 col-12 ms-auto me-auto relative">
                                <div class="nav-arrow-areas" >
                                    <a href="/loan-request2" data-link><img src="assets/img/left-arrow.png" /></a>
                                    <a href="/dashboard" data-link><img src="assets/img/close-icon.png" /></a>
                                </div>
                                <div id="kyc2-form" class="white-bg rounded div-shadow upload-form ">
                                    <h3 style="text-align: center;">Preview Loan Request</h3>
                                    <p><b>Loan type:</b> <span style="float:right">${localStorage.getItem('category')}</span></p>
                                    <p><b>Loan amount:</b> <span style="float:right">${number_format(localStorage.getItem('amount'))}</span></p>
                                    <p><b>Interest Rate:</b> ${JSON.parse(localStorage.getItem('loanProducts'))[localStorage.getItem('pindex')].loaninterest}% -
                                    ${parseInt(JSON.parse(localStorage.getItem('loanProducts'))[localStorage.getItem('pindex')].loaninterest) + 5}%  
                                    <span> You will get your exact rae on loan approval</span>
                                    </p>
                                    <div class="grey-text form-control" style="border-width: medium;">
                                    <span>Amount to be paid monthly as interest: </span>
                                    <span style="float:right">
                                    ${number_format(parseFloat(localStorage.getItem('amount')) * parseInt(JSON.parse(localStorage.getItem('loanProducts'))[localStorage.getItem('pindex')].loaninterest) / 100)}
                                     - 
                                    ${number_format(parseFloat(localStorage.getItem('amount')) * (parseInt(JSON.parse(localStorage.getItem('loanProducts'))[localStorage.getItem('pindex')].loaninterest) + 5) / 100)}
                                    </span>
                                    </div>
                                    
                                    <br />
                                    <div>
                                        (Interest amount is rate percentage of Loan balance per month. Interest amount reduces as loan is repaid)
                                    </div>
                                    <br />
                                    <!--<p><b>Collateral Type:</b> ${JSON.parse(localStorage.getItem('loanProducts'))[localStorage.getItem('pindex')].duration}months</p>
                                    <p><b>Collateral Threshold:</b> ${JSON.parse(localStorage.getItem('loanProducts'))[localStorage.getItem('pindex')].collateralPercentage}%</p>-->
                                    
                                    <a class="btn continue-button-2" href="javascript:;" id="submitLoanRequest"">Submit Loan Request</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        
            <default-footer></default-footer>

        </div>
        `
    }
}