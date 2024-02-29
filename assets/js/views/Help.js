import DefaultView from "./DefaultView.js";

export default class extends DefaultView {
    constructor(params) {
        super(params);
        this.setTitle("Help & Support | PallyWad Capital ");
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
                                <h3>Help & Support</h3>
                            </div>
                        </div>
                        <div class="row">
                        <p class="about-title mt-4">Popular Help Resources</p>
                        <div class=" p-2">
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    How can I get a loan from PallyWad Capital?
                                    </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body"> Go to <code> <a href="https://www.pallywad.com" data-link target="_blank">www.pallywad.com</a></code> and sign-up to start your loan application. See requirements for a loan before you start.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    What are the requirements for a loan?
                                    </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">See Personal & Business Loan Requirements: <code> <a href="https://www.pallywad.com/loanrequirement" data-link target="_blank">here</a></code></div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    What is the interest rate? 
                                    </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Interest rates vary depending on the loan amount, tenure and customers’ credit profile.  </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseThree">
                                    How long is the tenure? 
                                    </button>
                                    </h2>
                                    <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Loan periods vary from 1 to 12 months depending on the customer needs and loan profile. </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseThree">
                                    What is the repayment frequency? 
                                    </button>
                                    </h2>
                                    <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">

                                        <ul>
                                            <li>Interest is repaid monthly throughout the loan period.</li>
                                            <li>Capital can be repaid at any time during the loan period; there is no penalty for early repayment as we understand 
                                            that customers’ financial plans may change so they are welcome to pay back their loans anytime, even before loan 
                                            maturity. Interest will be computed on a reducing balance method. Capital repayments can be made: 
                                                <ul>
                                                    <li>in instalments  </li>
                                                    <li>lump-sum</li>
                                                </ul>
                                            </li>
                                        </u>
                                    </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseThree">
                                    What is Reducing Balance Method?  
                                    </button>
                                    </h2>
                                    <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">The Reducing Balance Method is where the interest to be paid by the customer is calculated based on the outstanding loan amount after periodic repayments. </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseThree">
                                    What else do I need to know?
                                    </button>
                                    </h2>
                                    <div id="flush-collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <ul>
                                            <li>Experience is fully online until the point of collateral delivery.</li>
                                            <li>Personal Loans Terms & Conditions and Business Loans Terms & Conditions (Links will be provided on the WebApp) </li>
                                        </ul>
                                    </div>
                                    </div>
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