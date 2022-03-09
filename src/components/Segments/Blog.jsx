import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const blogs = [
    {
        image: require('./../../images/blog/landscap-half/France.jpg'),
        title: 'La transition énergétique en France',
        link: "https://www.ecologie.gouv.fr/transition-energetique-en-france",
        date: '02 Dec 2021',
    },
    {
        image: require('./../../images/blog/landscap-half/renov.svg'),
        title: "La prime pour la rénovation énergétique",
        link: "https://www.maprimerenov.gouv.fr/prweb/PRAuth/app/AIDES_/BPNVwCpLW8TKW49zoQZpAw*/!STANDARD",
        date: '01 Jan 2022',
    }
]

var featuredblog = require('./../../images/blog/square/CEE2.png');
var bgimg = require('./../../images/background/ptn-1.png');

class Blog extends React.Component {
    
    render() {
        return (
            <>
                <div className="section-full p-t140 bg-repeat tm-blog-wrap" style={{backgroundSize: "100% 100%", backgroundImage: 'url(' + bgimg.default + ')' }}>
                    <div className="container">
                        <div className="section-content">
                            {/* TITLE START */}
                            <div className="section-head text-left">
                                <h2 className="text-uppercase font-36">Quelques articles</h2>
                                <div className="wt-separator-outer">
                                    <div className="wt-separator bg-black" />
                                </div>
                            </div>
                            {/* TITLE END */}
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    {blogs.map((item, index) => (
                                        <div className="overlay-wraper bg-no-repeat bg-cover latest-blog-dark-outer p-a20 m-b30" key={index} style={{objectFit:'cover', backgroundImage: 'url(' + item.image.default + ')' }}>
                                            <div className="overlay-main bg-black opacity-01" />
                                            <div className="latest-blog-dark text-uppercase p-a20">
                                                <h3 className="m-a0"><a href={`${item.link}`} rel="noopener noreferrer" target="_blank"><span className="text-white">{item.title}</span></a></h3>
                                                <div className={`${this.props.colorclass} v-date  font-weight-700`}>{item.date}</div>
                                            </div>
                                        </div>

                                    ))}
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <a href="https://www.ecologie.gouv.fr/dispositif-des-certificats-deconomies-denergie" rel="noopener noreferrer" target="_blank" className="letter-spacing-4 font-12 text-white text-uppercase">
                                    <div className="overlay-wraper bg-no-repeat bg-cover latest-blog-dark-outer2 m-b30" style={{backgroundSize: "cover", backgroundPosition: "50% 75%", backgroundImage: 'url(' + featuredblog.default + ')' }}>
                                        <div className="overlay-main bg-black opacity-01" />
                                        {/* <div className="latest-blog-square text-white">
                                            <h2 className="m-t0 m-b10"><span className="text-white font-30 text-uppercase">Certificats d’Economies d’Energie</span></h2>
                                            <p className="font-weight-300">Les CEE sont attribués, sous certaines conditions, par les services du ministère chargé de l’énergie, 
                                            aux acteurs éligibles (obligés mais aussi d’autres personnes morales non obligées) réalisant des 
                                            opérations d’économies d’énergie.</p> 
                                            <div className={`${this.props.colorclass} v-date  font-weight-700 text-uppercase`}>05 Jan 2022</div>
                                        </div> */}
                                         <div className="latest-blog-dark text-uppercase p-a20" style={{marginBottom: "350px"}}>
                                                <h3 className="m-a0"><span className="text-white">Certificats d’Economies d’Energie</span></h3>
                                                <div className={`${this.props.colorclass} v-date  font-weight-700`}>5 Nov 2021</div>
                                            </div>
                                    </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="hilite-title p-lr20 m-tb20 text-right text-uppercase bdr-gray bdr-right">
                            <strong>Blog</strong>
                            <span className="text-black">Post</span>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Blog;