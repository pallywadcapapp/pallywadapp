import DefaultView from "./DefaultView.js";


export default class extends DefaultView {
    constructor(params) {
        super(params);
        this.setTitle("Change Password  | PallyWad Capital ");
        
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
                            <div class="col-md-10 col-12 ms-auto me-auto mb-4">
                                <div id="chgPass" class="white-bg rounded div-shadow signin-form">
                                    <form id="changePasswordForm" method="GET" >
                                        <div class="text-center mt-3 px-8">
                                            <h3>Change Password</h3>
                                            <!--<p>Complete the form below to update your profile.</p>-->
                                        </div>
                                        <div class="form-group mt-3">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <label>Old Password <span class="text-danger">*</span></label>
                                                    <input type="password" class="form-control" id="oldPassword" name="oldPassword">
                                                </div>
                                                <div class="col-md-12">
                                                    <label>New Password <span class="text-danger">*</span></label>
                                                    <input type="password" class="form-control" id="newPassword" name="newPassword">
                                                </div>
                                                <div class="col-md-12">
                                                    <label>Confirm Password <span class="text-danger">*</span></label>
                                                    <input type="password" class="form-control" id="confirmPassword" name="confirmPassword">
                                                </div>
                                            </div>
                                            
                                        </div>

                                        <div class="form-group mt-4">
                                            <button id="change-pass" class="continue-button">Update Password</button>
                                        </div>
                                            
                                        
                                        
                                        <hr class="mt-4 mb-4">
                                        <div class="privacy-area text-center">
                                            <img src="../assets/img/shield-check.png" class="me-1" />PallyWad will not share your confidential data to a third party. Read our
                                            <a href="https://pallywad.com/privacy" target="_blank">Privacy Policy.</a>
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