/* ---------------- DEFAULT HEADER -------------------*/ 
class DefaultHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML  = `
        <header>
            <div class="container">
                <div class="row">
                    <nav class="navbar navbar-expand-lg">
                        <div class="container-fluid d-flex align-items-center justify-content-center">
                            <a class="navbar-brand translate-top-50 transition-100 transition-delay-200" href="/" data-link><img src="assets/img/padwally-logo.png" /></a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                                    <li class="nav-item ">
                                        <a class="nav-link" aria-current="page" href="/" data-link>Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/loans" data-link>Loans</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">About Us</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Contact Us</a>
                                    </li>
                                </ul>
                                <div>
                                    <a href="/sign-in" class="default-button default-transparent-button" data-link>Sign In</a>
                                    <a href="/onboarding" class="default-button" data-link>Get Started</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
        `
    }
}

customElements.define('default-header', DefaultHeader)


/* ---------------- DEFAULT FOOTER  -------------------*/ 
class DefaultFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML  = `
        <footer class="py-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-9 col-8 pe-5">
                        <h4>Meet PallyWad Capital, A dynamic and forward-thinking lending institution</h4>
                    </div>
                    <div class="col-md-3 col-4 text-end">
                        <p class="mt-2">
                            <a href="/onboarding" class="default-button-white">Get Started</a>
                        </p>
                    </div>
                    <div class="col-md-12 mt-2">
                        <hr class="footerline">
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-md-4 col-12">
                        <img src="assets/img/pallywad-logo-white.png" class="img-fluid" />
                        <p class="fueling-dreams">
                            Fueling Dreams, Powering Growth
                        </p>
                    </div>
                    <div class="col-md-8 col-12">
                        <div class="row">
                            <div class="col-md-4">
                                <p class="footer-link-title">PAGES</p>
                                <ul class="footer-link">
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Loans</a></li>
                                    <li><a href="">About Us</a></li>
                                    <li><a href="">Contact Us</a></li>
                                </ul>
                            </div>

                            <div class="col-md-4">
                                <p class="footer-link-title">ACCOUNT</p>
                                <ul class="footer-link">
                                    <li><a href="">Log in</a></li>
                                    <li><a href="">Sign up</a></li>
                                </ul>
                            </div>

                            <div class="col-md-4">
                                <p class="footer-link-title">COMPANY</p>
                                <ul class="footer-link">
                                    <li><a href="">Terms of service</a></li>
                                    <li><a href="">Privacy policy</a></li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                    <!--<div class="col-md-3 col-12">
                        <p class="footer-link-title">NEWSLETTER</p>
                        <p class="footer-newsletter-desc">Subscribe to stay in touch, so as to get 
                            updates on our lending structure improvements
                        </p>
                        <div>
                            <form>
                                <textarea rows="3" class="footer-newsletter-form" placeholder="Enter your email address"></textarea>
                                <a href="" class="default-button-green">Get Started</a>
                            </form>
                        </div>
                    </div>-->
                    <div class="col-md-12 mt-2">
                        <hr class="footerline">
                    </div>
                    <div class="col-md-9">
                        &copy; 2024 PallyWad Capital. All rights reserved.
                    </div>
                    <div class="col-md-3">
                        <ul class="footer-social-links">
                            <li class="translate-top-50 transition-100 transition-delay-100"><a href="#" title="linkedin"><i class="fab fa-instagram"></i></a></li>
                            <li class="translate-top-50 transition-100 transition-delay-200"><a href="#" title="twitter"><i class="fab fa-x-twitter"></i></a></li>
                            <li class="translate-top-50 transition-100 transition-delay-300"><a href="#" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
                            <li class="translate-top-50 transition-100 transition-delay-400"><a href="#" title="Facebook"><i class="fab fa-linkedin"></i></a></li>
                            <li class="translate-top-50 transition-100 transition-delay-500"><a href="#" title="google"><i class="fab fa-youtube"></i></a></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        `
    }
}

customElements.define('default-footer', DefaultFooter)


/* ---------------- ONBOARDING HEADER -------------------*/ 
class OnboardingHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML  = `
        
            <div class="container mt-4">
                <div class="row">
                    <div class="col-md-12 col-12 text-center">
                        <a class=" navbar-brand translate-top-50 transition-100 transition-delay-200" href="/" data-link>
                            <img src="assets/img/padwally-logo.png" />
                        </a>
                    </div>
                </div>
            </div>
        
        `
    }
}

customElements.define('onboarding-header', OnboardingHeader)

/* ---------------- USER DASHBOARD HEADER -------------------*/ 
class DashboardHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML  = `
            <div class="users-dashboard-header">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12 col-12 text-end">
                            <div class="dropdown user-drop-down">
                            <!--<button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            
                                <img src="assets/img/alert-bell.png" class="notification-img me-2" />
                                <span class="notification-circle" style="display:block !important;"></span>
                            </button>-->
                            <button type="button" class="icon-button dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="material-icons">notifications</span>
                            <span class="icon-button__badge">0</span>
                          </button>
                                <ul class="dropdown-menu" id="notbar">
                                    <li><a class="dropdown-item" href="/profile"><i class="fa fa-user-o"></i> Profile</a></li>
                                </ul>
                            </div>
                           
                            
                            <div class="dropdown user-drop-down">
                                <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="user-circle"><img src="assets/img/icon-set.png"></span> 
                                    <span class="user-name-label">${localStorage.getItem("firstname") + " " + localStorage.getItem("lastname")}</span>
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/profile"><i class="fa fa-user-o"></i> Profile</a></li>
                                    <li><a class="dropdown-item" href="/settings"><i class="fa fa-cog"></i> Settings</a></li>
                                    <li><a class="dropdown-item" href="/logout"><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        `
    }
}

customElements.define('dashboard-header', DashboardHeader)

/* ---------------- LEFT SIDEBAR -------------------*/ 
class LeftSidebar extends HTMLElement {
    connectedCallback(){
        this.innerHTML  = `
            <div class="left-sidebar">
                <a class="navbar-brand translate-top-50 transition-100 transition-delay-200" href="/" data-link>
                    <img src="assets/img/padwally-logo.png" />
                </a>
                <ul class="mt-3 sidebar-links">
                    <li><a href="/dashboard" ><img src="assets/img/overview.png" /> Overview</a></li>
                    <li><a href="/loans"><img src="assets/img/loans.png" /> Loans</a></li>
                    <li><a href="/payment-history"><img src="assets/img/payment-history.png" /> Payment History</a></li>
                </ul>


                <ul class="sidebar-links place-at-botttom">
                    <li><a href="/help" data-link><img src="assets/img/overview.png" /> Help & Support</a></li>
                    <li><a href="/settings" data-link><img src="assets/img/loans.png" /> Setting</a></li>
                </ul>
                
            </div>
        
        `
    }
}

customElements.define('left-sidebar', LeftSidebar)