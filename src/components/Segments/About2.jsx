import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import energie from './../../images/gallery/portrait/eolienne.jpg';

const images = [
    require('./../../images/gallery/portrait/energie.png'),
    require('./../../images/gallery/portrait/energie2.jpg'),
    require('./../../images/gallery/portrait/pic4.jpg'),
    require('./../../images/gallery/portrait/pic5.jpg'),
    require('./../../images/gallery/portrait/energie.png'),
]

class About2 extends React.Component {
    
    render() {
        const options = {
            loop:true,
            autoplay:true,
            autoplayTimeout:3000,
            margin:30,
            nav:true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            items:1,
            dots: false,
        };
        return (
            <>
                <div className="section-full p-tb90 bg-gray square_shape2 tm-about2-wrap">
                        <div className="container">
                            <div className="section-content ">
                                <div className="row">
                                    <div className="col-lg-5 col-md-6">
                                    <img src={energie} alt='' style={{width: '100%', height: "400px", objectFit: "cover"}} />
                                        {/*<div className="m-about m-l50 m-r50">
                                         <OwlCarousel className="owl-carousel about-us-carousel owl-btn-bottom-right" {...options}>
                                            {images.map((item, index) => (
                                                <div className="item" key={index}>
                                                <div className="ow-img wt-img-effect zoom-slow">
                                                <NavLink to={""}><img src={item.default} alt="" /></NavLink>
                                                    </div>
                                                </div>

                                            ))}

                                        </OwlCarousel> 
                                        </div>*/}
                                    </div>
                                    <div className="col-lg-6 col-md-6 ">
                                        <div className="m-about-containt text-black p-t30">
                                            <span  className="font-30 font-weight-300 text-uppercase">A Propos de Nous</span>
                                            <h2 className="font-40 text-uppercase">Notre défi : la rénovation énergétique </h2>
                                            <p><b>La mauvaise isolation thermique est la première cause d'insatisfaction des français vis à vis de leur logement. </b></p>
                                            <p className='text-justify'>ATEM Rénovation travail afin de palier à cette situation et d'apporter des solutions de rénovations énergétiques.
                                            Nos technologies de pompe à chaleur et d'ITE permettent de réduire les consommations d'énergie et transformer "les passoires énergétiques" en logement confortable avec une consommation énergétique moindre.
                                            </p>
{/*                                             <NavLink to={"/project-detail"} className="site-button black radius-no text-uppercase"><span className="font-12 letter-spacing-5"> Read More </span></NavLink>
 */}                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        );
    }
};

export default About2;