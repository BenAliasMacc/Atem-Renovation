import React from 'react';
import GoogleMaps from "simple-react-google-maps"
import Header2 from '../Common/Header2';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import ContactForm from '../Segments/ContactForm';

var bnrimg = require('./../../images/banner/contact.jpg');

class ContactUs extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                <div className="page-content">
                <Banner title="Une question ? Un besoin ? Nos experts sont là pour vous répondre." pagename="Nous contacter" bgimage={bnrimg.default}/>
                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-tb80 tm-shortcode-wrap">
                        
                        <ContactForm />
                        
                    </div>
                    <div className="section-full">
                        <div className="gmap-outline">
                        <GoogleMaps
                                apiKey={"AIzaSyAfY1DRbspf6E3jYUso-PeI_tdfRXA59i0"}
                                style={{height: "460px", width: "100%"}}
                                zoom={12}
                                center={{lat: 48.87862773267227, lng: 2.5368629692765277}}
                                markers={{lat: 48.87862773267227, lng: 2.5368629692765277}} //optional
                                />
                        </div>
                    </div>
                    {/* SECTION CONTENT END */}
                </div>

                <Footer />
            </>
        );
    };
};

export default ContactUs;