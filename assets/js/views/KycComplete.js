import DefaultView from "./DefaultView.js";

export default class extends DefaultView {
    constructor(params) {
        super(params);
        this.setTitle("Verification Complete  | PallyWad Capital ");
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
                                
                                <div class="white-bg rounded div-shadow upload-form ">
                                    <form>
                                        <div class="text-center ">
                                            <h3>Document Verification Complete</h3>
                                            <p>Your verification documents were uploaded successfully. 
                                            We will verify these documents<!-- and enable the Loan 
                                            Request section of your account within 24 hours-->.</p>
                                        </div>
                                        <div class="text-center mt-2">
                                            <img src="assets/img/checked-1.png" class="kyc-complete" />
                                           
                                        </div>
                                        
                                        <div id="uploadDocumentExtrafields" class="form-group mt-3" >
                                           
                                            
                                            <a href="/dashboard" class="continue-button-2">Proceed to Dashboard</a>
                                            
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