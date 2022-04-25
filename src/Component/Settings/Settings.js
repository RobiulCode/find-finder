import React from 'react';
import {FaAngleLeft} from 'react-icons/fa'
import { Outlet } from 'react-router-dom';
import { settingData, SettingLink } from './SettingData';


const Settings = () => {
    return (
        <div className='md:flex justify-between'>
            <div className="md:w-4/12 md:border-r border-r-mycolor-200 space-y-4 p-6">
                <div className="flex items-center text-mycolor-200 text-xl font-bold space-x-2">
                    <FaAngleLeft/>
                    <span className="">Account Setting</span>
                </div>
                <div className="">
                    <input type="text" name="" className='h-[42px] py-2 px-2 shadow-md w-full rounded-md placeholder-black bg-mycolor-100' placeholder='@rianamorrigan' disabled/>
                </div>
                <div className="flex flex-col space-y-2">
                    {
                        settingData.map((data)=><SettingLink data={data}/>)
                    }
                </div>
            </div>
            <div className="md:w-8/12 p-6">
                <Outlet/>
            </div>
        </div>
    );
};

export default Settings;