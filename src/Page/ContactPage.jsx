import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import Aos from 'aos';
import emailjs from 'emailjs-com'
import {Button} from 'react-bootstrap';
import { FaLinkedin } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const ContactPage = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_9xfzs7p', 'template_f90yrci', e.target, 'user_gliSFWQT1Y7S20Cz3Dug6')
            .then((result) => {
            console.log(result.text);
            alert('Thanks for your message')
            e.target.reset();
            }, (error) => {
            console.log(error.text);
        });
    }
    return (
        <div className="container" data-aos="zoom-in">
            <br/>
            <h1 className="text-center justify-content-md-center" style={{ color: '#777'}}>Get In Touch</h1>
            <form className="contact-form" onSubmit={sendEmail} style={{width:'100%'}}>
                <div className=" row pt-5">
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control" placeholder="Name" name="name" style={{width:'100%'}}/>
                    </div>
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control" required placeholder="Email address" name="email" style={{width:'100%'}}/>
                    </div>
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control" placeholder="subject" name="subject" style={{width:'100%'}}/>
                    </div>
                    <div className="col-8 form-group mx-auto" style={{height: '150px'}}>
                        <textarea type="textarea" id="" className="form-control" required placeholder="Leave a message" name="message" style={{width:'100%',overflow:'auto', height:'60%', paddingBottom:'1em'}}/>
                    </div>
                    <div className="col-8 form-group mx-auto" style={{marginTop:'-4em'}}>
                        <center>
                            <Button className="btn btn-primary" type="submit" style={{backgroundColor: '#4FBFA8', borderRadius: '0rem',borderColor: '#4FBFA8'}}>Send Message</Button>
                        </center>
                        <center>
                        <div className="row banner-social-buttons justify-content-md-center" style={{color: '#343a40', marginTop:'2em'}}>
                            <div className="col-sm-1 " style={{color: 'black'}}>
                                <a href="https://linkedin.com/in/mbulelo-pani-638b4b196" target="_blank" rel="noreferrer" style={{color: '#555'}}>
                                    <FaLinkedin className="iconscontact"/>
                                </a>
                            </div>
                            <div className="col-sm-1">
                                <a href="https://wa.me/+27737036422" target="_blank" rel="noreferrer" style={{color: '#555'}}>
                                    <FaWhatsapp className="iconscontact"/>
                                </a>
                            </div>
                            <div className="col-sm-1">
                                <a href="https://github.com/mbulelo20" target="_blank" rel="noreferrer" style={{color: '#555'}}>
                                    <FaGithub className="iconscontact"/>
                                </a>
                            </div>
                            </div>
                        </center>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default ContactPage;
