
import './App.css';
import  './Profile.css';
import { Link } from 'react-router-dom'


function Register() {

  return (
    <div className="container"><span className='x'>X</span>
      <form>
        <div className='f'><b>F</b></div>
        <p className='welcome'>Welcome back! Please Login</p>
        <div className='ui-devider'></div>
        <div className='ui-form'>
          <div className='field'>
            <label>Email ID</label><br/>
            <input type="email" name="email" placeholder='Email' required/>
          </div>

          <div className='mobile-no'>
            <label>Mobile No.</label><br/>
            <input type="text" maxLength='10' inputMode='numeric' name="number" placeholder='Enter Mobile No.' required/>
          </div>

          <div className='password'>
            <label>Password</label><br/>
            <input type="password" name="password" placeholder='Password' required/>
          </div>

          <div className='box-div'>
          <div className='box'></div>
          <small className='p'>Stay Logged in</small>
          <small className='forget'>Forgot Password?</small>
          </div>

          <button className='login-btn'><b>Login</b></button>
          <p className='or'>OR</p>
          <button className='login-btn-t'><b>Login with OTP</b></button>

          <p className='signup'>New to Forever<span className='found'>Found</span>?<Link to='/profile' style={{color:'black', textDecoration:'none'}}> Sign Up free</Link></p>

        </div>
      </form>

      
    </div>
    
    
  );
  
}


  


export default Register;
