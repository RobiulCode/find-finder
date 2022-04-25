import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import {FaAngleRight} from 'react-icons/fa'
import {AiFillEye} from 'react-icons/ai'

const AccountInfo = () => {
    return (
        <div className='text-sm space-y-3 mb-4 md:mb-0'>
            <h1 className='text-xl text-mycolor-200 font-bold'>Account Info</h1>
            <div className="">
                <label htmlFor="username">Email</label><br />
                <input type="text" name="email" className="input" /><br/>

            </div>
            <div className="">
                <label htmlFor="number">Phone Number</label><br />
                <input type="text" name="number" className="input" />
            </div>
            <div className=" relative">
                <label htmlFor="password">Password</label><br />
                <input type="password" name="password" className="input" />
                <span className='absolute text-xl text-gray-400 right-3 bottom-2'><AiFillEye/></span>
            </div>
            <div className="">
            <Link to='' className='text-mycolor-200'>
                    <span >Change password</span>
                </Link>
            </div>
            <div className="space-y-2">
            <h2 className='text-xl text-mycolor-200 font-bold'>Account Management</h2>
                <Link to='deleteAccount' className='notification-Link'>
                    <span >Delete Account</span>
                    <span className='text-mycolor-200 text-xl'><FaAngleRight/></span>
                </Link>
                <Outlet/>
            </div>
        </div>
    );
};

export default AccountInfo;