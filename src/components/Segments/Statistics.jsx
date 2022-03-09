import React from 'react';
import { NavLink } from 'react-router-dom';
import CountUp from 'react-countup';

var bgimg = require('./../../images/background/clients.jpg');

class Statistics extends React.Component {
    
    render() {
        
        return (
            <>
                <div className="section-full p-t90 p-b50 overlay-wraper bg-top-center bg-parallax tm-facts-wrap" data-stellar-background-ratio="0.5" style={{ backgroundImage: "url(" + bgimg.default + ")" }}>
                        <div className="overlay-main opacity-08 bg-black" />
                        <div className="container ">
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <div className="some-facts">
                                        <div className="text-white">
                                            <span className="font-40 font-weight-300  text-uppercase">Quelques</span>
                                            <h2 className="font-50  text-uppercase">
                                                Chiffres intéressants
                                            </h2>
                                            <p className="font-18 font-weight-300">Depuis 8 années nous oeuvrons pour vous accompagner 
                                            dans la gestion de vos projets de rénovations et de modernisation.</p>                                             
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="row some-facts-counter">
                                        <div className="col-md-4 col-sm-4 col-xs-4">
                                            <div className="wt-icon-box-wraper p-a10 text-white m-b30">
                                                <div className="icon-content text-center">
                                                    <div className="font-40 font-weight-600 m-b5"><span className="counter"><CountUp end={1599} duration={5} /></span></div>
                                                    <div className="wt-separator-outer m-b20"><div className="wt-separator bg-white" /></div>
                                                    <span className="text-uppercase">Clients</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-xs-4">
                                            <div className="wt-icon-box-wraper p-a10 text-white m-b30">
                                                <div className="icon-content text-center">
                                                    <div className="font-40 font-weight-600 m-b5"><span className="counter"><CountUp end={2007} duration={5} /></span></div>
                                                    <div className="wt-separator-outer m-b20"><div className="wt-separator bg-white" /></div>
                                                    <span className="text-uppercase">Projets</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-xs-4">
                                            <div className="wt-icon-box-wraper p-a10 text-white m-b30">
                                                <div className="icon-content text-center">
                                                    <div className="font-40 font-weight-600 m-b5"><span className="counter"><CountUp end={299} duration={5} /></span></div>
                                                    <div className="wt-separator-outer m-b20"><div className="wt-separator bg-white" /></div>
                                                    <span className="text-uppercase">Jours travaillés</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        );
    }
};

export default Statistics;