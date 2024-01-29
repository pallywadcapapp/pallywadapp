import DefaultView from "./DefaultView.js";

export default class extends DefaultView {
    constructor(params) {
        super(params);
        this.setTitle("KYC: Select Country  | Pallywad Capital ");
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
                                <div id="kyc1-form" class="white-bg rounded div-shadow upload-form ">
                                    <form id="kyc1-form-step" action="POST" >
                                        <div class="text-center ">
                                            <h3>Select Document</h3>
                                            <p>Select a verification document to upload
                                             on the next page.</p>
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
                                            <a href="javascript:;" id="continue-button-2" class="continue-button-2" >Let's Start</a>
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