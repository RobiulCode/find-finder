import React, { useState } from 'react';

export const DeleteAccount = () => {
    const [accountDelete,setAccountDelete] = useState(false)
    const handleDelete=(e)=>{
        if(e.target.value.length>3){
            setAccountDelete(true)
        }else{
            setAccountDelete(false)
        }

    }
    return (
        <div className='text-sm space-y-4'>
            <h1 className='text-xl font-bold text-mycolor-200'>Delete Account</h1>
            <p className="text-red-500">This will permanently delete your account</p>
            <div className="relative ">
                <span className='absolute bg-red-200 px-2 left-2 top-2 h-[25px] w-[107px] rounded'>Captcha</span>
                <input type="text" name="delete" className="w-full rounded-lg border border-mycolor-200 py-1 pl-32 outline-none h-[42px]" onChange={handleDelete}/>
                <span className='absolute right-2 top-3 text-xs'>Verification Code</span>
            </div>
            <p className='text-xs'>Reload Code</p>
            { accountDelete &&
                <div className="flex justify-end">
                <input type="submit" value="DELETE ACCOUNT" className="bg-mycolor-100 px-5 rounded-full text-red-500 text-sm h-[42px]" />
            </div>
            }
        </div>
    );
};

export default DeleteAccount;