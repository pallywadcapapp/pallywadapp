import DefaultView from "./DefaultView.js";

export default class extends DefaultView {
    constructor(params) {
        super(params);
        this.setTitle("Update Profile  | Pallywad Capital ");
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
                            <div class="col-md-10 col-12 ms-auto me-auto mt-4">
                                <div id="onboarding-forms" class="white-bg rounded div-shadow signin-form">
                                    <form id="step-1"  >
                                        <div class="text-center mt-3 px-8">
                                            <h3>Update Profile</h3>
                                        </div>
                                        <div class="form-group mt-3">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Firstname <span class="text-danger">*</span></label>
                                                    <input type="text" class="form-control" 
                                                        id="firstname" 
                                                        name="firstname">
                                                </div>
                                                <div class="col-md-6">
                                                        <label>Lastname <span class="text-danger">*</span></label>
                                                        <input type="text" class="form-control" 
                                                            id="lastname" 
                                                            name="lastname">
                                                    
                                                </div>
                                            </div>
                                            
                                        </div>

                                        <div class="form-group mt-3">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Othernames </label>
                                                    <input type="text" class="form-control" 
                                                        id="othernames" 
                                                        name="othernams">
                                                </div>
                                                <div class="col-md-6">
                                                        <label>Date of Birth <span class="text-danger">*</span></label>
                                                        <input type="text" class="form-control" 
                                                            id="lastname" 
                                                            name="lastname"
                                                            required>
                                                    
                                                </div>
                                            </div>
                                            
                                        </div>
                                       
                                        
                                        
                                        
                                        <hr class="mt-4 mb-4">
                                        <div class="privacy-area text-center">
                                            <img src="../assets/img/shield-check.png" class="me-1" />Pallywad will not share your confidential data to a third party. Read our
                                            <a href="">Privacy Policy.</a>
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
        `;

        
    }
}