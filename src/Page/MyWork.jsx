import React, { useEffect,  Fragment } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Film from '../Files/film.png';
import Gallery from '../Files/gallery.jpg';
import Weather from '../Files/instareact.png';

const MyWork = () => {
    const data = [
        {
            name: 'Movies Gallery',
            description: 'Quickly find the latest info, release dates and more on trending movies by easily searching.',
            gitLink: 'https://github.com/Mbulelo20/Movie-Gallery.git',
            link: 'https://moviesgalleri.netlify.app/',
            image: Film
        },
        {
            name: 'MyPhotos Gallery',
            description: 'Register and login and save your favorite photos',
            gitLink: 'https://github.com/Mbulelo20/memoryskeeper.git',
            link: 'https://mbulelophotos.herokuapp.com/',
            image: Gallery
        },
        {
            name: 'Insta React Weather',
            description: 'Instant weather forecast with search and geolocation',
            gitLink: 'https://github.com/Mbulelo20/react-weather.git',
            link: 'https://instareactweather.netlify.app',
            image: Weather
        },
    ]

    useEffect(() => {
    Aos.init({duration: 1000});
    })
    
    return (
        <Fragment>
            <div className="container">
                <div className="text-center" style={{marginTop:'2em'}}>
                    <h1 className="masthead-heading" style={{color:'#777'}}>
                        My Work
                    </h1>
                </div>
                <div className="row" data-aos="zoom-in" style={{marginTop:'3em'}}>
                    {data.map((d) => (
                        <div className="col-md-4">
                            <div className="containerI" style={{width: "85%", color: 'white', minHeight:'250px', marginTop:'2em'}}>
                                <div>
                                    <img src={d.image} alt="Avatar" className="image" style={{minHeight: '250px'}}/>
                                </div>
                                <div className="overlay">
                                    <div className="container text-center" style={{marginTop:'2em'}}>
                                        <h3>{d.name}</h3>
                                        <h6>{d.description}</h6>
                                        <br/>
                                        <div>
                                            <btn style={{margin: '2px'}}>
                                                <a href={d.gitLink} rel="noopener noreferrer" target="_blank" className="btn"  style={{backgroundColor: '#4FBFA8', borderRadius: '0rem',borderColor: '#4FBFA8', color: 'white'}}>GitHub link</a>                        
                                            </btn>
                                            <btn  style={{margin: '2px'}} >
                                                <a href={d.link} rel="noopener noreferrer" target="_blank" className="btn"  style={{backgroundColor: '#4FBFA8', borderRadius: '0rem',borderColor: '#4FBFA8', color: 'white'}}>Website</a>                        
                                            </btn>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <br/>
            </div>
        </Fragment>
    )
}

export default MyWork;
