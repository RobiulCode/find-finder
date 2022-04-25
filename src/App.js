import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Profile from './Component/Profile/Profile';
import Settings from './Component/Settings/Settings';
import PrivacyPolicy from './Component/PrivacyPolicy/PrivacyPolicy';
import { Search } from './Component/Search/Search';
import TermsCondition from './Component/TermsCondition/TemsCondition';
import Faq from './Component/FAQ/Faq';
import { Route, Routes } from 'react-router-dom';
import { EditProfile } from './Component/Settings/EditProfile/EditProfile';
import AccountInfo from './Component/Settings/AccountsInfo/AccountInfo';
import PrivacySafety from './Component/Settings/PrivacySafety/PrivacySafety';
import Notification from './Component/Settings/Notification/Notification';
import Language from './Component/Settings/Language/Language';
import { SiteNotification } from './Component/Settings/Notification/SiteNotification.js/SiteNotification';
import ToastNotification from './Component/Settings/Notification/ToastNotification/ToastNotification';
import { DeleteAccount } from './Component/Settings/AccountsInfo/DeleteAccount/DeleteAccount';




function App() {

  return (
    <div className="md:h-screen overflow-scroll">
      <Header/>
      <div className="md:w-10/12 w-11/12 mx-auto md:mt-20 md:mb-24">
        <Routes>
          <Route path='/' element={<Profile/>}/>
          <Route path='search' element={<Search/>}/>
          <Route path='settings' element={<Settings/>}>
            <Route index element={<EditProfile/>}></Route>
            <Route path='profile' element={<EditProfile/>}></Route>
            <Route path='account' element={<AccountInfo/>}>
              <Route path='deleteAccount' element={<DeleteAccount/>}></Route>
            </Route>
            <Route path='privacy' element={<PrivacySafety/>}></Route>
            <Route path='notification' element={<Notification/>}>
              <Route path='site' element={<SiteNotification/>}></Route>
              <Route path='toast' element={<ToastNotification/>}></Route>
            </Route>
            <Route path='language' element={<Language/>}></Route>
          </Route>
          <Route path='privacy' element={<PrivacyPolicy/>}/>
          <Route path='terms' element={<TermsCondition/>}/>
          <Route path='faq' element={<Faq/>}/>
        </Routes>

      </div>
     
      <Footer/>
    </div>
  );
}

export default App;
