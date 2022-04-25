import React,{useState} from 'react';

const PrivacySafety = () => {
    const[activity,setActivity] = useState(false)
    const[subscription,setSubscription] = useState(false)
    return (
        <div className='space-y-2 text-sm'>
            <h1 className='text-xl font-bold text-mycolor-200'>Privacy and safety</h1>
            <label htmlFor='activity' className="flex justify-between items-center h-[42px] px-2 w-full bg-mycolor-100 rounded-md relative">
                        <input type="checkbox" name="activity"  id='activity' onChange={()=>setActivity(!activity)} checked={activity}/>
                        <span className=''>Show activity status</span>
                        <span className={!activity?
                        "absolute w-8 h-4 rounded-full border border-mycolor-200 flex items-center text-mycolor-200 right-1 bg-cyan-50 transition-all duration-500":
                        "absolute w-8 h-4 rounded-full border border-mycolor-200 flex items-center text-mycolor-200 right-1 bg-cyan-100 transition-all duration-500"
                    }>
                        <span className={!activity?
                            "absolute w-3 h-3 rounded-full border border-mycolor-200 text-mycolor-200 bg-red-400 left-1":
                            "absolute w-3 h-3 rounded-full border border-mycolor-200 text-mycolor-200 bg-white right-1"
                        }></span>
                    </span>
            </label>
            <label htmlFor='subscription' className="flex justify-between items-center h-[42px] px-2 w-full bg-mycolor-100 rounded-md relative">
                        <input type="checkbox" name="subscription"  id='subscription' onChange={()=>setSubscription(!subscription)} checked={subscription}/>
                        <span className=''>Show subscription status</span>
                        <span className={!subscription?
                        "absolute w-8 h-4 rounded-full border border-mycolor-200 flex items-center text-mycolor-200 right-1 bg-cyan-50 transition-all duration-500":
                        "absolute w-8 h-4 rounded-full border border-mycolor-200 flex items-center text-mycolor-200 right-1 bg-cyan-100 transition-all duration-500"
                    }>
                        <span className={!subscription?
                            "absolute w-3 h-3 rounded-full border border-mycolor-200 text-mycolor-200 bg-red-400 left-1":
                            "absolute w-3 h-3 rounded-full border border-mycolor-200 text-mycolor-200 bg-white right-1"
                        }></span>
                    </span>
            </label>
        </div>
    );
};

export default PrivacySafety;