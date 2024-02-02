import DefaultViewNoAuth from "./DefaultViewNoAuth.js";

export default class extends DefaultViewNoAuth {
    constructor(params) {
        super(params);
        this.setTitle("Error 404 | Page not found ");
    }

    async getHtml() {
        return `
        <div class="text-center mt-5">
            <img src="assets/img/404.png" />
            <p>Sorry, the page you requested could not be found, please <a href="/dashboard">click here</a> to return to the dashboard.</p>
        </div>
        `;
    }
}