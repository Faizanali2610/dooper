import { useState } from 'react'
import Login from './components/Login'
import Verify from './components/Verify'
import {BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Successfull from './components/Successfull'
import Profileunder from './components/Profileunder'
import Dashboard from './components/Dashboard'
import DashboardDark from './components/DashboardDark'
import DashCard from './components/DashCard'
import BookingCard from './components/Booking'
import StartService from './components/StartService'
import Serviceverify from './components/Serviceverify'
import SuccessCard from './components/SuccessCard'
import SuccessFullpage from './components/SuccessFullpage'
import SampleCollected from './components/SampleCollected'
import EndService from './components/EndService'
import AddReportCard from './components/AddReportCard'
import Downloadreport from './components/Downlaodreport'
import MyProfile from './components/MyProfile'
import Notifications from './components/Notifications'
import EditProfile from './components/EditProfile'
import Association from './components/Association'
import Documents from './components/Documents'
import Bankinfo from './components/Bankinfo'
import ViewProfile from './components/ViewProfile'
import Earning from './components/Earning'
import Transaction from './components/Transaction'
import Transactioncomplete from './components/Transactioncomplete'
import Withdrawalcard from './components/Withdrawalcard'
// import BasicDetails from './components/BasicDetails'
function App() {

  return (
   
    <Router>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/verify' element={<Verify />} />
      <Route path='/successfull' element={<Successfull />} />
      <Route path='/profileunderreview' element={<Profileunder />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/dashboarddark' element={<DashboardDark />} />
      <Route path='/dashboardcard' element={<DashCard />} />
      <Route path='/dashboardbooking' element={<BookingCard />} />
      <Route path='/startservicing' element={<StartService />} />
      <Route path='/serviceverify' element={<Serviceverify />} />
      <Route path='/successfullpage' element={<SuccessFullpage />} />
      <Route path="/samplecollected" element={<SampleCollected />}/>
      <Route path="/endservice" element={<EndService />}/>
      <Route path="/addreportcard" element={<AddReportCard />}/>
      <Route path="/downloadreport" element={<Downloadreport />}/>
      <Route path="/myprofile" element={<MyProfile />}/>
      <Route path="/notifications" element={<Notifications />}/>
      <Route path="/editprofile" element={<EditProfile />}/>
      <Route path="/association" element={<Association />}/>
      <Route path="/document" element={<Documents />}/>
      <Route path='/bankinfo' element={<Bankinfo />} />
      <Route path="/viewprofile" element={<ViewProfile />} />
      <Route path="/earning" element={<Earning />} />
      <Route path="/transaction" element={<Transaction />} />
      <Route path="/transactioncomplete" element={<Transactioncomplete />} />
      <Route path="/withcard" element={<Withdrawalcard />} />







    </Routes>
    </Router>
 
  )
}

export default App
