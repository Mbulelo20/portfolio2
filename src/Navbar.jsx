import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav" style={{opacity:'.7'}}>
                <div className="container">
                <div className="navbar-brand js-scroll-trigger" style={{color:'#4FBFA8', fontWeight:'bold'}}>Mbulelo Pani .</div>
                    
                    <button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ml-auto">
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#home">Home</a></li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#aboutme">About me</a></li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#stack">Stack</a></li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#mywork">My Work</a></li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#testimonials">Testimonials</a></li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Get in touch</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
}

export default Navbar;