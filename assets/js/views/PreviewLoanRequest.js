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
                                    <h3>Preview Loan Request</h3>
                                    <p><b>Loan type:</b> ${localStorage.getItem('category')}</p>
                                    <p><b>Loan amount:</b> ${localStorage.getItem('amount')}</p>
                                    <p><b>Proof Documents uploaded:</b> ${localStorage.getItem('proofDocuments')}</p>
                                    <p><b>Uploaded Collateral Documents:</b> ${localStorage.getItem('uploadedCollaterals')}</p>
                                    <a href="javascript:;" id="submitLoanRequest"">Submit Loan Request</a>
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