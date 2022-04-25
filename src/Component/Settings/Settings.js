import React,{useState} from 'react';
import {FaAngleLeft} from 'react-icons/fa'
import EditProfile from './EditProfile/EditProfile';
import { settingData, SettingLink } from './SettingData';
import AccountInfo from './AccountsInfo/AccountInfo';
import PrivacySafety from './PrivacySafety/PrivacySafety';
import Notification from './Notification/Notification';
import Language from './Language/Language';
import ChangePassword from './AccountsInfo/ChangePassword/ChangePassword';
import DeleteAccount from './AccountsInfo/DeleteAccount/DeleteAccount';
import SiteNotification from './Notification/SiteNotification.js/SiteNotification';
import ToastNotification from './Notification/ToastNotification/ToastNotification';


const Settings = () => {
    const [componentIndex,setComponentIndex] = useState(1)
    const handleIndex=(index)=>{
        setComponentIndex(index)
    }
    const renderComponent =componentIndex===1 ? <EditProfile/> : componentIndex===2 ? <AccountInfo handleIndex={handleIndex}/>: componentIndex===3? <PrivacySafety/> :componentIndex===4?<Notification handleIndex={handleIndex}/> : componentIndex===5 ? <Language/>:componentIndex===6 ?<ChangePassword/>:componentIndex===7 ? <DeleteAccount/>:componentIndex===8 ?<SiteNotification handleIndex={handleIndex}/>:componentIndex===9 ?<ToastNotification handleIndex={handleIndex}/  >:<EditProfile/>
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
                    <ul>
                        {
                            settingData.map((data)=><SettingLink data={data} handleIndex={handleIndex} value={componentIndex}/>)
                        }
                    </ul>
                </div>
            </div>
            <div className="md:w-8/12 p-6">
                {renderComponent}
            </div>
        </div>
    );
};

export default Settings;