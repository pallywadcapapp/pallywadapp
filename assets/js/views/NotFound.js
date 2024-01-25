import DefaultView from "./DefaultView.js";

export default class extends DefaultView {
    constructor(params) {
        super(params);
        this.setTitle("Error 404 | Page not found ");
    }

    async getHtml() {
        return `
        <div class="text-center mt-5">
            <h3>Page not found</h3>
            <p>Sorry, the page you requested could not be found, please try again.</p>
        </div>
        `;
    }
}