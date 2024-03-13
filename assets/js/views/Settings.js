import DefaultView from "./DefaultView.js";

export default class extends DefaultView {
    constructor(params) {
        super(params);
        this.setTitle("Settings | PallyWad Capital ");
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
                                <h3>Settings</h3>
                            </div>
                            <div class="col-md-4 text-center ps-5">
                            </div>
                        </div>
                        <div class="row">
                        
                        <div id="settingsArea" class="deeper-grey p-5 mt-3 rounded mb-5">
                            <p class="about-title mb-3">Settings</p>
                            <div class="card">
                                <div class="card-body">
                                    <ul class="list-group">
                                        <li class="list-group-item ">
                                            <a href="upload-documents" class="group-button d-flex justify-content-between align-items-center">
                                                <span><img src="../assets/img/update-kyc.png" />Update KYC Information</span>
                                                <!--<span class="badge bg-primary rounded-pill">1</span>-->
                                            </a>
                                        </li>
                                        <li class="list-group-item">
                                            <a href="update-profile" class="group-button d-flex justify-content-between align-items-center">
                                                <span><img src="../assets/img/profile-icon.png" />Update Profile</span>
                                                
                                            </a>
                                        </li>
                                        <li class="list-group-item">
                                            <a href="upload-collateral" class="group-button d-flex justify-content-between align-items-center">
                                                <span><img src="../assets/img/download.png" />Update Business Details</span>
                                                
                                            </a>
                                        </li>
                                        <!--<li class="list-group-item">
                                            <a href="upload-collateral" class="group-button d-flex justify-content-between align-items-center">
                                                <span><img src="../assets/img/download.png" />Upload Collateral Documents</span>
                                                
                                            </a>
                                        </li>-->
                                    </ul>
                                </div>
                            </div>


                            <div class="card mt-4">
                                <div class="card-body">
                                    <ul class="list-group">
                                        <li class="list-group-item ">
                                            <a href="change-password" class="group-button d-flex justify-content-between align-items-center">
                                                <span><img src="../assets/img/change-password-icon.png" />Change Password</span>
                                            </a>
                                        </li>
                                        <li class="list-group-item">
                                            <a href="payment-settings" class="group-button d-flex justify-content-between align-items-center">
                                                <span><img src="../assets/img/lock-icon-small.png" />Payment Settings</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <!--<div class="card mt-4">
                                <div class="card-body">
                                    <ul class="list-group">
                                        <li class="list-group-item ">
                                            <a href="contact" class="group-button d-flex justify-content-between align-items-center">
                                                <span><img src="../assets/img/contact-icon.png" />Contact Support</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="card mt-4">
                                <div class="card-body">
                                    <ul class="list-group">
                                        <li class="list-group-item ">
                                            <a href="close-account" class="group-button d-flex justify-content-between align-items-center">
                                                <span><img src="../assets/img/logout-icon.png" />Close Account</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>-->
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