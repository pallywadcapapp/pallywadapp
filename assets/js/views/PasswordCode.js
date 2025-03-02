import DefaultViewNoAuth from "./DefaultViewNoAuth.js";

export default class extends DefaultViewNoAuth {
    constructor(params) {
        super(params);
        this.setTitle("Password Code | PallyWad Capital ");
    }

    async getHtml() {
        return `
        <div id="main" class="has-animation">
            <onboarding-header></onboarding-header>
            <div class="container">
                <div class="row">
                    <div class="col-md-9 col-12 ms-auto me-auto mt-4">
                        <div id="onboarding-forms" class="white-bg rounded div-shadow onboarding-form ">
                        
                            <form id="step-2">
                                <div class="text-center mt-3">
                                    <a href="/onboarding" data-link><img src="../assets/img/top-continue-graphic.png" class="onboard-icon" /></a>
                                    <h3>Let's verify your email</h3>
                                    <p>A validation code has been sent to the email you provided in the previous page. 
                                    If you did not get the code or you entered the wrong email, <a href='javascript:;' onclick="goBack(1);" >click here</a> to return to the previous page.</p>
                                </div>
                                <div class="text-center mt-3">
                                    <label>Verification Code<span class="text-danger">*</span></label><br>
                                    <input type="text" class="pin" maxlength="6" id="verify_pin" name="verify_pin">
                                    
                                </div>
                                
                                
                                <div class="form-group mt-5 px-7">
                                    <button id="verifyPasswordCode" class="continue-button">Verify Code</button>
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
        `
    }
}