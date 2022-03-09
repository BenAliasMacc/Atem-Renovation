import React from 'react';
import Header2 from '../Common/Header2';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import About2 from './../Segments/About2';
import TeamMembers2 from './../Segments/TeamMembers2';
import Services from './../Segments/Services';
import Story from './../Segments/Story';

var bnrimg = require('./../../images/banner/banAbout.jpg');

class AboutUs extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                <div className="page-content">
                    <Banner title="Une expertise au service de nos clients." pagename="A propos de nous" bgimage={bnrimg.default}/>
                    <About2 />
                    {/* <TeamMembers2 /> */}
                    <Services />
                    {/* <Story /> */}
                </div>

                <Footer />
            </>
        );
    };
};

export default AboutUs;