import {Link} from 'react-router-dom'
export const settingData=[
    {
        text:'Profile',
        path:'profile'
    },
    {
        text:'Account setting',
        path:'account'
    },
    {
        text:'Privacy and Safety',
        path:'privacy'
    },
    {
        text:'Notifications',
        path:'notification'
    },
    {
        text:'Language',
        path:'language'
    }
]
export const SettingLink=({data})=>{
    return(
        <Link to={data.path} className='w-full focus:bg-mycolor-100 py-2 px-2 rounded-md text-mycolor-200 font-semibold hover:bg-mycolor-100 h-[42px]'>{data.text}</Link>
    )
}