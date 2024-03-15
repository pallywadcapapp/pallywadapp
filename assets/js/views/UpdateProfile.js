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
                        <div class="row">
                            <div class="col-md-10 col-12 ms-auto me-auto mb-4">
                            <div id="errorNotification" class="border border-danger hide p-2 mb-2 rounded"></div>
                                <div id="updateProfile" class="white-bg rounded div-shadow signin-form">
                                    <form id="updateProfileForm" method="GET" >
                                        <div class="text-center ">
                                            <h3>Update Profile</h3>
                                            <p>Complete the form below to update your profile.</p>
                                        </div>
                                        <div class="form-group mt-3">
                                            <div class="row">
                                                <div class="small-12 medium-2 large-2 columns">
                                                <p class="text-center">Click on the image to upload profile picture.</p>
                                                    <div class="text-center circle">
                                                        <img class="profile-pic upload-buttons" src="assets/img/user-pic.png" />
                                                     <div class="p-image">
                                                    <!--<i class="fa fa-2x fa-camera upload-buttons"></i>-->
                                                    <input class="file-upload" type="file" accept="image/*"/>
                                                </div>
                                                     </div>
                                                </div>
                                                
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Firstname <span class="text-danger">*</span></label>
                                                    <input disabled type="text" class="form-control" id="firstname" name="firstname">
                                                </div>
                                                <div class="col-md-6">
                                                    <label>Lastname <span class="text-danger">*</span></label>
                                                    <input disabled type="text" class="form-control" id="lastname" name="lastname">
                                                </div>
                                            </div>
                                            
                                        </div>

                                        <div class="form-group mt-3">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Othernames </label>
                                                    <input disabled type="text" class="form-control" id="othernames" name="othernames">
                                                </div>
                                                <div class="col-md-6">
                                                    <label>Date of Birth <span class="text-danger">*</span></label>
                                                    <input type="text" class="form-control" id="dob" name="dob"  placeholder="mm/dd/yyyy" required>
                                                </div>
                                            </div>
                                        </div>
                                       
                                        <div class="form-group mt-3">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Phone </label>
                                                    <input type="text" class="form-control" id="phoneNumber" name="phoneNumber">
                                                </div>
                                                <div class="col-md-6">
                                                    <label>Gender <span class="text-danger">*</span></label>
                                                    <select id="sex" required name="sex" class="form-control">
                                                        <option value="">Select Gender</option>
                                                        <option>Male</option>
                                                        <option>Female</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group mt-3">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Email </label>
                                                    <input type="email" disabled class="form-control disabled" id="email" name="email">
                                                </div>
                                                <div class="col-md-6">
                                                    <label>Employment Status </label>
                                                    <select id="employmentStatus" name="employmentStatus" class="form-control">
                                                        <option value="">Select Status</option>
                                                        <option>Employed</option>
                                                        <option>Self Employed</option>
                                                        <option>Unemployed</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                       
                                        <div class="form-group mt-3">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>BVN  <span class="text-danger">*</span></label>
                                                    <input type="text" class="form-control" required id="bvn" name="bvn">
                                                </div>
                                                <div class="col-md-6">
                                                    <label>National Identity No (NIN) <span class="text-danger">*</span></label>
                                                    <input type="text" class="form-control" required id="nin" name="nin">
                                                </div>
                                            </div>
                                        </div>
                                       
                                        <div class="form-group mt-3">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>House No  <span class="text-danger">*</span></label>
                                                    <input type="text" class="form-control" required id="houseNo" name="houseNo">
                                                </div>
                                                <div class="col-md-6">
                                                    <label>Street <span class="text-danger">*</span></label>
                                                    <input type="text" class="form-control" required id="street" name="street">
                                                </div>
                                            </div>
                                        </div>
                                       
                                        <div class="form-group mt-3">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>City  <span class="text-danger">*</span></label>
                                                    <input type="text" class="form-control" required id="city" name="city">
                                                </div>
                                                <div class="col-md-6">
                                                    <label>Local Government Area <span class="text-danger">*</span></label>
                                                    <input type="text" class="form-control" required id="lga" name="lga">
                                                </div>
                                            </div>
                                        </div>
                                       
                                        <div class="form-group mt-3">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Closest Bus-Stop</label>
                                                    <input type="text" class="form-control" id="closest" name="closest">
                                                </div>
                                                <div class="col-md-6">
                                                    <label>Nearest LandMark</label>
                                                    <input type="text" class="form-control" id="landmark" name="landmark">
                                                </div>
                                            </div>
                                        </div>

                                        <!--<div class="form-group mt-3">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <label>Address </label>
                                                    <textarea class="form-control" required id="address" name="address"></textarea>
                                                </div>
                                                
                                            </div>
                                        </div>-->

                                        <div class="form-group mt-4">
                                            <button id="update-profile" class="continue-button">Update Profile</button>
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
            
        
            <default-footer></default-footer>

        </div>
        `;

        
    }
}