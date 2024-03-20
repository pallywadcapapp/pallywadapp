import DefaultView from "./DefaultView.js";

export default class extends DefaultView {
    constructor(params) {
        super(params);
        this.setTitle("KYC: Select Country  | PallyWad Capital ");
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
                                    <a href="/upload-documents" data-link><img src="assets/img/left-arrow.png" /></a>
                                    <a href="/upload-documents" data-link><img src="assets/img/close-icon.png" /></a>
                                </div>
                                <div id="docUpload-form" class="white-bg rounded div-shadow upload-form ">
                                    <form id="kyc1-form-step">
                                        <div class="text-center ">
                                            <h3>Select Document</h3>
                                            <p>Select a verification document to upload
                                             on the next page.</p>
                                        </div>

                                        
                                        <div class="col-md-12 text-center">
                                            <label>Document Type <span class="text-danger">*</span></label>
                                            <select id="bus-type" required name="type" class="form-control">
                                                <option value="">Select Business Type</option>
                                                <option>Partnership</option>
                                                <option>LLP</option>
                                                <option>Proprietorship</option>
                                                <option>Private Limited</option>
                                                <option>Public Ltd</option>
                                                <option>Others </option>
                                            </select>
                                        </div>
                                        <div class="text-left illustration-space-2">
                                            <div id="documentsList">
                                                <p class="placeholder-glow">
                                                    <span class="placeholder col-6"></span><br>
                                                    <span class="placeholder col-7"></span><br>
                                                    <span class="placeholder col-9"></span><br>
                                                    <span class="placeholder col-7"></span><br>
                                                    <span class="placeholder col-4"></span>
                                                </p>
                                            </div>
                                        </div>
                                        
                                        
                                        <div class="form-group mt-5">
                                            <a href="javascript:;" id="continue-docupload-2" class="continue-button-2" >Continue</a>
                                        </div>
                                        <div class="privacy-area text-center mt-3">
                                            By clicking the “start” button you agree to our
                                            <a href="">User Terms and Conditions and</a> <a href="">our Privacy Notice.</a>
                                        </div>
                                    </form>
                    
                                    
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