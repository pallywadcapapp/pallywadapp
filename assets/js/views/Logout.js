import Auth from "../authentication/Auth.js";
export default class {
    constructor(){
        const auth = new Auth();
        auth.logout();
        localStorage.clear();
    }
}