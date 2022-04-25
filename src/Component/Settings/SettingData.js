export const settingData=[
    {
        text:'Profile',
        path:'profile',
        id:1
    },
    {
        text:'Account setting',
        path:'account',
        id:2
    },
    {
        text:'Privacy and Safety',
        path:'privacy',
        id:3
    },
    {
        text:'Notifications',
        path:'notification',
        id:4
    },
    {
        text:'Language',
        path:'language',
        id:5
    }
]
const inactiveClass = 'w-full focus:bg-mycolor-100 py-2 px-2 rounded-md text-mycolor-200 font-semibold  h-[42px] cursor-pointer'
const activeClass = 'w-full focus:bg-mycolor-100 py-2 px-2 rounded-md text-mycolor-200 font-semibold bg-mycolor-100  h-[42px] cursor-pointer'
export const SettingLink=({data,handleIndex,value})=>{
    const activeLinkClass =  value ===1 ? activeClass :value ===2 ? activeClass:value ===3 ? activeClass:value ===4 ? activeClass:value ===5 ? activeClass:inactiveClass
    return(
        <li onClick={()=>handleIndex(data.id)} className={value === data.id ?activeLinkClass:inactiveClass}>{data.text}</li>
    )
}