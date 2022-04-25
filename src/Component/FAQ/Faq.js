import React from 'react';
import { faqData } from './FaqData';
import FaqQA from './FaqQA';

const Faq = () => {
    
    return (
        <div className='md:flex justify-between mt-10'>
            <div className="md:w-1/2 mt-4">
                <div className="md:w-10/12 mx-auto space-y-3">
                    <h2 className="text-mycolor-200 font-extrabold text-xl">FAQ's</h2>
                    {
                        faqData.map((data)=><FaqQA key={data.id} data={data}/>)
                    }
                    </div>
            </div>
            <div className="md:w-1/2 mb-3 md:mb-0 mt-4">
                <div className="bg-mycolor-100 md:w-10/12 py-3 my-auto rounded-md mt-10">
                    <div className="text-center">
                        <h1 className="text-mycolor-200 font-extrabold text-xl">Any Question</h1>
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                    <div className="w-10/12 mx-auto  space-y-2">
                        <div className="">
                            <label htmlFor="email">Email*</label><br />
                            <input type="email" name="email" className="w-full rounded-full h-[42px] pl-4 outline-none " />
                        </div>
                        <div className="">
                            <label htmlFor="email">Massage</label><br />
                            <textarea type="email" name="email" className="w-full rounded-lg py-1 px-2 h-[121px] outline-none" />
                        </div>
                        <div className="flex justify-end">
                            <input type="submit" value="Send" className="bg-mycolor-200 px-5 rounded-full text-white text-sm py-1" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;