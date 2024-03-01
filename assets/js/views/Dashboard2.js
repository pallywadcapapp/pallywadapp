import DefaultView from "./DefaultView.js";

export default class extends DefaultView {

    constructor(params) {
        super(params);
        this.setTitle("Dashboard | PallyWad Capital ");
    }

    async getHtml() {
        return `
        <div id="main" class="has-animation dashboard" onload="loadDashboard()">
            <dashboard-header></dashboard-header>
            <div class="dashboard-area">
                <left-sidebar></left-sidebar>
                <div id="dashboard" class="right-pane">
                    <div id="stepsNotification" class="border border-danger hide p-2 mb-2 rounded"></div>
                    <h4 class="welcome-label">Welcome, <span id="loggedInUser">${this.userFirstname}</span></h4>
                    <div class="notEligible">
                        <div><h6>Welcome to your dashboard. Here you will find all important updates</h6></div>
                        <a hidden href="javascript:;" class="add-loan-button" onclick="addLoan('${this.userEmail}');">
                            <i class="fa fa-plus"></i> Request Loan
                        </a>
                        <div class="row" style="margin-top:5px;">
                        
                        
                        <div class="card bg-primary text-white col-sm-6" style="min-height:150px; background-color:24488F !important;">
                        <div class="card-body"><span>No Active Loan</span><br />
                            <span><b>${this.currency}0.00 </b></span><br />

                            <a href="update-profile" class="btn blue-button-white"> <i class="fa fa-lightbulb"></i> Complete Profile </a>
                        </div>
                        <div class="col-sm-6"></div>
                        </div>
                      </div>
                    </div>
                    <div class="Eligible">
                        <div><h6>Welcome to your dashboard. Here you will find all important updates</h6></div>
                        <a hidden href="javascript:;" class="add-loan-button" onclick="addLoan('${this.userEmail}');">
                            <i class="fa fa-plus"></i> Request Loan
                        </a>
                        <div class="row" style="margin-top:5px;">
                        
                        
                        <div class="card bg-primary text-white col-sm-6" style="min-height:150px; background-color:24488F !important;">
                        <div class="card-body"><span>Total Loan Balance</span><br />
                            <b style="font-size: 28px; font-weight: 600;">${this.currency}<span  class="totalLoanBalance">0.00 </span></b><br />

                        </div>
                        <div class="col-sm-6"></div>
                        </div>
                      </div>
                    </div>

                    

                    <div class="row mt-4 Eligible">
                      
                        <div class="col-md-6">
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
                        <div class="col-md-6">
                        <p class="about-title">List of payments made</p>
                   <div id="loanRepaymentArea" class="">
                       <div id="repaymentItems2">
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
                   </div>
                    </div>

                </div>
                 
            </div>

            
            
        
            <default-footer></default-footer>
        </div>
        `
    }
}