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
                    <a href="javascript:;" class="add-loan-button" onclick="addLoan('${this.userEmail}');"><i class="fa fa-plus"></i> Add Loan</a>
                </div>
                <div class="col-md-6 mt-5">
            <p class="about-title">LOAN REQUESTS</p>
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

            
            
        
            <default-footer></default-footer>
        </div>
        `
    }
}