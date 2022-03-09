import React from 'react';
import { NavLink } from 'react-router-dom';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.currentstate = { logo: require('./../../images/logo-dark.png').default };
    }

    updateFooterLogo = (updatedlogo) => { this.currentstate.logo = updatedlogo.default; }

    render() {

        return (
            <>
                <footer className="site-footer bg-gray footer-wide" style={{backgroundColor: "white"}}>
                    <div className="footer-bottom overlay-wraper">
                        <div className="overlay-main bg-black" style={{ opacity: 0 }} />
                        <div className="container p-t30">
                            <div className="row">
                                <div className="col-md-3 wt-footer-bot-left">
                                <NavLink to={"/"}><img src={require('./../../images/gallery/atem.jpeg').default} alt="" width={140} height={58} /></NavLink>
                                </div>
                                <div className="col-md-3 text-center copyright-block p-t15">
                                    <span className="copyrights-text">© 2022 Designed By ATEM RENOVATION.</span>
                                </div>
                                <div className="col-md-6 wt-footer-bot-right p-t15">
                                    <ul className="copyrights-nav pull-right">
                                        <li><NavLink to={"/aboutus"}>Termes  &amp; Conditions</NavLink></li>
                                        <li><NavLink to={"/aboutus"}>Politique de confidentialité</NavLink></li>
                                        <li><NavLink to={"/contactus"}>Nous contacter</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

            </>
        );
    };
};

export default Footer;