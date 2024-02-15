import DefaultView from "./DefaultView.js";

export default class extends DefaultView {
    constructor(params) {
        super(params);
        this.setTitle("Upload Documents | Pallywad Capital ");
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
                                <div class="nav-arrow-areas justify-content-end" >
                                    
                                    <a href="/dashboard"><img src="assets/img/close-icon.png" /></a>
                                </div>
                                <div id="upload-forms" class="white-bg rounded div-shadow upload-form ">
                                    <form id="step-2">
                                        <div class="text-center ">
                                            <h3>Let's verify your identity</h3>
                                            <p class="grey-text">To get verified, you will need to:</p>
                                        </div>
                                        <div class="text-center illustration-space">
                                            <a href="/kyc-1">
                                                <img src="assets/img/document-upload-illustration.png">
                                            </a>
                                            
                                        </div>
                                        
                                        
                                        <div class="form-group mt-5">
                                            <a href="/kyc-1" nav-link class="continue-button-2">Let's Start</a>
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