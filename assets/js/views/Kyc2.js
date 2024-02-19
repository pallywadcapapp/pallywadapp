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
                                    <a href="/kyc-1" data-link><img src="assets/img/left-arrow.png" /></a>
                                    <a href="/upload-documents" data-link><img src="assets/img/close-icon.png" /></a>
                                </div>
                                <div id="kyc2-form" class="white-bg rounded div-shadow upload-form ">
                                    <form id="kyc1-form-step2" class="kyc"  method="GET">
                                        <div class="text-center ">
                                            <h3>Upload <span id="selected-document"></span></h3>
                                           
                                        </div>
                                        <div class="text-center illustration-space-3">
                                            <div id="ddArea">
                                                <div id="imgPreview">
                                                    <img src="assets/img/card-illustration.png" /><br>
                                                    Drag and Drop Files Here or click the button below to upload.
                                                </div>
                                            </div>
                                           
                                        </div>
                                        
                                        <div class="form-group mt-2">
                                            <a href="javascript:;" id="upload-from-gallery" class="continue-button-3" >Upload From Gallery</a>
                                            
                                        </div>
                                        <div id="uploadDocumentExtrafields" class="form-group mt-2 hide" >
                                        <div class="input-group">
                                        <div class="input-group-append" style="width:30%; align:justify">
                                            <span class="input-group-text" id="inputGroup-sizing-lg" style="height:100%;"> <b>Document No.</b></span>
                                        </div>
                                        
                                        <input type="text" id="documentNo" class="form-control mb-2" placeholder="Enter ${ localStorage.getItem('chosenDocumentName')} Number" />
                                        </div>
                                            
                                            
                                            <div class="input-group expirySeg">
                                            <div class="input-group-append" style="width:30%; align:justify">
                                                <span class="input-group-text" id="inputGroup-sizing-lg" style="height:100%;"> <b>Expiry Date</b></span>
                                            </div>
                                            
                                            <input type="date" id="expiryDate" class="form-control mb-2" placeholder="Expiry Date" />
                                            </div>
                                            <a href="javascript:;" id="uploadDocument" class="continue-button-2 hide" >Submit Document</a>
                                            
                                        </div>


                                        <input type="file" class="d-none" id="selectfile" />
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