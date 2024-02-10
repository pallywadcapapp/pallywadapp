import DefaultViewNoAuth from "./DefaultViewNoAuth.js";

export default class extends DefaultViewNoAuth {
    constructor(params) {
        super(params);
        this.setTitle("Forgot Password | Pallywad Capital ");
    }

    async getHtml() {
        return `
        <div id="main" class="has-animation">
            <onboarding-header></onboarding-header>
            <div class="container">
                <div class="row">
                    <div class="col-md-7 col-12 ms-auto me-auto mt-4">
                        <div id="onboarding-forms" class="white-bg rounded div-shadow signin-form ">
                            <form id="step-1"  >
                                <div class="text-center mt-3 px-8">
                                    <img src="../assets/img/top-continue-3.png" class="onboard-icon" />
                                    <h3>Set Password</h3>
                                </div>
                                <div class="form-group px-7 mt-5">
                                    <input type="password" 
                                        required class="form-control" 
                                        id="password" 
                                        name="password"
                                        placeholder="New Password">
                                   
                                </div>
                                <div class="form-group px-7 mt-5">
                                    <input type="password" 
                                        required class="form-control" 
                                        id="confirmpassword" 
                                        name="confirmpassword"
                                        placeholder="Confirm Password">
                                   
                                </div>
                                
                                <div class="form-group mt-2 px-7">
                                    <button id="resetPassword" class="continue-button">Reset Password</button>
                                    <div class="mt-3">Sign in?  <a href="/sign-in" data-link><b>Sign In</b></span></a></div>
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