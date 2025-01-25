import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <h1>Video library</h1>
      <Link to="/admin-login">Admin Login</Link>
      
        

    </div>
  )
}

export default Home