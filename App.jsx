import React from 'react'
import logo from './assets/logo.png'

export default function App() {
  return (
    <div style={{fontFamily:'Arial', padding:20}}>
      <header style={{display:'flex', alignItems:'center', gap:12}}>
        <img src={logo} style={{height:60}} />
        <div>
          <h1>AKI Building Services</h1>
          <div>602 Ashdale Pl, Thunder Bay, ON</div>
          <div>+1 807 252 9395 • info@akiservices.ca</div>
        </div>
      </header>
      <hr style={{margin:'20px 0'}}/>
      <h2>AKI Contractor Management System</h2>
      <p>Production deployment successful.</p>
    </div>
  )
}
