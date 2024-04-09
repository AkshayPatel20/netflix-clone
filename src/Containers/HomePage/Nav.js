import React, {useEffect, useState} from 'react'

import { BsFillCaretDownFill, BsCaretRightFill } from "react-icons/bs";

import './Nav.css';

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100){
                handleShow(true);
            }else{
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener('scroll');
        }   
    }, []);

    return (
        <div className={`nav ${show && 'nav__bar'}`}>
            <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo"/>


            <div className="browse__dropdown">
                <span>Browse <BsFillCaretDownFill className="browse__icons"/></span>
                <div className="dropdown__content">
                    <p className="nav__options"><BsCaretRightFill className="nav__icons"/> Home</p>
                    <p className="nav__options"><BsCaretRightFill className="nav__icons"/> TV Shows</p>
                    <p className="nav__options"><BsCaretRightFill className="nav__icons"/> Movies</p>
                    <p className="nav__options"><BsCaretRightFill className="nav__icons"/> New & Popular</p>
                    <p className="nav__options"><BsCaretRightFill className="nav__icons"/> My List</p>
                </div>
            </div>

            <img className="nav__avatar" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bb3a8833850498.56ba69ac33f26.png" alt="Netflix Logo"/>
        </div>
    )
}

export default Nav;
