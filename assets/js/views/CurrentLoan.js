import DefaultView from "./DefaultView.js";

export default class extends DefaultView {
    constructor(params) {
        super(params);
        this.setTitle("Loans | PallyWad Capital ");
    }

    async getHtml() {
        return `
        <div id="main" class="has-animation">
            <dashboard-header></dashboard-header>
            <div class="dashboard-area">
                <left-sidebar></left-sidebar>
                <div class="right-pane">
                    <div class="container">
                    <div style="border-radius:10px;border:solid; border-color:#F88559; background-color:#F6DFD7; margin:2%; color:#F88559;">
                        <span style="margin-left:10px; font:font-family: Helvetica Neue;
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 19px;
                        letter-spacing: 0em;
                        text-align: left;
                        ">Running</span>
                    </div>
                        <div class="row">
                            
                            <div class="col-md-5 loan-display currentLoan">
                                <p class="current-loan-amount">Current Loan Amount</p>
                                <div class="d-flex justify-content-between">
                                    <h3>${this.currency} <span class="loanAmount">0</span></h3>
                                    <!--<a href="javascript:;" class="default-button-green makePayment">Pay </a> -->
                                </div>
                                <p class="about-title">APPROVED LOAN DETAILS</p>
                                <p class="mt-3">
                                    Dear <b>${this.userFirstname}</b>, Please enter the amount you want to
                                    repay and select the repayment method.
                                </p>
                                <div class="mt-3">
                                    <input type="text" id="repayment-amount" placeholder="Enter amount you want to repay">
                                    <!--<p class="grey-text mt-4">Repayment methods</p>
                                    <div>
                             

                                        <div class="d-flex justify-content-between align-items-center mt-3">
                                            <label class="form-check-label repayment-text d-flex justify-content-between">
                                                <img src="./assets/img/profile-interface.png" class="align-self-center" />
                                                <div class="align-self-center">
                                                    <b>Transfer Repayment</b><br>
                                                    <small class="grey-text">Virtual Account</small>
                                                </div>
                                            </label>
                                            <input class="form-check-input payment-radio align-self-start" type="radio" name="flexRadioDefault">
                                        </div>

                                        <div class="d-flex justify-content-between align-items-center mt-3">
                                            <label class="form-check-label repayment-text d-flex justify-content-between">
                                                <img src="./assets/img/money.png" class="align-self-center" />
                                                <div class="align-self-center">
                                                    <b>Bank Card or USSD</b>
                                                </div>
                                            </label>
                                            <input class="form-check-input payment-radio " type="radio" name="flexRadioDefault">
                                        </div>
                                        
                                    </div>-->
                                    <div>
                                        <a href="javascript:;"  class="uploadPaymentProof default-button block text-center mt-4">Repay</a>
                                    </div>

                                </div>
                            </div>
                            <div class="col-md-7 ps-5 currentLoan">
                                
                                <div class="loan-duration-area mt-2">
                                    <div class="row">
                                        <div class="col-md-6">Loan Duration</div>
                                        <div class="col-md-6">Month <span class="loanRunning"> 1 <span></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">Current Rate</div>
                                        <div class="col-md-6"><span class="intrate">1%<span></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">Amount Due</div>
                                        <div class="col-md-6">${this.currency}<span class="intamt">0<span></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">Next Payment Date</div>
                                        <div class="col-md-6"><span class="nextduedate">13/02/24</span></div>
                                    </div>
                                    
                                </div>

                                <div id="loanRepaymentArea" class="loan-repayment-area mt-2">
                                    <p class="grey-text">Monthly repayment breakdown</p>
                                    <div id="repaymentItems3">
                                        <p class="placeholder-glow mb-2">
                                            <span class="placeholder col-3"></span>
                                            <span class="placeholder col-6"></span>
                                            <span class="placeholder col-3"></span>
                                        </p>
                                        <p class="placeholder-glow">
                                            <span class="placeholder col-3"></span>
                                            <span class="placeholder col-6"></span>
                                            <span class="placeholder col-3"></span>
                                        </p>
                                    </div>
                                    

                                </div>

                                <!--
                                <div class="proof-of-payment mt-2">
                                    <b>Proof of payment</b>
                                    
                                    <a href="javascript:;" class="default-button uploadPaymentProof block text-center mt-1">
                                        <i class="fa fa-upload"></i> Upload
                                    </a>
                                </div>
                                -->
                            </div>

                            <div class="col-md-12 mt-3 currentLoan" >
                                <p class="about-title mb-2">Disbursement Information</p>
                                <div class="row">
                                    <div class="col-md-7">
                                        <div class="proof-of-payment">
                                            <div class="info-area mt-2">
                                                <div class="row">
                                                    <div class="col-md-6">Disbursement Date</div>
                                                    <div class="col-md-6"><span class="disbursementDate">0</span></div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">Disbursement Amount</div>
                                                    <div class="col-md-6">${this.currency}<span class="disbursedAmount">0</span></div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">Disbursement Tenor</div>
                                                    <div class="col-md-6"><span class="loanDuration">0</span></div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="proof-of-payment">
                                            Complele loan Repayment due on <span><b id="duedate">Thur, Feb 17 2024</b></span> with
                                            Interest Rate of <b><span class="interestDisplay">0.9</span>%</b>
                                            <hr>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-12 mt-5">
                               
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