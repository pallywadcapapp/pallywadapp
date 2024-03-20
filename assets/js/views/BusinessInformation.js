import DefaultView from "./DefaultView.js";

export default class extends DefaultView {
    constructor(params) {
        super(params);
        this.setTitle("Business Information | PallyWad Capital ");
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
                                <h3>Business Information</h3>
                            </div>
                            <div class="col-md-4 text-center ps-5">
                            </div>
                        </div>
                        <div class="row">
                        
                            <div id="updateBusiness" class="deeper-grey p-5 mt-3 rounded mb-5">
                                <p class="about-title mb-3">Business Information</p>
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row mb-2">
                                            <div class="col-md-4">Business Name</div>
                                            <div class="col-md-8 text-end">
                                                <span class="nameOutput"></span>
                                            </div>
                                        </div>
                                        <div class="row mb-2">
                                            <div class="col-md-4">Business Type</div>
                                            <div class="col-md-8 text-end"> <span class="typeOutput"></span></div>
                                        </div>
                                        <div class="row mb-2">
                                            <div class="col-md-4">Business Sector</div>
                                            <div class="col-md-8 text-end"> <span class="business_sectorOutput"></span></div>
                                        </div>
                                        <div class="row mb-2">
                                            <div class="col-md-4">Business Service/Product</div>
                                            <div class="col-md-8 text-end"> <span class="business_serviceOutput"></span></div>
                                        </div>
                                        <div class="row mb-2">
                                            <div class="col-md-4">Business Phone No</div>
                                            <div class="col-md-8 text-end"> <span class="business_phoneNoOutput"></span></div>
                                        </div>
                                        <div class="row mb-2">
                                            <div class="col-md-4">Business Email</div>
                                            <div class="col-md-8 text-end"> <span class="business_emailOutput"></span></div>
                                        </div>
                                       
                                        <div class="row mb-2">
                                            <div class="col-md-4">Business Address</div>
                                            <div class="col-md-8 text-end"> <span class="businessAddressOutput"></span></div>
                                        </div>
                                        <div class="row mb-2">
                                            <div class="col-md-4">Landmark</div>
                                            <div class="col-md-8 text-end"> <span class="landmarkOutput"></span></div>
                                        </div>
                                        <div class="row mb-2">
                                            <div class="col-md-4">CAC No</div>
                                            <div class="col-md-8 text-end"> <span class="cacOutput"></span></div>
                                        </div>
                                        <div class="row mb-2">
                                            <div class="col-md-4">Tax ID No</div>
                                            <div class="col-md-8 text-end"> <span class="tinOutput"></span></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-1">
                                        <a href="/dashboard" class="default-button-white" data-link><img src="assets/img/left-arrow.png" /></a>
                                    </div>
                                    <div class="col-8"></div>
                                    <div class="col-3">
                                        <a href="/update-business" class="default-button-blue">Edit Business Information</a>
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