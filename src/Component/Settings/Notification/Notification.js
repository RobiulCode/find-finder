import React,{useState} from 'react';
import {FaAngleRight} from 'react-icons/fa'
import { Link, Outlet } from 'react-router-dom';

const Notification = () => {
    const [pushNotification,setPushNotification]= useState(false)
    const [emailNotification,setEmailNotification]= useState(false)
    return (
        <div className='space-y-2 text-sm'>
            <h1 className='text-xl font-bold text-mycolor-200'>Notifications</h1>
            <label htmlFor='pushnotification' className="notification-Link relative">
                        <input type="checkbox" name="pushnotification"  id='pushnotification' onChange={()=>setPushNotification(!pushNotification)} checked={pushNotification}/>
                        <span className=''>Push Notification</span>
                        <span className={!pushNotification?
                        "absolute w-8 h-4 rounded-full border border-mycolor-200 flex items-center text-mycolor-200 right-1 bg-cyan-50 transition-all duration-500":
                        "absolute w-8 h-4 rounded-full border border-mycolor-200 flex items-center text-mycolor-200 right-1 bg-cyan-100 transition-all duration-500"
                    }>
                        <span className={!pushNotification?
                            "absolute w-3 h-3 rounded-full border border-mycolor-200 text-mycolor-200 bg-red-400 left-1":
                            "absolute w-3 h-3 rounded-full border border-mycolor-200 text-mycolor-200 bg-white right-1"
                        }></span>
                    </span>
            </label>
            
            <label htmlFor='emailnotification' className="notification-Link relative">
                        <input type="checkbox" name="emailnotification"  id='emailnotification' onChange={()=>setEmailNotification(!emailNotification)} checked={emailNotification}/>
                        <span className=''>Email Notification</span>
                        <span className={!emailNotification?
                        "absolute w-8 h-4 rounded-full border border-mycolor-200 flex items-center text-mycolor-200 right-1 bg-cyan-50 transition-all duration-500":
                        "absolute w-8 h-4 rounded-full border border-mycolor-200 flex items-center text-mycolor-200 right-1 bg-cyan-100 transition-all duration-500"
                    }>
                        <span className={!emailNotification?
                            "absolute w-3 h-3 rounded-full border border-mycolor-200 text-mycolor-200 bg-red-400 left-1":
                            "absolute w-3 h-3 rounded-full border border-mycolor-200 text-mycolor-200 bg-white right-1"
                        }></span>
                    </span>
            </label>

            <Link to='site' className='notification-Link'>
                <span>Site Notification</span>
                <span className='text-mycolor-200 text-xl'><FaAngleRight/></span>
                </Link>

            <Link to='toast' className='notification-Link'>
                <span>Toast Notification</span>
                <span className='text-mycolor-200 text-xl'><FaAngleRight/></span>
            </Link>
            <Outlet/>
        </div>
    );
};

export default Notification;