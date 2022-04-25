import React from 'react';
import { privacyData,PrivacySingle } from './PrivacyData';

const PrivacyPolicy = () => {
    return (
        <div className='py-4'>
            <h1 className="text-mycolor-200 text-2xl font-bold">Privacy Policies</h1>
            <p className="">Last Modified : April 2022</p>
            <div className="space-y-2">
                {
                    privacyData.map((data)=><PrivacySingle key={data.id} data={data}/>)
                }
            </div>
        </div>
    );
};

export default PrivacyPolicy;