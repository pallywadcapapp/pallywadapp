export default class Auth {
    constructor(){
        document.querySelector("body").style.display = "none";
        const auth = localStorage.getItem("isLoggedIn");
        this.validateLogin(auth);
    }

    validateLogin(auth){
        if(auth != 1){
            window.location.replace("/sign-in");
        }
        else {
            document.querySelector("body").style.display = "block";
        }
    }

    logout(){
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("token");
        localStorage.removeItem("expiry");
        window.location.replace("/sign-in");
    }
    
}