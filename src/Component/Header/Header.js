import React from 'react';
import {BsSearch} from 'react-icons/bs'
import logo from './logo.png'
import profileImg from './../Search/images/profile.jpg'
import {FaChevronDown} from 'react-icons/fa'
import {RiMessage2Line} from 'react-icons/ri'
import {IoMdNotificationsOutline} from 'react-icons/io'

const Header = () => {
    return (
        <div className='h-[89px] bg-mycolor-100 py-2  flex justify-between md:fixed  md:top-0 md:w-full z-40'>
            <div className="header">
                <img src={logo} alt="" className="h-[73px] w-[73px] mr-10" />
                <label className="relative w-full text-base hidden sm:block">
                    <input type="text" name="" className='header-Input' placeholder='Search'/>
                    <span className='header-Icon'><BsSearch/></span>
                    
                </label>
                <button className='header-btn'>Search</button>
            </div>
            <div className="w-1/2 flex justify-end items-center space-x-6 text-mycolor-200 mr-10">
                <div className="flex text-xs space-x-2">
                    <img src={profileImg} alt="" className="h-[37px] w-[37px] rounded-full" />
                    <p className="flex justify-center items-center text-xl space-x-1">
                        <span className="font-bold ">ariana</span>
                        <FaChevronDown size='20px' className='pt-2'/>
                    </p>
                </div>
                <div className="flex items-center space-x-4 text-xl">
                <RiMessage2Line/>
                <IoMdNotificationsOutline/>
                </div>
            </div>
        </div>
    );
};

export default Header;