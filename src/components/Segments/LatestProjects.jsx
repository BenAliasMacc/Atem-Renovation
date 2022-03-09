import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const filters = [
    { label: "Rénovation", filter: ".renovation-col" },
    { label: "Energétique", filter: ".energetique-col" },
    { label: "Dépannage", filter: ".depannage-col" }
];

const projects = [
    {
        image: require('./../../images/gallery/portrait/pic1.webp'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condi mentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'renovation-col'
    },
    {
        image: require('./../../images/gallery/portrait/pic2.webp'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condi mentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'renovation-col'
    },
    {
        image: require('./../../images/gallery/portrait/pic3.webp'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condi mentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'renovation-col'
    },
    {
        image: require('./../../images/gallery/portrait/pic4.webp'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condi mentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'renovation-col'
    },
    {
        image: require('./../../images/gallery/portrait/pic5.webp'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condi mentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'depannage-col'
    },
    {
        image: require('./../../images/gallery/portrait/pic6.webp'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condi mentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'depannage-col'
    }
]

class LatestProjects extends React.Component {
    componentDidMount(){
        function loadScript(src) {
           
          return new Promise(function(resolve, reject){
            var script = document.createElement('script');
            script.src = src;
            script.addEventListener('load', function () {
              resolve();
            });
            script.addEventListener('error', function (e) {
              reject(e);
            });
            document.body.appendChild(script);
            document.body.removeChild(script);
          })
        };
 
      loadScript('./assets/js/custom.js');
      
    };
    render() {
        const options = {
            loop:false,
            autoplay:true,
            margin:20,
            nav:true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:1
                },
                580:{
                    items:2
                },						
                767:{
                    items:2
                },
                991:{
                    items:3
                },			
                1152:{
                    items:4
                },
                1360:{
                    items:4
                },
                1366:{
                    items:5
                }	
                }
        };
        return (
            <>
                <div className="section-full p-t90 p-lr80 latest_project-outer square_shape3" style={{background: 'linear-gradient(to top, #8FCF91 10%, #0F7807 50%, #8FCF91 90%)'}}>
                        {/* TITLE START */}
                        <div className="section-head text-left">
                            <div className="row">
                                <div className="col-lg-4 col-md-12 ">
                                    <h2 className="text-uppercase font-36">Derniers Projets</h2>
                                    <div className="wt-separator-outer">
                                        <div className="wt-separator bg-black" />
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-12">
                                    <ul className="btn-filter-wrap">
                                        <li className="btn-filter btn-active" data-filter="*">Tous nos projets</li>
                                        {filters.map((item, index) => (
                                            <li key={index} style={{}} className="btn-filter" data-filter={item.filter}>{item.label}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content">
                            <OwlCarousel className="owl-carousel owl-carousel-filter  owl-btn-bottom-left" {...options}>
                                        {projects.map((item, index) => (
                                            <div key={index} className={`${item.filter} item fadingcol`} >
                                                <div className="wt-img-effect ">
                                                    <img src={item.image.default} alt="" style={{objectFit: 'cover', height: '650px'}}/>
                                                    {/* <div className="overlay-bx-2 ">
                                                        <div className="line-amiation">
                                                            <div className="text-white  font-weight-300 p-a40">
                                                                <h2><NavLink to={"/project-detail"} className="text-white font-20 letter-spacing-1 text-uppercase">{item.title}</NavLink></h2>
                                                                <p>{item.description}</p>
                                                                <NavLink to={"/project-detail"} className="v-button letter-spacing-4 font-12 text-uppercase p-l20">Read More</NavLink>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                </div>
                                            </div>
                                        ))}
                                    </OwlCarousel>
                        </div>
                        <div className="hilite-title p-lr20 m-tb20 text-right text-uppercase bdr-gray bdr-right" >
                            <strong>Awesome</strong>
                            <span className="text-black">Designs</span>
                        </div>
                    </div >
            </>
        );
    }
};

export default LatestProjects;