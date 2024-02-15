import DefaultView from "./DefaultView.js";

export default class extends DefaultView {

    constructor(params) {
        super(params);
        this.setTitle("Dashboard | Pallywad Capital ");
    }

    async getHtml() {
        return `
        <div id="main" class="has-animation dashboard" onload="loadDashboard()">
            <dashboard-header></dashboard-header>
            <div class="dashboard-area">
                <left-sidebar></left-sidebar>
                <div id="dashboard" class="right-pane">
                    <div id="stepsNotification" class="border border-danger hide p-2 mb-2 rounded"></div>
                    <h4 class="welcome-label">Welcome back, <span id="loggedInUser">${this.userFirstname}</span></h4>
                    <div class="notEligible">
                        <a href="javascript:;" class="add-loan-button" onclick="addLoan('${this.userEmail}');">
                            <i class="fa fa-plus"></i> Add Loan
                        </a>
                    </div>

                    <div class="row Eligible">
                        <div class="col-md-6">
                            <div class="proof-of-payment">
                                <div class="loan-display mt-3">
                                    <span class="grey-text">Your running loan details:</span> 
                                    <b>Active Loans</b>
                                    <p class="current-loan-amount mt-2"><span class="loanCategory">Current Loan Amount</span></p>
                                    <div class="d-flex justify-content-between">
                                        <h3>${this.currency} <span class="loanAmount">0</span></h3>
                                    </div>
                                </div>

                                <div class="mt-1 mb-3">
                                    <span class="grey-text">Proof of Payment Submission</span>
                                    <a href="javascript:;" class="continue-button-6 uploadPaymentProof block text-center mt-1">
                                        Upload
                                    </a>
                                </div>
                                Status<br>
                                <b><span class="loanStatus"></span></b>
                                <div class="loan-duration-area mt-2">
                                    <div class="row">
                                        <div class="col-md-6">Loan Duration</div>
                                        <div class="col-md-6"><span class="loanDuration">1 Months<span></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">Next Due Date</div>
                                        <div class="col-md-6 nextduedate" id="nextduedate">13/02/24</div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="proof-of-payment py-4">
                                        <b>Loan Status</b>
                                        <div class="loanStatusStyle mt-2"></div>
                                        <hr>
                                        Next Due Date<br>
                                        <b class="nextduedate">Wed 10 Jan, 2024</b>
                                    </div>
                                
                                </div>
                                <div class="col-md-6">
                                    <div class="proof-of-payment-2 py-4">
                                    Amount Approved
                                    <h4>&#8358; <span class="loanAmount"></span></h4>
                                    Amount Paid so far
                                    <h4>${this.currency} <span id="amtPaid">150,000</span></h4>
                                    </div>
                                </div>
                                <div class="col-md-12 mt-4">
                                    <div class="proof-of-payment">
                                        <div class="loan-display mt-3">
                                            <span class="grey-text">Current Loan Balance:</span> 
                                            <p class="current-loan-amount mt-2"><span class="loanCategory">Current Loan Amount</span></p>
                                            <div class="d-flex justify-content-between">
                                                <h3>${this.currency} <span class="loanBalance">0</span></h3>
                                                <a href="javascript:;" class="default-button-green makePayment">Pay </a>
                                            </div>
                                            <hr>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row mt-4 Eligible">
                        <p class="about-title">RECENT LOAN REQUESTS</p>
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