import DefaultView from "./DefaultView.js";

export default class extends DefaultView {
    constructor(params) {
        super(params);
        this.setTitle("Profile | PallyWad Capital ");
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
                                <h3>Profile</h3>
                            </div>
                            <div class="col-md-4 text-center ps-5">
                            </div>
                        </div>
                        <div class="row">
                        
                            <div id="updateProfile" class="deeper-grey mt-3 rounded mb-5">
                                <p class="about-title mb-3"> </p>
                                <div class="card">
                                    <div class="card-body">
                                        <div>
                                            <div class="text-center circle"><img class="profile-pic" src="assets/img/user-pic.png"></div>
                                            <h4 class="text-center mt-2"><span class="firstnameOutput"></span></h4>
                                        </div>
                                        <div class="row mb-2">
                                            <div class="col-md-4">Full Name</div>
                                            <div class="col-md-8 text-end">
                                                <span class="firstnameOutput"></span>
                                                <span class="othernamesOutput"></span>
                                                <span class="lastnameOutput"></span>
                                            </div>
                                        </div>
                                        <div class="row mb-2">
                                            <div class="col-md-4">Gender</div>
                                            <div class="col-md-8 text-end"> <span class="genderOutput"></span></div>
                                        </div>
                                        <div class="row mb-2">
                                            <div class="col-md-4">Mobile Number</div>
                                            <div class="col-md-8 text-end"> <span class="phoneOutput"></span></div>
                                        </div>
                                       
                                        <div class="row mb-2">
                                            <div class="col-md-4">Date of Birth</div>
                                            <div class="col-md-8 text-end"> <span class="dobOutput"></span></div>
                                        </div>
                                        <div class="row mb-2">
                                            <div class="col-md-4">Email</div>
                                            <div class="col-md-8 text-end"> <span class="emailOutput"></span></div>
                                        </div>
                                        <div class="row mb-2">
                                            <div class="col-md-4">BVN</div>
                                            <div class="col-md-8 text-end"> <span class="bvnOutput"></span></div>
                                        </div>
                                        <div class="row mb-2">
                                            <div class="col-md-4">NIN</div>
                                            <div class="col-md-8 text-end"> <span class="ninOutput"></span></div>
                                        </div>
                                        <div class="row mb-2">
                                            <div class="col-md-4">Address</div>
                                            <div class="col-md-8 text-end">
                                                <span class="addressOutput"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-1">
                                        <a href="/dashboard" class="default-button-white" data-link><img src="assets/img/left-arrow.png" /></a>
                                    </div>
                                    <div class="col-5"></div>
                                    <div class="col-6">
                                        <a href="/update-profile" class="default-button-green">Edit Profile</a>
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