import React from 'react';
import {FaAngleLeft} from 'react-icons/fa'

const ChangePassword = () => {
    return (
        <div className='space-y-2 text-sm'>
            <div className="flex items-center text-mycolor-200 text-xl font-bold space-x-2">
                    <FaAngleLeft/>
                    <span className="">Change Password</span>
            </div>
            <label htmlFor="newPassword">New Password</label><br />
            <input type="password" name="newPassword" className="input" /><br />
            <label htmlFor="confirmPassword">Confirm Password</label><br />
            <input type="password" name="confirmPassword" className="input" />
            <div className="flex justify-end">
                <input type="submit" value="Save" className="bg-mycolor-200 px-5 rounded-full border border-mycolor-200 text-white text-sm py-1 h-[42px]" />
            </div>
        </div>
    );
};

export default ChangePassword;