import DefaultView from "./DefaultView.js";

export default class extends DefaultView {
    constructor(params) {
        super(params);
        this.setTitle("Onboarding User - Getting Started | Pallywad Capital ");
    }

    async getHtml() {
        return `
        <div id="main" class="has-animation">
            <onboarding-header></onboarding-header>
            <div class="container">
                <div class="row">
                    <div class="col-md-7 col-12 ms-auto me-auto mt-4">
                        <div id="onboarding-forms" class="white-bg rounded div-shadow onboarding-form ">
                        
                            <form id="step-2"  >
                                <div class="text-center mt-3 px-8">
                                    <a href="/onboarding" data-link><img src="../assets/img/top-continue-graphic.png" class="onboard-icon" /></a>
                                    <h3>Let's get to know you</h3>
                                    <p>Personal information you give help us to
                                    know you better.</p>
                                </div>
                                <div class="form-group px-7 mt-3">
                                    <label>Firstname <span class="text-danger">*</span></label>
                                    <input type="text" required class="form-control" id="firstname" name="firstname" placeholder="Your firstname">
                                    <span class="user-icon fa fa-user-o"></span>
                                </div>
                                <div class="form-group px-7 mt-3">
                                    <label>Lastname <span class="text-danger">*</span></label>
                                    <input type="text" required class="form-control" id="lastname" name="lastname" placeholder="Your lastname">
                                    <span class="user-icon fa fa-user-o"></span>
                                </div>
                                <div class="form-group px-7 mt-3">
                                    <label>Other names <span class="text-danger">*</span></label>
                                    <input type="text" required class="form-control" id="othernames" name="othernames" placeholder="Other names if any">
                                    <span class="user-icon fa fa-user-o"></span>
                                </div>
                                <div class="form-group px-7 mt-3">
                                    <label>Mobile No<span class="text-danger">*</span></label>
                                    <input type="text" required class="form-control" id="phoneNo" name="phoneNo" placeholder="Valid phone number">
                                    <span class="phone-icon fa-solid fa-phone"></span>
                                </div>
                                
                                <div class="form-group mt-5 px-7">
                                    <button id="submit-onboarding" class="continue-button">Continue</button>
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
        `
    }
}