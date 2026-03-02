import React, { useState } from 'react'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

let LoginSignup = () => {
    let [action, setAction] = useState('Sign Up');
  return (
    <div className='container'>

        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>

        <div className="inputs">
            {action==='Login'? <div></div>: <div className='form-control'>
            <img src={user_icon} alt="" />
        <input type="text" className='enter-field'  placeholder='Name'/>
        </div>}
     
         <div className='form-control'>
            <img src={email_icon} alt="" />
        <input type="text" className='enter-field'  placeholder='Email'/>
        </div>
         <div className='form-control'>
            <img src={password_icon} alt="" />
        <input type="password" className='enter-field'  placeholder='Password'/>
        </div>
        </div>
    
     <div className="submit-container">
        <button onClick={()=>setAction('Login')} className='submit' style={action==='Login'? {backgroundColor:'#bc99cb'}: {backgroundColor:'#512260'} }>Login</button>
        <button onClick={()=>setAction('Sign Up')} className='submit' style={action==='Sign Up'? {backgroundColor:'#bc99cb'}: {backgroundColor:'#512260'} } >Sign Up</button>
     </div>

    </div>
  )
}

export default LoginSignup