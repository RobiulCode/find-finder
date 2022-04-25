import React,{useState} from 'react';
import {FaAngleLeft} from 'react-icons/fa'
import {AiOutlineCheck} from 'react-icons/ai'

const ToastNotification = ({handleIndex}) => {
    const[toastLike,setToastLike]= useState(false)
    const[toastComment,setToastComment]= useState(false)
    return (
        <div className="text-sm space-y-3">
            <div className="notification cursor-pointer" onClick={()=>handleIndex(4)}>
                <FaAngleLeft/>
                <span className="">Toast Notifications</span>
            </div>
            <div className="space-y-1">
                
                <p className='font-bold'>Related to you and your post</p>
                <div className="notification-CheckBox">
                    <span className="notification-Check">
                        {
                            toastComment && <AiOutlineCheck/>
                        }
                    </span>
                    <label htmlFor='comment' >
                        <input type="checkbox" name="comment"  id='comment' onChange={()=>setToastComment(!toastComment)} checked={toastComment}/>
                        <span className='ml-4'>New comment</span>
                    </label>
                </div>
                <div className="notification-CheckBox">
                    <span className="notification-Check">
                        {
                            toastLike && <AiOutlineCheck/>
                        }
                    </span>
                    <label htmlFor='like' >
                        <input type="checkbox" name="like"  id='like' onChange={()=>setToastLike(!toastLike)} checked={toastLike}/>
                        <span className='ml-4'>New Like</span>
                    </label>
                </div>
                
            </div>
        </div>
    );
};

export default ToastNotification;