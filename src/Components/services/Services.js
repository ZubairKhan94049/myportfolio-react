import React from 'react';
import "./services.css";
import { useState } from 'react';

const Services = () => {

     const [toggleState, settoggleState] = useState(0);

     const toggleTab = (index) =>{
        settoggleState(index);
     }
     
     
     return (
        <section className="services section" id="services">
            <h2 className="section_title">Services</h2>
            <span className='section_subtitle'>What I Offer</span>

            <div className="services_container container grid">

                <div className="services_content">
                    <div>
                        <i className="uil uil-edit services_icon"></i>
                        <h3 className="services_title">Mobile Application <br/> Development </h3>
                    </div>

                    {/* <span className="services_button" onClick={() => toggleTab(1)} >View More <i className="uil uil-arrow-right services_button_icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services_modal active_modal" : "services_modal"}>
                        <div className="services_modal_content">
                            <i className="uil uil-times services_modal_close" onClick={()=> toggleTab(0)}></i>

                            <h3 className="services_modal_title">Visual Designer</h3>
                            <p className="services_modal_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, totam!
                            </p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, voluptas?</p></li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, voluptas?</p></li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">Web Page Development </p></li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">Web Page Development </p></li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">Web Page Development </p></li>
                            </ul>
                        </div>
                    </div> */}
                </div>


                <div className="services_content">
                    <div>
                        <i className="uil uil-web-grid services_icon"></i>
                        <h3 className="services_title">Website Development <br/>& Designing</h3>
                    </div>

                    {/* <span className="services_button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right services_button_icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "services_modal active_modal" : "services_modal"}>
                        <div className="services_modal_content">
                            <i className="uil uil-times services_modal_close" onClick={()=> toggleTab(0)}></i>

                            <h3 className="services_modal_title">Web Designer</h3>
                            <p className="services_modal_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, totam!
                            </p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, voluptas?</p></li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, voluptas?</p></li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">Web Page Development </p></li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">Web Page Development </p></li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">Web Page Development djhsfh</p></li>
                            </ul>
                        </div>
                    </div> */}
                </div>


                <div className="services_content">
                    <div>
                        <i className="uil uil-arrow services_icon"></i>
                        <h3 className="services_title">UI/UX <br/>Designing</h3>
                    </div>

                    {/* <span className="services_button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right services_button_icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services_modal active_modal" : "services_modal"}>
                        <div className="services_modal_content">
                            <i className="uil uil-times services_modal_close" onClick={()=> toggleTab(0)}></i>

                            <h3 className="services_modal_title">UI/UX Designer</h3>
                            <p className="services_modal_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, totam!
                            </p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, voluptas?</p></li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, voluptas?</p></li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">Web Page Development </p></li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">Web Page Development </p></li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">Web Page Development </p></li>
                            </ul>
                        </div>
                    </div> */}
                </div>


                <div className="services_content">
                    <div>
                        <i className="uil uil-arrow services_icon"></i>
                        <h3 className="services_title">Web & App <br/>Automation</h3>
                    </div>

                    {/* <span className="services_button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right services_button_icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services_modal active_modal" : "services_modal"}>
                        <div className="services_modal_content">
                            <i className="uil uil-times services_modal_close" onClick={()=> toggleTab(0)}></i>

                            <h3 className="services_modal_title">UI/UX Designer</h3>
                            <p className="services_modal_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, totam!
                            </p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, voluptas?</p></li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, voluptas?</p></li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">Web Page Development </p></li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">Web Page Development </p></li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">Web Page Development </p></li>
                            </ul>
                        </div>
                    </div> */}
                </div>

                <div className="services_content">
                    <div>
                        <i className="uil uil-arrow services_icon"></i>
                        <h3 className="services_title">Website <br/>Scrapping</h3>
                    </div>

                    {/* <span className="services_button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right services_button_icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services_modal active_modal" : "services_modal"}>
                        <div className="services_modal_content">
                            <i className="uil uil-times services_modal_close" onClick={()=> toggleTab(0)}></i>

                            <h3 className="services_modal_title">UI/UX Designer</h3>
                            <p className="services_modal_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, totam!
                            </p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, voluptas?</p></li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, voluptas?</p></li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">Web Page Development </p></li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">Web Page Development </p></li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">Web Page Development </p></li>
                            </ul>
                        </div>
                    </div> */}
                </div>

                <div className="services_content">
                    <div>
                        <i className="uil uil-arrow services_icon"></i>
                        <h3 className="services_title">Web & App <br/>Deployment</h3>
                    </div>

                    {/* <span className="services_button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right services_button_icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services_modal active_modal" : "services_modal"}>
                        <div className="services_modal_content">
                            <i className="uil uil-times services_modal_close" onClick={()=> toggleTab(0)}></i>

                            <h3 className="services_modal_title">UI/UX Designer</h3>
                            <p className="services_modal_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, totam!
                            </p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, voluptas?</p></li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, voluptas?</p></li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">Web Page Development </p></li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">Web Page Development </p></li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">Web Page Development </p></li>
                            </ul>
                        </div>
                    </div> */}
                </div>




            </div>
        </section>
    )
}

export default Services