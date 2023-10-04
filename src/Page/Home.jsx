import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import MyCV from '../Files/mbulelo_pani_cv.pdf';

export class home extends Component {

    render() {
        return (
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
        )
    }
}

export default home;