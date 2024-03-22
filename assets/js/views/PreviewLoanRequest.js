import DefaultView from "./DefaultView.js";

export default class extends DefaultView {
    constructor(params) {
        super(params);
        this.setTitle("Preview Loan Request  | PallyWad Capital ");
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
                                    <p><b>Loan Type:</b> <span style="float:right">${localStorage.getItem('category')}</span></p>
                                    <p><b>Loan Amount:</b> <span style="float:right">${number_format(localStorage.getItem('amount'))}</span></p>
                                    <p><b>Collateral Type:</b> <span style="float:right">${localStorage.getItem('selCollateral')}</span></p>
                                    <p><b>Preferred Interest Rate:</b> <span style="float:right">${localStorage.getItem('preferredRate')}%</span></p>
                                    <p><b>Preferred Tenor:</b> <span style="float:right">${localStorage.getItem('preferredTenor')} Month(s)</span></p>
                                    <p><b>Repayment Plan:</b> <span style="float:right">${localStorage.getItem('repaymentPlan')} </span></p>
                                    <div class="grey-text form-control" style="border-width: medium;">
                                    <span>Purpose: </span>
                                    <span style="float:right">
                                    ${localStorage.getItem('purpose')}
                                    </span>
                                    </div>
                                    <p hidden><b>Interest Rate:</b> ${JSON.parse(localStorage.getItem('loanProducts'))[localStorage.getItem('pindex')].loaninterest}% -
                                    ${parseInt(JSON.parse(localStorage.getItem('loanProducts'))[localStorage.getItem('pindex')].loaninterest) + 5}%  
                                    <span> You will get your exact rae on loan approval</span>
                                    </p>
                                    <div hidden class="grey-text form-control" style="border-width: medium;">
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
                                    <div>
                                        <input type="checkbox" id="inputAck" onchange="certify()"  style="height:2.0rem; width:2.0rem"  /><span style="font-size: 12px; color:gray"> I <b>${localStorage.getItem('lastname')} ${localStorage.getItem('firstname')}</b>, hereby affirm my commitment to adhere to the terms 
                                        and conditions of the loan agreement entered with PallyWad Capital Ltd, I acknowledge responsibility to fulfill all 
                                        repayment obligations, utilize the loan proceeds for the intended purpose as specified in the agreement, and comply with 
                                        all applicable laws and regulations. I understand that any failure to comply with the terms of the agreement may result 
                                        in consequences outlined therein, including offset of collateral and legal action. I hereby pledge to act in accordance 
                                        with the provisions of the loan agreement to the best of my ability. </span>
                                    </div>
                                    <br />
                                    <div class="privacy-area ">
                                    
                                    <input type="checkbox" id="inputTerms" onchange="certify()"  style="height:1.7rem; width:1.7rem" /> Accept our <a href="terms" target="_blank"> Terms of Service and update link </a>
                                    </div><br />
                                    <!--<p><b>Collateral Type:</b> ${JSON.parse(localStorage.getItem('loanProducts'))[localStorage.getItem('pindex')].duration}months</p>
                                    <p><b>Collateral Threshold:</b> ${JSON.parse(localStorage.getItem('loanProducts'))[localStorage.getItem('pindex')].collateralPercentage}%</p>-->
                                    
                                    <button type="button" class="btn continue-button-2" disabled id="submitLoanRequest"">Submit Loan Request</button>
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