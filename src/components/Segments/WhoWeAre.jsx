import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const projects = [
    {
        image: require('./../../images/gallery/clim4.jpeg'),
        title: "Des techniciens à l'écoute",
        description: "Nos techniciens interviennent le plus rapidement possible et essayent de trouver la solution la plus adaptée à votre problème",
    },
    {
        image: require('./../../images/gallery/maison.jpeg'),
        title: "Votre maison est elle une passoire énergétique ?",
        description: "N'hésitez pas à faire un diagnostique énergétique afin de détecter les pertes énergétiques de votre maison",
    },
    {
        image: require('./../../images/gallery/illustration.jpeg'),
        title: "Les normes énergétiques de l'Etat",
        description: "Des normes claires éxistent afin de classifier votre habitation sur l'échelle, c'est ce qu'on appelle 'la casse énergie'",
    },
    {
        image: require('./../../images/gallery/salon4.jpeg'),
        title: "Retrouvez le confort d'une maison bien isolée",
        description: '',
    },
    {
        image: require('./../../images/gallery/tablette.jpg'),
        title: "Ayez une réelle maitrise de ce que vous consommez",
        description: "Les meilleures technologies sont utilisées afin de maitriser les énergies et les coûts",
    }
]

var img1 = require('./../../images/slider-corner.jpg');
var bgimg = require('./../../images/background/ptn-1.png');

class WhoWeAre extends React.Component {
  
    render() {
        const options = {
            loop:true,
            autoplay:true,
            margin:0,
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
                767:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        };
        return (
            <>
                <div className="section-full p-t140 bg-repeat tm-whoweare-wrap"  style={{ backgroundImage: 'url(' + bgimg.default + ')' }}>
                        <div className="container-fluid">
                            <div className="section-content">
                                <div className="row">
                                    <div className="col-lg-6 col-md-5 col-sm-12">
                                        <div className="wt-left-part">
                                            <div className="text-uppercase text-black">
                                                <span className="font-30 font-weight-300">Qui sommes nous ?</span>
                                                <h2 className="font-40">
                                                    Une entreprise à taille humaine et à l'écoute des besoins de nos clients.
                                                </h2>
                                                <p>Nous recherchons constamment les meilleures innovations dans le domaine énergétique. Nous proposons un travail éthique, conforme avec les normes les plus strictes.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-7 col-sm-12">
                                        <div className="m-carousel-2">
                                        <OwlCarousel className="owl-carousel carousel-hover home-carousel-2 owl-btn-vertical-center" {...options}>
                                                {projects.map((item, index) => (
                                                    <div className="item" key={index}>
                                                    <div className="wt-box">
                                                        <div className="ow-img wt-carousel-block gradi-black">
                                                            <img src={item.image.default} alt=""/>
                                                            <div className="p-a50 wt-carousel-info text-white">
                                                                <div className="carousel-line">
                                                                    <h2 className="font-28 font-weight-400 m-b10">{item.title}</h2>
                                                                    <p className="m-b0">{item.description}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    
                                                ))}
                                            
                                            </OwlCarousel>
                                            
                                            {/* <div className="carousel-bg-img">
                                                <img src={img1.default} alt=""/>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="hilite-title p-lr20 m-tb20 text-left text-uppercase bdr-gray bdr-left">
                                    <strong>3000+ Projets</strong>
                                    <span className="text-black">Terminés</span>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        );
    }
};

export default WhoWeAre;