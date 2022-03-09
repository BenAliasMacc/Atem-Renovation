import React from 'react';
import Header3 from '../Common/Header3';
import Footer from '../Common/Footer';
import Slider2 from './../Segments/Slider2';
import About from './../Segments/About';
import LatestProjects from './../Segments/LatestProjects';
import WhoWeAre from './../Segments/WhoWeAre';
import TeamMembers from './../Segments/TeamMembers';
import Blog from './../Segments/Blog';
import Statistics from './../Segments/Statistics';
import Testimonials from './../Segments/Testimonials';
import ClientsLogo from './../Segments/ClientsLogo';

class Home2 extends React.Component {
    render() {
        return (
            <>
                <Header3 />
                <div className="page-content">
                    <Slider2 />
                    <About />
                    <LatestProjects />
                    <WhoWeAre />
                    <TeamMembers />
                    <Blog colorclass="text-white" />
                    <Statistics />
                    <Testimonials />
                    <ClientsLogo />
                </div>
                <Footer />
            </>
        );
    };
};

export default Home2;