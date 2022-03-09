import React from 'react';
import Navigation from './Navigation';
import { NavLink } from 'react-router-dom';

class Header3 extends React.Component {
    isMenuActive
    constructor(props) {
        super(props);
        this.state = {logo: require('./../../images/gallery/atem.png')};
    }

    state = { isSearchActive: false, isMenuActive: false };

    handleSearchToggle = () => {
        this.setState({ isSearchActive: !this.state.isSearchActive });
    };

    handleMenuToggle = () => {
        this.setState({ isMenuActive: !this.state.isMenuActive });
    };

    componentDidMount() {

        const handleScroll = () => {
            const offset = window.scrollY;

            const stickyheader = document.querySelector('.sticky-header ');

            if (offset >= 100) {
                stickyheader.classList.add('is-fixed');
                stickyheader.classList.add('color-fill');

            } else {
                stickyheader.classList.remove('is-fixed');
                stickyheader.classList.remove('color-fill');
            }
        }

        window.addEventListener('scroll', handleScroll);

        window.updateTopMostParent = (logopath) => {
            this.setState({ logo: logopath });
        };
    }

    render() {
        const isSearchActive = this.state.isSearchActive;
        const isMenuActive = this.state.isMenuActive;

        return (
            <>
                <header className={`${isMenuActive ? "active" : null} site-header header-style-1  nav-wide mobile-responsive-navigation`}>
                    <div className="sticky-header main-bar-wraper">
                        <div className="main-bar bg-white p-t10">
                            <div className="container style={{position:'relative'}}">
                                <div className="logo-header">
                                    <div className="logo-header-inner logo-header-one">
                                        <NavLink to={"./"}>
                                            <img src={this.state.logo.default} width={171} height={49} alt="Modern" />
                                        </NavLink>
                                    </div>
                                </div>
                                {/* NAV Toggle Button */}
                                <button onClick={this.handleMenuToggle} id="mobile-responsive-drawer" data-target=".header-nav" data-toggle="collapse" type="button" className="navbar-toggle collapsed">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar icon-bar-first" />
                                    <span className="icon-bar icon-bar-two" />
                                    <span className="icon-bar icon-bar-three" />
                                </button>
                                {/* ETRA Nav */}
                                <div className="extra-nav">
                                    <div className="extra-cell">

                                        <NavLink to={"#"} className="site-search-btn" onClick={this.handleSearchToggle}>
                                            <i className="fa fa-search" />
                                        </NavLink>
                                    </div>
                                </div>
                                {/* SITE Search */}
                                <div id="search" className={isSearchActive ? "open" : null}>
                                    <span className="close" onClick={this.handleSearchToggle} />
                                    <form role="search" id="searchform" action="/search" method="get" className="radius-xl">
                                        <div className="input-group">
                                            <input defaultValue="" name="q" type="search" placeholder="Type to search" />
                                            <span className="input-group-btn"><button type="button" className="search-btn"><i className="fa fa-search" /></button></span>
                                        </div>
                                    </form>
                                </div>
                                {/* ETRA Nav */}
                                <div className="extra-nav">
                                    <div className="extra-cell">
                                        <div className="dropdown share-icon-btn">
                                            <a href="#" className="site-search-btn dropdown-toggle" data-toggle="dropdown"><i className="fa fa-share-alt" /></a>
                                            <div className="dropdown-menu bg-white">
                                                <div className="top-bar">
                                                <ul className="social-bx list-inline pull-right">
                                                <li><a rel="noreferrer" target="_blank" href="https://www.facebook.com/atemrenov" style={{color: 'green'}} className="fa fa-facebook" /></li>
                                                {/* <li><a rel="noreferrer" target="_blank" href="https://twitter.com" className="fa fa-twitter" /></li> */}
                                                <li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/atem-renovation-26204b231/" style={{color: 'green'}} className="fa fa-linkedin" /></li>
                                                {/* <li><a rel="noreferrer" target="_blank" href="https://rss.com" className="fa fa-rss" /></li> */}
                                                {/* <li><a rel="noreferrer" target="_blank" href="https://www.youtube.com/" className="fa fa-youtube" /></li> */}
                                                <li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/atem.renovation/" style={{color: 'green'}} className="fa fa-instagram" /></li>
                                            </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* MAIN Vav */}
                                <div className="header-nav navbar-collapse collapse">
                                    <Navigation />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>


            </>
        );
    };
};

export default Header3;

