import React, { useEffect, Fragment } from 'react'
import 'aos/dist/aos.css';
import Aos from 'aos';
import {FaJs} from 'react-icons/fa';
import {FaPython} from 'react-icons/fa';
import {FaHtml5} from 'react-icons/fa';
import {FaCss3} from 'react-icons/fa';
import {FaReact} from 'react-icons/fa';
import {FaVuejs} from 'react-icons/fa';
import {FaDatabase} from 'react-icons/fa';
import {FaNodeJs} from 'react-icons/fa';
import {FaGit} from 'react-icons/fa';
import {FaBootstrap} from 'react-icons/fa';
import {SiTailwindcss} from 'react-icons/si';
import {DiMeteor} from 'react-icons/di';

const MyStack = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);
        return (
            <Fragment>
                <div className="container mystack">
                <br/>
                    <div className="container">
                        <h3 className="masthead-heading text-center" style={{fontSize: '40px', color: '#777'}}>Stack <i className="fas fa-tools" style={{color: '#808080'}}></i></h3>
                    </div>
                    <br/>
                    <div className="row container" >
                        <div className="col-md-3">
                            <div className="text-center " style={{color:'grey'}}>
                                <h3 className="section-heading text-uppercase">Javascript</h3>
                            </div>
                            <FaJs aria-hidden="true" style={{fontSize: '90px',textAlign: 'center', color: '#4fbfa8', width: '100%',}}/>
                            <hr/>
                        </div>
                        <div className="col-md-3 ">
                            <div className="text-center" style={{color:'grey'}}>
                                <h3 className="section-heading text-uppercase">Python</h3>
                            </div>
                            <FaPython aria-hidden="true" style={{fontSize: '90px', color: 'lightBlue', textAlign: 'center', width: '100%'}}/>
                            <hr style={{color: 'green'}}/>
                        </div>
                        <div className="col-md-3">
                            <div className="text-center" style={{color:'grey'}}>
                                <h3 className="section-heading text-uppercase">Html5</h3>
                            </div>
                            <FaHtml5 aria-hidden="true" style={{fontSize: '90px', color: 'orange', textAlign: 'center', backgroundColor: '#white', width: '100%'}}/>
                            <hr/>
                        </div>
                        <div className="col-md-3 ">
                            <div className="text-center" style={{color:'grey'}}>
                                <h3 className="section-heading text-uppercase">Css3</h3>
                            </div>
                            <FaCss3 aria-hidden="true" style={{fontSize: '90px', color: '#1583c9', textAlign: 'center', width: '100%'}}/>
                            <hr/>
                        </div>
                    </div>
                    <div className="row container">
                        <div className="col-md-3 stack">
                            <div className="text-center" style={{color:'grey'}}>
                                <h3 className="section-heading text-uppercase">React js</h3>
                            </div>
                            <FaReact aria-hidden="true" style={{fontSize: '90px',textAlign: 'center', color: '#1583c9',width: '100%'}}/>
                            <hr/>
                        </div>
                        <div className="col-md-3">
                            <div className="text-center" style={{color:'grey'}}>
                                <h3 className="section-heading text-uppercase">Vue js</h3>
                            </div>
                            <FaVuejs aria-hidden="true" style={{fontSize: '90px', color: '#4fbfa8', textAlign: 'center',width: '100%'}}/>
                            <hr/>
                        </div>
                        
                        <div className="col-md-3">
                            <div className="text-center" style={{color:'grey'}}>
                                <h3 className="section-heading text-uppercase">MongoDb</h3>
                            </div>
                            <FaDatabase aria-hidden="true" style={{fontSize: '90px', color: '#4fbfa8', textAlign: 'center', width: '100%'}}/>
                            <hr/>

                        </div>
                        <div className="col-md-3">
                            <div className="text-center" style={{color:'grey'}}>
                                <h3 className="section-heading text-uppercase">Node js</h3>
                            </div>
                            <FaNodeJs aria-hidden="true" style={{fontSize: '90px', color: '#1583c9', textAlign: 'center', width: '100%'}}/>
                            <hr/>
                        </div>
                    </div>
                    <div className="row container text-center justify-content-md-center">
                        <div className="col-md-3 stack">
                            <div className="text-center" style={{color:'grey'}}>
                                <h3 className="section-heading text-uppercase">Bootstrap4</h3>
                            </div>
                            <FaBootstrap aria-hidden="true" style={{fontSize: '90px',textAlign: 'center', color: 'orange',width: '100%'}}/>
                            <hr/>
                        </div>
                        <div className="col-md-3">
                            <div className="text-center" style={{color:'grey'}}>
                                <h3 className="section-heading text-uppercase">Git</h3>
                            </div>
                            <FaGit aria-hidden="true" style={{fontSize: '90px', color: '#555', textAlign: 'center',width: '100%'}}/>
                            <hr/>
                        </div>
                        <div className="col-md-3">
                            <div className="text-center" style={{color:'grey'}}>
                                <h3 className="section-heading text-uppercase">React Meteor</h3>
                            </div>
                            <DiMeteor aria-hidden="true" style={{fontSize: '90px', color: 'red', textAlign: 'center',width: '100%'}}/>
                            <hr/>
                        </div>
                        <div className="col-md-3">
                            <div className="text-center" style={{color:'grey'}}>
                                <h3 className="section-heading text-uppercase">TailwindCSS</h3>
                            </div>
                            <SiTailwindcss aria-hidden="true" style={{fontSize: '90px', color:'lightBlue', textAlign: 'center',width: '100%'}}/>
                            <hr/>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

export default MyStack;