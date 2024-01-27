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
                                    <a href="/kyc-1"><img src="assets/img/left-arrow.png" /></a>
                                    <a href="/upload-documents"><img src="assets/img/close-icon.png" /></a>
                                </div>
                                <div id="kyc2-form" class="white-bg rounded div-shadow upload-form ">
                                    <form id="kyc1-form-step2" action="POST" >
                                        <div class="text-center ">
                                            <h3>Upload <span id="selected-document"></span></h3>
                                           
                                        </div>
                                        <div class="text-center illustration-space-3">
                                            <div id="ddArea">
                                                <img src="assets/img/card-illustration.png" /><br>
                                                Drag and Drop Files Here or click the button below to upload.
                                            </div>
                                        </div>
                                        
                                        
                                        <div class="form-group mt-5">
                                            <input type="file" class="d-none" id="selectfile" multiple />
                                            <a href="javascript:;" id="continue-button-3" class="continue-button-2" >Upload From Gallery</a>
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