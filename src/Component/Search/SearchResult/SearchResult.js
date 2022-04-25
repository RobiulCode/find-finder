import {BsThreeDotsVertical} from 'react-icons/bs'
export const SearchResult=({data})=>{
    const {name,email,posts,likes,bio,profilePhoto,coverPhoto} = data
    return(
        <div className="shadow-md shadow-mycolor-100 rounded-lg mb-2">
            <div className="relative h-[78px] bg-cover rounded-t-lg" style={{backgroundImage:`url(${coverPhoto})`}}>
                <span className="coverIcon top-1 "><BsThreeDotsVertical/></span>
            </div>
            <div className="flex justify-between px-2 py-1 relative">
                <div className="absolute -top-10 left-6 z-40 ">
                <img src={profilePhoto} alt="" className="w-[91px] h-[91px] rounded-full" />
                </div>
                <div className="w-6/12 ml-28">
                    <p className="font-bold text-lg">{name}</p>
                    <p className="text-sm">{email}</p>
                </div>
                <div className="text-mycolor-200 md:space-x-3 w-4/12 text-xs md:text-base flex flex-col md:flex-row pl-6 md:pl-0">
                    <span className="">{posts} Likes</span>
                    <span className="">{likes}K Posts</span>
                </div>
            </div>
            <div className="md:flex md:justify-between items-center px-2 text-base">
                <span className="md:w-9/12 py-2">{bio}</span>
                <span className="md:w-3/12 flex justify-end pb-2">
                <button className="border border-mycolor-200 text-mycolor-200 py-0.5 px-2 rounded-full">View profile</button>
                </span>
            </div>
        </div>
    )
}

