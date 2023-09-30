// import './Firstapp.css';
import './Secondapp.css'
import { Link } from 'react-router-dom';
function Firstapp() {

  return (<>

    <div className='navbar'>
      <div className='logo'>
        <Link to='/'><img src={require("./images/logo1.png")} alt="Logo1" /></Link>
      </div>
      <div className='nav'>
        <ul>
          
          <Link to='/'> Home</Link>
          <Link to='/'> About Us</Link> 
           <Link to='/'> Courses</Link> 
            <Link to='/'> contact</Link>
          <div class="dropdown">
            <button class="dropbtn">Login</button>
            <div class="dropdown-content">
            <Link to='/studentlogin' className='loginadmin'> Student Login</Link>
            <Link to='/Adminlogin' className='loginstudent'> Admin Login</Link>
            </div>
          </div>

          {/* <Button className='btn' type='button'  variant="warning">ENROLL NOW</Button> */}
        </ul>
      </div>
    </div>
    

  </>);
}
export default Firstapp;