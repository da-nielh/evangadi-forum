import React from 'react';
// import classes from './footer.module.css';
import './footer.css'
// import Col from "react-bootstrap/esm/Col";
// import Row from "react-bootstrap/esm/Row";
import logo from "../../assets/logo/evangadi-logo-footer.png"
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { PiYoutubeLogoLight } from "react-icons/pi";


function Footer() {
  return (
    <>
        <div className='footer__container'>
            <div className='footer__container-internal pt-5 d-md-flex justify-content-center'>
                <div className='logo__container'>
                    <img src={logo} alt="evangadi logo" />
                    <div className='social__media d-flex justify-content-between py-3'>
                        <a href="https://www.facebook.com/evangaditech/" target="_blank"><CiFacebook size={30}  className="link"/></a>
                        <a href="https://www.instagram.com/evangaditech/    " target="_blank"><FaInstagram size={28}    className="link"/></a>
                        <a href="https://www.youtube.com/@EvangadiTech"     target="_blank"><PiYoutubeLogoLight size={30}   className="link"/></a>
                    </div>
                </div>
                <div className='link__container pb-3'>
                    <ul className='list-unstyled'>
                        <h2>Useful Link</h2>
                        <a href="#">
                            <li>How it Works</li>
                        </a>
                        <a href="#">
                            <li>Terms of Service</li>
                        </a>
                        <a href="#">
                            <li>Privacy Policy</li>
                        </a>
                    </ul>
                </div>
                <div className='link__container pb-3'>
                    <ul className='list-unstyled'>
                        <h2>Contact Info</h2>
                        <a href="https://www.evangadi.com/"     target="_blank">
                            <li>Evangadi Network</li>
                        </a>
                        <a href="#">
                            <li>support@evangadi.com</li>
                        </a>
                        <a href="#">
                            <li>+1 202 386 2702</li>
                        </a>
                    </ul>
                </div>
            </div>
            
        </div>
    </>
  );
}

export default Footer;
