import React from 'react'
import './Home.css';

function Home() {
  return (
    <center>
        <h1 className='homeh1'>YOUR PROFILE</h1>
        <div className='homediv3'>
          <h2 className='homeh2'>Login</h2>
          <form>
            <h2 className='homeh21'>E-Mail ID</h2>
            <input
              type='text'
              className='homeinput1'
              placeholder='Mail Id'/>

              {/* <h2 className='homeh21'>Password</h2> */}
             <b>Password</b> 

            <input
              type='number'
              className='homeinput2'
              placeholder='Password'
            />
            <button className='login' type='submit'>
              Login
            </button>
          </form>
        </div>
      </center>
  )
}

export default Home