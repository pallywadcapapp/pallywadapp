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
                        <div class="row d-flex align-items-center">
                            <div class="col-md-5 page-lead">
                                <h3>Loans</h3>
                            </div>
                            <div class="col-md-7 ps-5 Eligible" >
                            <a href="javascript:;" class="add-loan-button mt-3" onclick="addLoan('${this.userEmail}');"><i class="fa fa-plus"></i> Request Loan</a>
                            </div>
                        </div>
                        <div class="row">

                            <div class="col-md-12 mt-5">
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
                    </div>

                </div>
            </div>
            <default-footer></default-footer>
        </div>
        `
    }
}