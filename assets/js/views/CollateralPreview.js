import DefaultView from "./DefaultView.js";

export default class extends DefaultView {
    constructor(params) {
        super(params);
        this.setTitle("Collateral Preview | PallyWad Capital ");
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
                                <h3>Collateral Preview</h3>
                            </div>
                        </div>
                        <div class="row">
                        <p class="about-title mt-4"></p>
                        <div id="collateralPreviewArea" class=" mt-2">
                            <div id="collPrev">
                                <p class="placeholder-glow mb-2">
                                    <span class="placeholder col-3"></span>
                                    <span class="placeholder col-6"></span>
                                    <span class="placeholder col-3"></span>
                                </p>
                                <p class="placeholder-glow">
                                    <span class="placeholder col-3"></span>
                                    <span class="placeholder col-6"></span>
                                    <span class="placeholder col-3"></span>
                                </p>
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