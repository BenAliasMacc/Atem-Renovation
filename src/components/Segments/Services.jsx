import React from 'react';
import Clim from '../../images/gallery/installation2.jpeg';
import Tablette from '../../images/gallery/depanneur3.jpeg';

const images = [
    require('./../../images/gallery/portrait/pic1.jpg'),
    require('./../../images/gallery/portrait/pic2.jpg'),
    require('./../../images/gallery/portrait/pic3.jpg'),
    require('./../../images/gallery/portrait/pic4.jpg'),
    require('./../../images/gallery/portrait/pic5.jpg'),
    require('./../../images/gallery/portrait/pic6.jpg')
]

const servicesleft = [
    {
        counter: 0,
        title: 'Pompe à chaleur',
        description: "Avec le système de pompe à chaleur vous pourrez faire baisser vos consommations de gaz, fioul et même électrique. Un calcul de déperdition est effectué lors de notre visite afin de vous proposer le matériel le mieux adapté à votre habitation.",
    },
    {
        counter: 1,
        title: "Isolation par l'intérieur",
        description: "Budget limité, mairie qui n’autorise pas l’isolation par l’extérieur, optez pour l’isolation par l’intérieur même si les aides sont limitées voire inexistante dans certains cas, isoler votre habitation vous permet de baisser la consommation de chauffage.",
    },
    {
        counter: 2,
        title: 'Menuiserie',
        description: "Besoin d’ajouter une fenêtre de toit, de changer vos volets ou de modifier des fenêtres en porte fenêtres ? Une étude de faisabilité est effectuée lors de nos métrages et des solutions adaptées sont proposées pour chaque point nécessaire.",
    }
]

const servicesright = [
    {
        counter: 3,
        title: 'Isolation Thermique par l’Extérieur ',
        description: "Fort d’une experience de 8 ans dans la rénovation, nous pouvons étudier vos projets, vous aider à trouver des solutions puis les réaliser pour tous types de rénovation que ça soit la toiture, les planchers, les peintures, le carrelage ou tout type de rénovation intérieur.",
    },
    {
        counter: 4,
        title: 'Rénovation intérieur',
        description: "Remise à neuf intérieure et extérieure. Tout type de travaux petits oeuvres.",
    },
    {
        counter: 5,
        title: 'Eléctricité',
        description: "Compteur plus aux normes, problème électrique ? Nous pouvons régler vos problèmes : Diagnostique électrique, installation et suivi.",
    }
]

class Services extends React.Component {
    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
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

        return (
            <>
                <div className="section-full bg-black p-t90 p-b30 square_shape1 tm-service2-wrap">
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head text-left text-white">
                            <h2 className="text-uppercase font-36">Nos services</h2>
                            <div className="wt-separator-outer">
                                <div className="wt-separator bg-white" />
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="section-content circle-block-outer" data-toggle="tab-hover">
                            <div className="row">
                                <div className="col-md-4 col-sm-12 m-b30">
                                    {servicesleft.map((item, index) => (
                                        <div className="wt-icon-box-wraper right p-a20 m-b50 text-white" data-target={`#tab${item.counter}`} data-toggle="tab" key={index}>
                                            <div className="icon-content">
                                                <h4 className="wt-tilte text-uppercase">{item.title}</h4>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>

                                    ))}

                                </div>
                                <div className="col-md-4 col-sm-12 m-b30">
                                    <div className="circle-content-pic tab-content ">
                                        {/* {images.map((item, index) => (
                                            <div className={index == 0 ? `tab-pane active` : `tab-pane`} id={`tab${index}`} key={index}>
                                                <div className="wt-box">
                                                    
                                                </div>
                                            </div>

                                        ))} */}
                                        <div className="wt-media text-primary m-b20 ">
                                            <img src={Clim} alt="" style={{width: "100%", height: '300px', objectFit: 'cover'}} />
                                        </div>
                                        <div className="wt-media text-primary m-b20 ">
                                            <img src={Tablette} alt="" style={{width: "100%", height: '300px', objectFit: 'cover'}} />
                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12 m-b30">
                                    {servicesright.map((item, index) => (
                                        <div className="wt-icon-box-wraper left p-a20 m-b50 text-white" data-target={`#tab${item.counter}`} data-toggle="tab" key={index}>
                                            <div className="icon-content">
                                                <h4 className="wt-tilte text-uppercase">{item.title}</h4>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>

                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Services;