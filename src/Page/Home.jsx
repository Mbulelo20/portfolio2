import React, { Component, Fragment } from 'react';
import {Button} from 'react-bootstrap';
import MyCV from '../Files/mbulelo_pani_cv.pdf';
import emailjs from 'emailjs-com'

export class home extends Component {
    
    constructor(props) {
        super(props);
        this.formRef = React.createRef();
    }
    componentDidMount(){
        this.sendEmail()
    }
    sendEmail = () => {
        

        emailjs
            .sendForm(
                'service_9xfzs7p',
                'template_f90yrci',
                this.formRef.current,
                'user_gliSFWQT1Y7S20Cz3Dug6'
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    render() {
        return (
            <Fragment>
                <header className="masthead">
                    <div className="container" style={{paddingLeft: '0.75rem', paddingRight: '0.75rem', marginRight: 'auto', marginLeft: 'auto'}}>
                        <div className="masthead-heading " style={{fontSize: '38px', marginBottom: '1rem'}}>
                            Hello, I'm Mbulelo Pani
                        </div>
                        <div className="masthead-heading" style={{ fontSize: '58px' }}>
                            I'm A Junior Web Developer
                        </div>
                        <Button className="btn btn-primary" href="#aboutme" style={{borderRadius: '0rem', backgroundColor: '#4FBFA8', margin:'1em', borderColor: '#4FBFA8', fontWeight: 'bold'}} >
                            View profile
                        </Button>
                        <Button className="btn btn-primary" href={MyCV} target='_blank 'style={{borderRadius: '0rem', backgroundColor: '#4FBFA8', margin:'1em', borderColor: '#4FBFA8', fontWeight: 'bold'}} >
                            View my CV
                        </Button>
                    </div>
                </header>
                <form ref={this.formRef}>
                    <input id='test' type="text" className="form-control" value="Visitor" name="subject" style={{ width: '100%' }} hidden />
                    <input id='test' type="text" className="form-control" value="Mbulelo Portfolio" name="email" style={{ width: '100%' }} hidden />
                
                    <input id='test' type="text" className="form-control" value="Someone visited your portfolio" name="message" style={{ width: '100%' }} hidden />
                </form>
            </Fragment>
        )
    }
}

export default home;