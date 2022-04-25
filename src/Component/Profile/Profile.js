import React from 'react';
import { BsCamera, BsDot, BsPencil } from 'react-icons/bs';
import { FaRegHeart, FaUserCircle } from 'react-icons/fa';
import coverPhoto from './../Search/images/cover.jpg';
import profilePhoto from './../Search/images/profile.jpg';
import { profileImages } from './images/ProfileImages';
const profileLink= ['loremipsum.com','loremipsum.com','loremipsum.com','loremipsum.com','loremipsum.com','loremipsum.com']
const profileOption = [{text:'Profile',img:<FaUserCircle/>},{text:'Friends',img:<FaRegHeart/>},{text:'Account',img:<BsPencil/>}]

const Profile = () => {
    return (
        <div className=''>
            <div className="relative h-[273px] bg-cover" style={{backgroundImage:`url(${coverPhoto})`}}>
                <span className="cover-Icon bottom-1 "><BsCamera/></span>
            </div>
            <div className="flex flex-col justify-center text-center">
                <div className="z-10 self-center -mt-28">
                    <span className="relative">
                    <img src={profilePhoto} alt="" className="profile-Img" />
                    <span className="profile-Img-Icon"><BsCamera/></span>
                    </span>
                </div>
                <div className="py-2 self-center">
                    <p className="font-bold">Arriana Morrigana</p>
                    <p className="space-x-1 flex items-center">
                    <span className="">@arrianamorigana</span>
                    <span className="fon-bold text-gray-300 text-2xl"><BsDot/></span>
                    <span className="text-xs">last seen 1 min ago</span>
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 text-center py-2">
                {profileLink.map((link,index)=><span key={index} className="md:w-2/12 block">{link}</span>)}
            </div>
            <div className="profile-Option">
                <div className="flex justify-between w-8/12 mx-auto">
                    {
                        profileOption.map((data,index)=><span key={index} className='profile-Option-Single'>
                            {data.img}<span className='text-sm'>{data.text}</span>
                            </span>)
                    }
                </div>
            </div>
            <div className="">
                <p className='text-center py-4 text-base'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus nulla repellat eius amet sapiente in cupiditate tempora nemo exercitationem. Tempora ducimus incidunt rem! Doloribus, quae pariatur beatae ut recusandae deleniti?</p>
                <div className="grid grid-cols-3 gap-5 my-4">
                    {
                        profileImages.map((image,index)=><div key={index} className="center h-40 md:h-[291px] bg-cover rounded-lg " style={{backgroundImage:`url(${image.img})`}}>
                            <span className="text-white text-xl">{image.text}</span>
                        </div>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Profile;