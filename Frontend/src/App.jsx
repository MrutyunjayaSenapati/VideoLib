
import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  VideoHome  from './components/VideoHome.jsx';
import  AdminLogin  from './components/AdminLogin.jsx';
import  UserLogin  from './components/UserLogin.jsx';
import  UserRegister  from './components/UserRegister.jsx';
import  UserDashBoard  from './components/UserDashBoard.jsx';
import  AdminDashboard  from './components/AdminDashboard.jsx';






function App() {
 

  return (
    <> 
      <div className='body-background'>
        <div className='bg-shade'>
            <h1 className='text-center text-white pt-4'>Technologies Video Library</h1>
            <BrowserRouter>

                <Routes>
                    <Route path='/' element={<VideoHome />} />

                    <Route path='admin-login' element={<AdminLogin />} />

                    <Route path='user-login' element={<UserLogin />} />
                    
                     <Route path='user-register' element={<UserRegister />} />

                   <Route path='user-dash' element={<UserDashBoard />} />

                
                    <Route path='admin-dash' element={<AdminDashboard />} />
                      
                    <Route path='add-video' element={<AdminAddVideo />} />
                     {/*
                    <Route path='edit-video/:id' element={<AdminEditVideo />} />
                    <Route path='delete-video/:id' element={<AdminDeleteVideo />} />  */}
                </Routes>
            
            </BrowserRouter>
        </div>
      </div>
         
    </>
  )
}

export default App
