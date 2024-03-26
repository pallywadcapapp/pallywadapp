import DefaultView from "./DefaultView.js";

export default class extends DefaultView {
    constructor(params) {
        super(params);
        this.setTitle("Document Upload | PallyWad Capital ");
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
                                <h3>Document Upload</h3>
                            </div>
                            <div class="col-md-4 text-center ps-5">
                                <a href="javascript:;" class="default-button mt-3 uploadedDocument">
                                <i class="fa fa-plus"></i> Upload Document</a>
                            </div>
                        </div>
                        <div class="row">
                        <div class="col-md-12 loan-description-box">
                            <div class="row">
                                <div class="col-sm-6">
                                    <h5><b>Personal Loan</b></h5>
                                    <ul>
                                        <li>Government Approved ID (Minimum of 2, NIN slip + either of valid International Passport or Driver’s License)</li>
                                        <li>Recent Passport Photo</li>
                                        <li>Utility Bill (For proof of address, not older than 3 months) </li>
                                    </ul>
                                </div>
                                <div class="col-sm-6">
                                    <h5><b>Business Loan</b></h5>
                                    <ul>
                                        <li>Government Approved ID (Minimum of 2, NIN slip + either of valid International Passport or Driver’s License)</li>
                                        <li>Recent Passport Photo</li>
                                        <li>Utility Bill (For proof of address, not older than 3 months) </li>
                                        <li>CAC Documentation </li>
                                        <li>Bank Statement of 12 months </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <p class="about-title mt-4"></p>
                        <div id="loanUploadedDocumentsArea" class=" mt-2">
                            <div id="userDocItems">
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