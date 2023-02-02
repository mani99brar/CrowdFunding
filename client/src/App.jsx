import React from 'react';
import {Route , Routes } from 'react-router-dom';
import {CampaignDetails,CreateCampaign,Home,Profile,NakaLogin,NakaHome,AddAlert,VehicleDetails,PoliceAdmin,AlertFeedback} from './pages';
import {Sidebar , Navbar} from './components';
const App = () => {
  return (
    // <div className='realtive sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row'>
    //   <Routes>
    //     <Route path='/' element={<NakaHome />} /> 
    //     <Route path='/login' element={<NakaLogin />} /> 
    //     <Route path='/add-alert' element={<AddAlert />} /> 
    //     <Route path='/vehicle-details' element={<VehicleDetails />} /> 
    //     <Route path='/admin' element={<PoliceAdmin />} /> 
    //     <Route path='/alert-feedback' element={<AlertFeedback />} /> 

    //   </Routes>
    // </div>
    <div className='realtive sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row'>
      <div className='sm:flex hidden mr-10 relative'>
        <Sidebar />
      </div>
      <div className='flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5'>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/naka/login' element={<Login />} /> */}
          <Route path='/create-campaign' element={<CreateCampaign/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/campaign-details/:id' element={<CampaignDetails/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
