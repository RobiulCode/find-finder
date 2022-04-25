import React from 'react';
import { termsConditionData } from './TermsConditionData';

const TermsCondition = () => {
    return (
        <div className='space-y-1 mb-4'>
            <h1 className="text-mycolor-200 text-2xl font-bold">Terms of service</h1>
            <p className="">Last Modified : April 2022</p>
            <p className="text-xl">Content</p>

            <div className="space-y-1 text-xl font-medium">
                {
                    termsConditionData.map((data)=> <h1>{data.id} . {data.heading}</h1>)
                }
            </div>
            <div className="space-y-1">
                {
                    termsConditionData.map((data)=> <div className="space-y-1">
                        <h1 className="text-xl font-medium">{data.heading}</h1>
                        <p className='text-base'>{data.description}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TermsCondition;