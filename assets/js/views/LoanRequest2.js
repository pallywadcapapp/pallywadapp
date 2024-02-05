import DefaultView from "./DefaultView.js";

export default class extends DefaultView {
    constructor(params) {
        super(params);
        this.setTitle("Loan Request  | Pallywad Capital ");
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
                                    <a href="/loan-request" data-link><img src="assets/img/left-arrow.png" /></a>
                                    <a href="/dashboard" data-link><img src="assets/img/close-icon.png" /></a>
                                </div>
                                <div id="kyc2-form" class="white-bg rounded div-shadow upload-form ">
                                    <form id="kyc1-form-step2" action="POST" >
                                        

                                        <div class="text-center">
                                            <h3>Upload Collateral Document</h3>
                                            <select id="collateralType">
                                                <option>Type of collateral</option>
                                            </select>
                                            <input type="text" id="estimatedValue" class="form-control mb-2 mt-2" placeholder="Enter estimated value of Collateral in Naira">
                                            <input type="text" id="otherdetails" class="form-control mb-2" placeholder="Other important details about Collateral">
                                            
                                        </div>
                                        <div class="text-center illustration-space-3">
                                            <div id="imgPreview"></div>
                                           
                                        </div>
                                        
                                        <div class="form-group mt-2">
                                            <a href="javascript:;" id="upload-collateral-document" class="continue-button-3" >Upload Collateral Info</a>
                                            
                                        </div>
                                        <div id="uploadDocumentExtrafields" class="form-group mt-2" >
                                           
                                           
                                            <a href="javascript:;" id="submitLoanRequest" class="continue-button-2 hide" >Submit Loan Request</a>
                                            
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