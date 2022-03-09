import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import Launcher from '../Questions/Components/LauncherModal';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const images = [
    require('./../../images/gallery/depanneur4.jpeg'),
    require('./../../images/gallery/controle.jpeg'),
    require('./../../images/gallery/clim8.jpeg'),
    require('./../../images/gallery/salon6.jpeg'),
    require('./../../images/gallery/radiateur.jpeg')
]

class About extends React.Component {

    render() {
        const options = {
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 3000,
            //center: true,
            nav: false,
            dots: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                767: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        };
        return (
            <>
                <div className="section-full p-t90 bg-gray tm-welcome-warp">
                    <div className="container">
                        <div className="section-content">
                            <div className="row">
                                <div className="col-md-5 col-sm-12 text-uppercase text-black">
                                    <span className="font-30 font-weight-300">ATEM RENOVATION</span>
                                    <h2 className="font-40">
                                       <span className={this.props.colorclass2}>Les spécialistes du bâtiment tous corps d’état</span>  
                                    </h2>
                                    <p>Plus de 8 années au près de nos clients, nous sommes spécialisés dans l'installation de pompes à chaleur pour entreprise ou particulier.</p>
                                    <p className="text-lowercase"><span className='text-uppercase'>O</span>ffrir à nos clients un service de qualité est au coeur de nos préocupations.</p>
                                    <NavLink to={"/aboutus"} className="btn-half site-button button-lg m-b15" style={{backgroundColor: 'green'}}><span>Lire plus</span><em /></NavLink>
                                    {/* <a href='#formulaire' className="btn-half site-button button-lg m-b15" style={{backgroundColor: 'blue'}}><span>Vérifiez vos aides</span><em /></a> */}
                                    <Launcher/>

                                </div>
                                <div className="col-md-7 col-sm-12">
                                    <div className="m-carousel-1 m-l100">
                                        <OwlCarousel className="owl-carousel home-carousel-1 owl-btn-vertical-center" {...options}>
                                            {images.map((item, index) => (
                                                <div className="item" key={index}>
                                                    <div className="ow-img wt-img-effect zoom-slow">
                                                        <img src={item.default} alt="" />
                                                    </div>
                                                </div>

                                            ))}

                                        </OwlCarousel>
                                    </div>
                                </div>
                            </div>
                            <div className="hilite-title p-lr20 m-tb20 text-right text-uppercase bdr-gray bdr-right">
                                <strong>8 ANNEES</strong>
                                <span className="text-black">Au service de nos clients</span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default About;