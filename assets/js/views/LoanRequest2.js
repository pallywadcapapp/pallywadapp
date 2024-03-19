import DefaultView from "./DefaultView.js";

export default class extends DefaultView {
    constructor(params) {
        super(params);
        this.setTitle("Loan Request  | PallyWad Capital ");
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
                                    <form id="kyc1-form-step2">
                                        

                                        <div class="row text-center">
                                            <h3>Add Collateral Document</h3>
                                            <div class="text-center illustration-space-3">
                                            
                                                <div id="uploadedFilesPreview" class="table table-striped table-hover"> 
                                                </div>
                                            </div>
                                            <a href="javascript:;" id="upload-collateral-document" 
                                                class="continue-button-5 mb-3" style="color:#24488F !important"><i class="fa fa-upload"></i> Upload Collateral Document(s)</a>
                                                <div class="text-start"><label >Type Of Collateral</label></div>
                                                <select id="collateralType"></select>
                                                <div class="text-left">
                                                <div style="margin:3%" id="collateralTypeDescription" class="loan-description-box">
                                                    Description
                                                </div>
                                                </div>
                                            <div class="text-start mt-2"><label >Estimated Value</label></div>
                                            <div class="input-group">
                                                <input type="number" id="estimatedValue" class="form-control" placeholder="Estimated value of Collateral in Naira" />
                                                <div class="input-group-append" style="width:30%; align:justify">
                                                    <span class="input-group-text" id="inputGroup-sizing-lg" style="height:100%;"> <b>&#8358;</b></span>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="text-start mt-2"><label class="collat">Car</label> Details</div>
                                                <div class="input-group">
                                                    <div class="input-group-append" style="align:justify">
                                                        <span class="input-group-text" id="inputGroup-sizing-lg" style="height:100%;"> <b class="collatType">Make</b></span>
                                                    </div>
                                                    <input type="text" id="make" class="form-control" placeholder="car make" />
                                                    
                                                </div>
                                                <div class="input-group car">
                                                    <div class="input-group-append" style="align:justify">
                                                        <span class="input-group-text" id="inputGroup-sizing-lg" style="height:100%;"> <b>Model</b></span>
                                                    </div>
                                                    <input type="text" id="model" class="form-control" placeholder="car model" />
                                                    
                                                </div>
                                                <div class="input-group car">
                                                    <div class="input-group-append" style="align:justify">
                                                        <span class="input-group-text" id="inputGroup-sizing-lg" style="height:100%;"> <b>Year</b></span>
                                                    </div>
                                                    <input type="text" id="year" class="form-control" placeholder="car year" />
                                                    
                                                </div>
                                            </div>
                                            <div class="text-start mt-2"><label >Other Details</label></div>
                                            <textarea type="text" id="otherdetails" class="form-control mb-2" placeholder="Other important details about Collateral"></textarea>
                                            
                                        </div>
                                        <div class="row" style="min-height:50px">
                                            <div class="col-md-8" style="min-height:30px">
                                                <span style="color: #ADADAD;"> Loan requested should not exceed ${localStorage.getItem('collateralRate')}% of collateral provided.
                                            Minimum expected collateral value: .</span>
                                            </div>
                                            <div class="col-md-4" style="background-color: #F4F4F4; border-radius:5px; width:124px;min-height:30px; margin:10px">
                                                <span><b>${this.currency}
                                                ${number_format((parseFloat(localStorage.getItem('amount')) * 100 /parseFloat(localStorage.getItem('collateralRate'))).toFixed(2))}
                                                </b></span>
                                            </div> 
                                        </div>
                                        <br/>
                                     

                                        <div id="loan-details-area" class="form-group" style="margin-top:20px;">
                                            <a href="javascript:;" id="preview-loan-details" class="continue-button-2">Save & Preview</a>
                                            
                                        </div>


                                        <input type="file" class="d-none" id="selectfile" />
                                        <div class="privacy-area text-center mt-3">
                                            By clicking the “start” button you agree to our
                                            <a target="_blank" href="https://pallywad.com/terms">User Terms and Conditions and</a> <a target="_blank" href="https://pallywad.com/privacy">our Privacy Notice.</a>
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