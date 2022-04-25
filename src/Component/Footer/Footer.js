import React from 'react';
import { Link } from 'react-router-dom';
import {FiTwitter} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'
const link1=['Help','Store','How it work']
const link2=['About','Rafferel','Privacy']
const link3=['Cookies Notice','Term of services','Acceptable use policies']
const link4=['Branding','Statement','Blog']

const Footer = () => {
    return (
        <div className='footer'>
            <div className=" flex items-center md:items-end pl-2">
                <p className="">©Findfindrr.com</p>
            </div>
            <div className=" footer-Link">
                {
                    link1.map((link)=><Link to=''>{link}</Link>)
                }
            </div>
            <div className=" footer-Link">
                {
                    link2.map((link)=><Link to=''>{link}</Link>)
                }
            </div>
            <div className=" footer-Link">
                {
                    link3.map((link)=><Link to=''>{link}</Link>)
                }
            </div>
            <div className=" footer-Link">
                {
                    link4.map((link)=><Link to=''>{link}</Link>)
                }
            </div>
            <div className=" text-mycolor-200 py-2 space-y-10 pl-2">
                <span className=" flex space-x-4"> <FiTwitter/> <BsInstagram/></span>
                <select className='outline-none'>
                    <option value="">EN</option>
                    <option value="">SP</option>
                    <option value="">GE</option>
                </select>
            </div>
        </div>
    );
};

export default Footer;