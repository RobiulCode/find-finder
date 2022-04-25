import React,{useState} from 'react';
import {AiOutlineCheck} from 'react-icons/ai'

const Language = () => {
    const [english,setEnglish] = useState(false)
    const [spanish,setSpanish] = useState(false)
    const [german,setGerman] = useState(false)
    
    return (
        <div className="space-y-2">
            <h1 className='text-xl font-bold text-mycolor-200'>Language</h1>
            <div className="flex items-center space-x-2 relative">
                    <span className="absolute w-5 h-5 rounded-full border border-mycolor-200 flex justify-center items-center text-mycolor-200">
                        {
                            english && <AiOutlineCheck/>
                        }
                    </span>
                    <label htmlFor='english' >
                        <input type="checkbox" name="english"  id='english' onChange={()=>setEnglish(!english)} checked={english}/>
                        <span className='ml-4'>English</span>
                    </label>
                </div>
                <div className="flex items-center space-x-2 relative">
                    <span className="absolute w-5 h-5 rounded-full border border-mycolor-200 flex justify-center items-center text-mycolor-200">
                        {
                            spanish && <AiOutlineCheck/>
                        }
                    </span>
                    <label htmlFor='spanish' >
                        <input type="checkbox" name="spanish"  id='spanish' onChange={()=>setSpanish(!spanish)} checked={spanish}/>
                        <span className='ml-4'>Spanish</span>
                    </label>
                </div>
                <div className="flex items-center space-x-2 relative">
                    <span className="absolute w-5 h-5 rounded-full border border-mycolor-200 flex justify-center items-center text-mycolor-200">
                        {
                            german && <AiOutlineCheck/>
                        }
                    </span>
                    <label htmlFor='german' >
                        <input type="checkbox" name="german"  id='german' onChange={()=>setGerman(!german)} checked={german}/>
                        <span className='ml-4'>German</span>
                    </label>
                </div>
        </div>
    );
};

export default Language;