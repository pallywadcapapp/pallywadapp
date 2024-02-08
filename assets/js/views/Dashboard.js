import DefaultView from "./DefaultView.js";

export default class extends DefaultView {

    constructor(params) {
        super(params);
        this.setTitle("Dashboard | Pallywad Capital ");
    }

    async getHtml() {
        return `
        <div id="main" class="has-animation">
            <dashboard-header></dashboard-header>
            <div class="dashboard-area">
                <left-sidebar></left-sidebar>
                <div class="right-pane">
                    <div id="stepsNotification" class="border border-danger hide p-2 mb-2 rounded"></div>
                    <h4 class="welcome-label">Welcome, <span id="loggedInUser">${this.userFirstname}</span></h4>
                    <a href="javascript:;" class="add-loan-button" onclick="addLoan('${this.userEmail}');">
                        <i class="fa fa-plus"></i> Add Loan
                    </a>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="proof-of-payment">
                                <div class="loan-display mt-3">
                                    <span class="grey-text">Your running loan details:</span> 
                                    <b>Active Loans</b>
                                    <p class="current-loan-amount mt-2"><span class="loanCategory">Current Loan Amount</span></p>
                                    <div class="d-flex justify-content-between">
                                        <h3>${this.currency} <span class="loanAmount">0</span></h3>
                                        <a href="javascript:;" class="default-button-green makePayment">Pay </a>
                                    </div>
                                </div>

                                
                                <div class="info-area mt-1">
                                    <div class="row">
                                        <div class="col-md-6">Disbursement Date</div>
                                        <div class="col-md-6"><span class="disbursementDate">0</span></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">Disbursement Amount</div>
                                        <div class="col-md-6">${this.currency}<span class="loanAmount">0</span></div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="proof-of-payment">
                            awaiting approval
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="proof-of-payment">
                            awaiting approval
                            </div>
                        </div>
                    </div>

                    <div class="row mt-4">
                        <p class="about-title">RECENT LOAN TRANSACTIONS</p>
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

            
            
        
            <default-footer></default-footer>
        </div>
        `
    }
}