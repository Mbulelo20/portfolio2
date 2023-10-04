import React, { Component } from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaMobileAlt } from 'react-icons/fa';
import { FaEnvelopeOpen } from 'react-icons/fa';
import Mbulelo from '../Files/mbulelobg2.png'
// import Mycv from '../images/MbuleloPaniCV.pdf';

export class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="row" style={{marginTop:'2em'}}>
                    <div className="col-md-5" data-aos="fade-right">
                        <center>
                            <img src={Mbulelo} alt="img" style={{width: '80%', margin: '0.3rem'}}/>
                        </center>
                    </div>
                    <div className="col-md-7" data-aos="fade-left" style={{marginTop:'3em'}}>
                        <div>
                            <h1 className="" style={{color: '#777', marginBottom:'2rem', textAlign: 'bottom'}}>About me</h1>
                        </div>
                            I am Mbulelo Pani, an aspiring developer from Cape Town.
                            I enjoy working on projects that challenge my critical thinking and require a little bit of imagination,
                            from authentication and databases, to forms and animations.
                        <br/>
                        <br/>
                            I was first interested in programming during college, from a Logical Systems class.
                            I then pursued this interest when I took a brief programming course, and during that time
                            I also volunteered at a career expo NGO where I was an assistant, introducing basic programming to high school pupils.
                        <br/>
                        {/* <br/>
                            I started a fullstack web development course at Lifechoices, graduating the same year, 2020. I gained experience in studying and
                            working alone, but I also gained valuable experience working within a team.
                        <br/>*/}
                        <br/>
                            I'm proficient in Javascript, Python, and Java. Outside my work, my interests include robotics, physics and gaming. 
                        <br/>
                        <br/>
                        <br/>
                        <div className="row" style={{color: '#555heroku o'}}>
                            <div className="col-sm-3">
                                <p>
                                    
                                    <FaMapMarkerAlt className="icons"/>
                                    Cape Town, WC
                                </p>
                            </div>
                            |
                            <div className="col-sm-3">
                                <p>
                                    <FaMobileAlt className="icons"/>
                                    078 537 9517
                                </p>
                            </div>
                            |
                            <div className="col-sm-5">
                                <p>
                                    <FaEnvelopeOpen className="icons"/>
                                    mbulelopani09@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
