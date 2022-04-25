import React from 'react';
import {AiOutlinePlusCircle} from 'react-icons/ai'

export const EditProfile = () => {
    return (
        <div className='space-y-1'>
            <h1 className='text-xl text-mycolor-200 font-bold'>Edit Profile</h1>
            <div className="text-sm">
                <label htmlFor="username">Username</label><br />
                <input type="username" name="email" className="input" /><br/>
                <span className='text-gray-400 text-xs'>https://findfindrr.com/arrianamorigan</span>

            </div>
            <div className="text-sm">
                <label htmlFor="username">Display Name</label><br />
                <input type="username" name="email" className="input " />
            </div>
            <div className="text-sm">
                <label htmlFor="email">Bio</label><br />
                <textarea type="email" name="email" className="w-full rounded-lg py-1 pl-4 border border-mycolor-200 outline-none h-[83px]" />
            </div>
            <div className="text-sm">
                <label htmlFor="location">Location</label><br />
                <input type="location" name="email" className="input" />
            </div>
            <div className="text-sm">
                <label htmlFor="email">Website URL</label><br />
                <input type="email" name="email" className="input " />
            </div>
            <div className="flex items-center space-x-2">
                <span className="text-mycolor-200 text-xl"><AiOutlinePlusCircle/></span>
                <span className='text-sm'>Add URL</span>
            </div>
            <div className="flex justify-end">
                <input type="submit" value="Save" className="bg-mycolor-200 px-5 rounded-full border border-mycolor-200 text-white text-sm py-1 h-[42px] w-[119px]" />
            </div>
        </div>
    );
};

export default EditProfile;