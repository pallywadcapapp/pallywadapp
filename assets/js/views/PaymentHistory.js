import DefaultView from "./DefaultView.js";

export default class extends DefaultView {
    constructor(params) {
        super(params);
        this.setTitle("Payments History | PallyWad Capital ");
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
                            <div class="col-md-8 page-lead">
                                <h3>Payment History</h3>
                            </div>
                            <div class="col-md-4 text-center ps-5">
                                <a href="javascript:;" class="default-button mt-3 makePayment">
                                <i class="fa fa-plus"></i> New Repayment</a>
                            </div>
                        </div>
                        <div class="row">
                        <p class="about-title mt-4">PAYMENT HISTORY</p>
                        <div id="loanRepaymentArea" class=" mt-2">
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