import Dashboard from "./views/Dashboard.js";
import NotFound from "./views/NotFound.js";
import Loans from "./views/Loans.js";
import UpdateProfile from "./views/UpdateProfile.js";
import UploadDocuments from "./views/UploadDocuments.js";
import Kyc1 from "./views/Kyc1.js";
import Kyc2 from "./views/Kyc2.js";
import Kyc3 from "./views/Kyc3.js";
import KycComplete from "./views/KycComplete.js";
import PreviewLoanRequest from "./views/PreviewLoanRequest.js";
import Signin from "./views/SignIn.js";
import Logout from "./views/Logout.js";
import LoanRequest from "./views/LoanRequest.js";
import LoanRequest2 from "./views/LoanRequest2.js";
import LoanRequestComplete from "./views/LoanRequestComplete.js";


const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        {path:"/", view: Dashboard},
        {path:"/dashboard", view: Dashboard},
        {path:"/404", view: NotFound},
        {path:"/loans" , view: Loans },
        {path:"/update-profile" , view: UpdateProfile },
        {path:"/upload-documents" , view: UploadDocuments },
        {path:"/kyc-1" , view: Kyc1 },
        {path:"/kyc-2" , view: Kyc2 },
        {path:"/kyc-3" , view: Kyc3 },
        {path:"/kyc-complete" , view: KycComplete },
        {path:"/loan-request" , view: LoanRequest },
        {path:"/loan-request2" , view: LoanRequest2 },
        {path:"/loan-request-complete" , view: LoanRequestComplete },
        {path:"/preview-loan-request" , view: PreviewLoanRequest },
        {path:"/sign-in" , view: Signin },
        {path:"/logout" , view: Logout }
    ]

    //check each route for a potential match and redirect
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        }
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);
    
    //if match is not found
    if(!match)
    {
        match = {
            route: routes[1],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));

    // AOS.init();

    document.querySelector('#app').innerHTML = await view.getHtml();

    //console.log(match.route.view());
}

window.addEventListener("popstate", router);

document.addEventListener('DOMContentLoaded', ()=> {
    document.body.addEventListener("click", e=> {
        if(e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
})

