import React from 'react';
import { members } from './SearchResult/Member';
import { SearchResult } from './SearchResult/SearchResult';
import { SuggestResult } from './SearchResult/SuggestResult';



export const Search = () => {
    return (
        <div className="md:flex justify-between mb-4">
            
            <div className="md:w-1/2 space-y-4 mx-4">
            <h1 className='text-xl text-mycolor-200 font-bold'>Search results</h1>
                {
                    members.map((data)=><SearchResult data={data}/>)
                }
            </div>
            <div className="md:w-1/2 space-y-4 mx-4 my-6 md:my-0">
            <h1 className='text-xl text-mycolor-200 font-bold'>Suggestions </h1>
                {
                    members.map((data)=><SuggestResult data={data}/>)
                }
            </div>
        </div>
    );
};

export default Search;