import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const members = [
    {
        image: require('./../../images/testimonials/pic1.jpg'),
        fullname: 'Taylor Roberts',
        position: 'Co-manager associated',
        description: 'typefaces and layouts, and in appearance of different general the content of dummy text is nonsensical.typefaces of dummy text is nonsensical.',
    },
    {
        image: require('./../../images/testimonials/pic4.jpg'),
        fullname: 'Robert willson',
        position: 'Co-manager associated',
        description: 'typefaces and layouts, and in appearance of different general the content of dummy text is nonsensical.typefaces of dummy text is nonsensical.',
    },
    {
        image: require('./../../images/testimonials/pic2.jpg'),
        fullname: 'Taylor Roberts',
        position: 'Co-manager associated',
        description: 'typefaces and layouts, and in appearance of different general the content of dummy text is nonsensical.typefaces of dummy text is nonsensical.',
    },
    {
        image: require('./../../images/testimonials/pic3.jpg'),
        fullname: 'Robert willson',
        position: 'Co-manager associated',
        description: 'typefaces and layouts, and in appearance of different general the content of dummy text is nonsensical.typefaces of dummy text is nonsensical.',
    },
    {
        image: require('./../../images/testimonials/pic1.jpg'),
        fullname: 'Taylor Roberts',
        position: 'Co-manager associated',
        description: 'typefaces and layouts, and in appearance of different general the content of dummy text is nonsensical.typefaces of dummy text is nonsensical.',
    },
    {
        image: require('./../../images/testimonials/pic4.jpg'),
        fullname: 'Robert willson',
        position: 'Co-manager associated',
        description: 'typefaces and layouts, and in appearance of different general the content of dummy text is nonsensical.typefaces of dummy text is nonsensical.',
    }
]

var bgimg = require('./../../images/background/ptn-1.png');

class Testimonials extends React.Component {

    render() {
        const options = {
            loop: true,
            autoplay: false,
            margin: 80,
            nav: false,
            dots: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                991: {
                    items: 2
                }
            }
        };
        return (
            <>
                <div className="section-full p-t140 bg-repeat tm-testimonial-wrap" style={{ backgroundImage: 'url(' + bgimg.default + ')' }}>
                    <div className="container">
                        <div className="section-content">
                            {/* TITLE START */}
                            <div className="section-head text-left">
                                <h2 className="text-uppercase font-36">Testimonials</h2>
                                <div className="wt-separator-outer">
                                    <div className="wt-separator bg-black" />
                                </div>
                            </div>
                            {/* TITLE END */}
                            {/* TESTIMONIAL 4 START ON BACKGROUND */}
                            <div className="section-content">
                                <OwlCarousel className="owl-carousel testimonial-home" {...options}>
                                    {members.map((item, index) => (
                                        <div className="item" key={index}>
                                            <div className="testimonial-6">
                                                <div className="testimonial-pic-block">
                                                    <div className="testimonial-pic">
                                                        <img src={item.image.default} alt="" width={132} height={132} />
                                                    </div>
                                                </div>
                                                <div className="testimonial-text clearfix bg-white">
                                                    <div className="testimonial-detail clearfix">
                                                        <strong className="testimonial-name">{item.fullname}</strong>
                                                        <span className="testimonial-position p-t0">{item.position}</span>
                                                    </div>
                                                    <div className="testimonial-paragraph text-black p-t15">
                                                        <span className="fa fa-quote-left" />
                                                        <p>{item.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    ))}

                                </OwlCarousel>

                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="hilite-title p-lr20 m-tb20 text-right text-uppercase bdr-gray bdr-right">
                            <strong>Client</strong>
                            <span className="text-black">Says</span>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Testimonials;