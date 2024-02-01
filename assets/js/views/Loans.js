import DefaultView from "./DefaultView.js";

export default class extends DefaultView {
    constructor(params) {
        super(params);
        this.setTitle("Loans | Pallywad Capital ");
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
                            <div class="col-md-5 loan-display">
                                <p class="current-loan-amount">Current Loan Amount</p>
                                <div class="d-flex justify-content-between">
                                    <h3>${this.currency} 250,000</h3>
                                    <a href="javascript:;" class="default-button-green">Pay </a>
                                </div>
                                <p class="about-title">APPROVED LOAN DETAILS</p>
                                <p class="mt-3">
                                    Dear <b>${this.userFirstname}</b>, Please enter the amount you want to
                                    repay and select the repayment method.
                                </p>
                                <div class="mt-3">
                                    <input type="text" id="repayment-amount" placeholder="Enter amount you want to repay">
                                    <p class="grey-text mt-2">Repayment methods</p>
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
                                        
                                    </div>
                                    <div>
                                        <a href="" class="default-button block text-center mt-3">Repay</a>
                                    </div>

                                </div>
                            </div>
                            <div class="col-md-7">
                                <a href="javascript:;" class="add-loan-button mt-3" onclick="addLoan('${this.userEmail}');"><i class="fa fa-plus"></i> Add Loan</a>
                                <div>
                                
                                </div>
                            </div>
                            <div class="col-md-12 mt-5">
                                <p class="about-title">LOANS</p>
                                <div id="allLoanRequests">
                                    <p class="placeholder-glow">
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
                        </div>
                    </div>

                </div>
            </div>
            <default-footer></default-footer>
        </div>
        `
    }
}