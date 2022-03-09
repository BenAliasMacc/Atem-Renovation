import React from 'react';

const ContactForm = () => {
  return (
    <div className="container" id='formulaire' style={{marginTop: '40px'}}>
        {/* TITLE START */}
        <div className="section-head text-left text-black">
            <h2 className="text-uppercase font-36">Demande de renseignements</h2>
            <div className="wt-separator-outer">
                <div className="wt-separator bg-black" />
            </div>
        </div>
        {/* TITLE END */}
        {/* GOOGLE MAP & CONTACT FORM */}
            <div className="section-content">
            <div className="wt-box">
            {/* CONTACT FORM*/}
                <form id="contact-us" className="contact-form cons-contact-form"  method="post" action="form-handler.php">
                    <div className="contact-one p-a40 p-r150">
                        <div className="form-group">
                            <input name="username" type="text" required className="form-control" placeholder="Nom" />
                        </div>
                        <div className="form-group">
                            <input name="email" type="text" className="form-control" required placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <textarea name="message" rows={3} className="form-control " required placeholder="Message" defaultValue={""} />
                        </div>
                        <button name="submit" type="submit" value="Submit" style={{backgroundColor: "green"}} className="site-button black radius-no text-uppercase">
                            <span className="font-12 letter-spacing-5" >Valider</span>
                        </button>
                        <div className="contact-info bg-white text-black p-a30" style={{border: "3px solid black"}}>
                            <div className="wt-icon-box-wraper left p-b30">
                                <div className="icon-sm"><i className="iconmoon-smartphone-1" /></div>
                                <div className="icon-content text-black ">
                                    <h5 className="m-t0 text-uppercase">Numéro de téléphone</h5>
                                    <p>+33 9 83 00 62 78</p>
                                </div>
                            </div>
                            <div className="wt-icon-box-wraper left p-b30">
                                <div className="icon-sm"><i className="iconmoon-email" /></div>
                                <div className="icon-content text-black">
                                    <h5 className="m-t0  text-uppercase">Adresse email</h5>
                                    {/* <p>contact@atemrenovation.fr</p> */}
                                    <a HREF="mailto:contact@atemrenovation.fr">contact@atemrenovation.fr</a>
                                </div>
                            </div>
                            <div className="wt-icon-box-wraper left">
                                <div className="icon-sm"><i className="iconmoon-travel" /></div>
                                <div className="icon-content text-black">
                                    <h5 className="m-t0  text-uppercase">Adresse</h5>
                                    <p>Siège social <br/> 28 ter Av. de Versailles, 93220 Gagny, France</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        
        </div> 
    </div>
  )
};

export default ContactForm;
