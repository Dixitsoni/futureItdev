import React from 'react'

function Header() {
    return (
        <header id="header" class="fixed-top ">
            <div class="container d-flex align-items-center">
                <h1 class="logo me-auto"><a href="/">Bright Future & IT Solutions</a></h1>
                {/* <!-- <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>--> */}

                <nav id="navbar" class="navbar mx-4">
                    <ul>
                        <li><a class="nav-link scrollto active" href="/">Home</a></li>
                        <li><a class="nav-link scrollto" href="#about">About</a></li>
                        <li><a class="nav-link scrollto" href="#services">Services</a></li>
                        <li><a class="nav-link   scrollto" href="#portfolio">Portfolio</a></li>
                        <li><a class="nav-link scrollto" href="#team">Team</a></li>
                        <li><a class="nav-link scrollto" href="#intership_container">Internship / Training</a></li>
                        <li class="dropdown"><a href="#">Hire Developer</a></li>
                        <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
                    </ul>
                    <i class="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
    )
}

export default Header