import React,{useState} from 'react';
import {FaAngleLeft} from 'react-icons/fa'
import {AiOutlineCheck} from 'react-icons/ai'

export const SiteNotification = ({handleIndex}) => {
    const [siteLike,setSiteLike] = useState(false)
    const [siteComment,setSiteComment] = useState(false)
    const [siteDiscount,setSiteDiscount] = useState(false)
    const [siteStream,setSiteStream] = useState(false)
    
    return (
        <div className="text-sm space-y-3">
            <div className="notification cursor-pointer" onClick={()=>handleIndex(4)}>
                <FaAngleLeft/>
                <span className="">Site Notifications</span>
            </div>
            <div className="space-y-1">
                
                <p className='font-bold'>Related to you and your post</p>
                <div className="notification-CheckBox">
                    <span className="notification-Check">
                        {
                            siteComment && <AiOutlineCheck/>
                        }
                    </span>
                    <label htmlFor='comment' >
                        <input type="checkbox" name="comment"  id='comment' onChange={()=>setSiteComment(!siteComment)} checked={siteComment}/>
                        <span className='ml-4'>New comment</span>
                    </label>
                </div>
                <div className="notification-CheckBox">
                    <span className="notification-Check">
                        {
                            siteLike && <AiOutlineCheck/>
                        }
                    </span>
                    <label htmlFor='like' >
                        <input type="checkbox" name="like"  id='like' onChange={()=>setSiteLike(!siteLike)} checked={siteLike}/>
                        <span className='ml-4'>New Like</span>
                    </label>
                </div>
                
            </div>
            <div className="space-y-1">
                <p className='font-bold'>Subscribe and following</p>
                <div className="notification-CheckBox">
                    <span className="notification-Check">
                        {
                            siteDiscount && <AiOutlineCheck/>
                        }
                    </span>
                    <label htmlFor='discount' >
                        <input type="checkbox" name="discount"  id='discount' onChange={()=>setSiteDiscount(!siteDiscount)} checked={siteDiscount}/>
                        <span className='ml-4'>Discount from users i used to follow</span>
                    </label>
                </div>
                <div className="notification-CheckBox">
                    <span className="notification-Check">
                        {
                            siteStream && <AiOutlineCheck/>
                        }
                    </span>
                    <label htmlFor='stream' >
                        <input type="checkbox" name="stream"  id='stream' onChange={()=>setSiteStream(!siteStream)} checked={siteStream}/>
                        <span className='ml-4'>Upcoming stream reminders</span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default SiteNotification;