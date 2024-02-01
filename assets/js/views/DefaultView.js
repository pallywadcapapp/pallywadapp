import Auth from "../authentication/Auth.js";
export default class {
    constructor(params) {
        this.params = params;
        const auth = new Auth();
        this.userFirstname = localStorage.getItem("firstname");
        this.userLastname = localStorage.getItem("lastname");
        this.userEmail = localStorage.getItem("email");
        this.currency = "&#8358;";
    }

    setTitle(title) {
        document.title = title;
    }

    async getHtml() {
        return "";
    }
}