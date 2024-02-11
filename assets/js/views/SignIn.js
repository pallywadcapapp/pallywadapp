import DefaultViewNoAuth from "./DefaultViewNoAuth.js";

export default class extends DefaultViewNoAuth {
    constructor(params) {
        super(params);
        this.setTitle("Sign In | Pallywad Capital ");
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
                                    <h3>Sign In</h3>
                                    <p>Log in and stay connected</p>
                                </div>
                                <div class="form-group px-7 mt-5">
                                    <input type="email" 
                                        required class="form-control" 
                                        id="email" 
                                        name="email"
                                        placeholder="Email or Phone">
                                   
                                </div>
                                <div class="form-group px-7 mt-3">
                                    <input type="password" required class="form-control" id="password" name="password" placeholder="Password">
                                    
                                    <span toggle="#password" class="fa fa-eye-slash eye-icon toggle-password"></span>
                                    <p class="mt-2"><a href="/forgot-password">Forgot password?</a></p>
                                </div>
                                
                                <div class="form-group mt-2 px-7">
                                    <button id="login" class="continue-button">Sign In</button>
                                    <div class="mt-3">Don't have an account?  <a href="https://pallywad.com/onboarding" data-link><b>Sign Up</b></span></a></div>
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