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
                                <div id="updateBusiness" class="white-bg rounded div-shadow signin-form">
                                    <form id="updateBusinessForm">
                                        <div class="text-center mt-3">
                                            <div class="row">
                                                <div class="col-md-1">
                                                    <a href="/business-information" class="default-button-white" data-link><img src="assets/img/left-arrow.png" /></a>
                                                </div>
                                                <div class="col-md-11">
                                                    <h3>Update Business Information</h3>
                                                    <p>Complete the form below to update your business details.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group mt-3">
                                            
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Business Name <span class="text-danger">*</span></label>
                                                    <input type="text" class="form-control" id="name" name="name" plcaeholder="Business Name" required/>
                                                </div>
                                                <div class="col-md-6">
                                                    <label>Business Type <span class="text-danger">*</span></label>
                                                    <input type="text" class="form-control" id="type" name="type" plcaeholder="Business Type" required/>
                                                </div>
                                            </div>
                                            
                                        </div>

                                        <div class="form-group mt-3">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Business Address <span class="text-danger">*</span></label>
                                                    <textarea class="form-control" id="address" name="address" plcaeholder="Business Address" required ></textarea>
                                                </div>
                                                <div class="col-md-6">
                                                    <label>Landmark </label>
                                                    <input type="text" class="form-control" id="landmark" name="landmark"  placeholder="Landmark" />
                                                </div>
                                            </div>
                                        </div>
                                       
                                        <div class="form-group mt-3">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>CAC Registration Number </label>
                                                    <input type="text" class="form-control" id="cacno" name="cacno" plcaeholder="CAC Number" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group mt-4">
                                            <button id="update-business-info" class="continue-button">Update Information</button>
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