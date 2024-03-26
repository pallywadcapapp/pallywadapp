import DefaultView from "./DefaultView.js";

export default class extends DefaultView {
    constructor(params) {
        super(params);
        this.setTitle("Loan Request | PallyWad Capital ");
    }

    async getHtml() {
        return `
        <div id="main" class="has-animation">
            <dashboard-header></dashboard-header>
            <div class="dashboard-area">
                <left-sidebar></left-sidebar>
                <div class="right-pane">
                    
                    <div id="loanArea" class="container loanArea">
                        <div class="hero">
                            <div class="container-fluid">
                                <div class="row ">
                                    <div class="col-md-12 col-12 pe-5 ps-8 text-center">
                                        <p class="about-title">LOAN REQUEST</p>
                                        <h3 class="mt-3 translate-bottom-50 transition-100 transition-delay-600">
                                            Seamless loan application process.
                                        </h3>
                                        <p class="sub-title translate-bottom-50 transition-100 transition-delay-800">
                                            Fully online experience. 
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>


                        <div class="container">
                        
                            <div class="row">
                                <div class="col-md-10 col-12 ms-auto me-auto relative">
                                    <div class="nav-arrow-areas justify-content-end" >
                                       
                                        <a href="/loan-request"><img src="assets/img/close-icon.png" /></a>
                                    </div>
                                    <div id="kyc3-form" class="white-bg rounded div-shadow upload-form ">
                                        <form id="kyc3-form-step2" >
                                            <div class="text-center ">
                                                <h3>Select Loan Type</h3>
                                                <select id="loanType" class="form-select" aria-label="Default select example">
                                                    <option selected>Select Loan Type</option>
                                                </select>
                                            </div>
                                            <div class="text-left">
                                                <div style="margin:3%" id="loanTypeDescription" class="loan-description-box">
                                                    Description
                                                </div>
                                                <div class="form-group mt-3 mb-4" hidden>
                                                <label><b>Minimum Interest Rate(%)</b></label><br>
                                                <input id="interestrate" disabled type="number" />
                                                </div>
                                                <input type="hidden" id="category" />
                                                <input type="hidden" id="collateralPercentage" />
                                                <input type="hidden" id="pindex" />
                                            </div>
                                            <div class="form-group mt-3 mb-4 busLoanView">
                                                <label><b>Name of Business</b></label><br>
                                                <input id="businessname" type="text" placeholder="Enter the name of business" />
                                            </div>
                                            <div class="form-group mt-3 mb-4 busLoanView">
                                                <label><b>Industry Sector</b></label><br>
                                                <input id="sector" type="text" placeholder="Enter the industry sector" />
                                            </div>
                                            <div class="form-group mt-3 mb-4 busLoanView">
                                                <label><b>How long in Business (Months)</b></label><br>
                                                <input id="age" type="number" placeholder="Enter how long you've been in business" />
                                            </div>
                                            <div class="form-group mt-3 mb-4">
                                                <label><b>Loan Amount Requested</b></label><br>
                                                <input id="loanAmountRequested" type="number" placeholder="Enter the loan amount your are requesting" />
                                            </div>
                                            <div class="form-group mt-3 mb-4" hidden>
                                                <label><b>Interest Amount (Monthly)</b></label><br>
                                                <input id="interest" type="number" disabled/>
                                            </div>
                                            <div class="form-group mt-3 mb-4">
                                                <label><b>Preferred Interest Rate (Monthly)</b></label><br>
                                                <input id="preferredRate" type="number"/>
                                            </div>
                                            <div class="form-group mt-3 mb-4">
                                                <label><b>Preferred Tenor (1 - 12 Months)</b></label><br>
                                                <input id="preferredTenor" type="number"/>
                                            </div>
                                            <div class="form-group mt-3 mb-4">
                                                <label><b>Purpose of the Loan</b></label><br>
                                                <textarea class="form-control" id="purpose"></textarea>
                                            </div>
                                            <div class="form-group mt-3 mb-4">
                                                <label><b>Repayment Plan</b></label><br>
                                                <select id="repaymentPlan" class="form-select" aria-label="Default select example">
                                                    <option selected>Select Repayment Plan</option>
                                                    <option>Reducing Balance </option>
                                                    <option>Lumpsum at end of tenure</option>
                                                </select>
                                            </div>
                                            <div class="form-group mt-3 mb-4" hidden>
                                            <label><b>Select Proof Document(s) Uploaded</b></label>
                                            <div id="uploadedDocumentList">
                                                <p class="placeholder-glow">
                                                    <span class="placeholder col-6"></span><br>
                                                    <span class="placeholder col-7"></span><br>
                                                    <span class="placeholder col-9"></span><br>
                                                    <span class="placeholder col-7"></span><br>
                                                    <span class="placeholder col-4"></span>
                                                </p>
                                            </div></div>

                                           
                                            <div class="form-group mt-5">
                                                <a href="javascript:;" id="continue-loan-button-1" class="continue-button-2" >Continue</a>
                                            </div>

                                            <div class="privacy-area text-center mt-3">
                                                By clicking the “start” button you agree to our
                                                <a target="_blank" href="https://pallywad.com/terms">Terms of service.</a> and <a target="_blank" href="https://pallywad.com/privacy">Privacy policy.</a>
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