import DefaultView from "./DefaultView.js";


export default class extends DefaultView {
    constructor(params) {
        super(params);
        this.setTitle("Update Profile  | PallyWad Capital ");
        
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
                                <h3>Default Payment Setting</h3>
                            </div>
                        </div>
                        <div class="row">
                        <div id="defaultPayment" class="white-bg rounded div-shadow signin-form">
                            <div class="row">
                                <div class="col-md-6">
                                     <div id="payBankItems">
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
                                <div class="col-md-6">
                                    <form id="updateBankSettingsForm">
                                        <div class="text-center mt-3 px-8">
                                            <h3>Update Payment</h3>
                                            <p>Complete the form below to update your profile.</p>
                                        </div>
                                       
                                        <div class="form-group mt-3">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <label>Bank</label>
                                                    <input type="text" class="form-control" id="bankname" name="bankname">
                                                </div>
                                                <div class="col-md-12">
                                                    <label>Account No</label>
                                                    <input type="text" class="form-control" id="bankaccno" name="bankaccno">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group mt-4">
                                            <button id="saveBankDetails" type="button" class="continue-button">Save Details</button>
                                        </div>
                                            
                                        
                                        
                                        <hr class="mt-4 mb-4">
                                        <div class="privacy-area text-center">
                                            <img src="../assets/img/shield-check.png" class="me-1" />PallyWad will not share your confidential data to a third party. Read our
                                            <a href="">Privacy Policy.</a>
                                        </div>
                                    </form>
                                </div>
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