import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
<div className='footermenu'>

<div className="footerlogo">
    <img src={require('./images/logo1.png')} alt="" />
    <h4 class="has-text-align-center"> Learn Best Courses In Our Training Academy For your IT Career </h4>
    <h5 class="has-text-align-center elementor-heading-title elementor-size-default">V CUBE Can Assist you to Reach Your Goal with IT&nbsp; Courses</h5>
</div>
<div className="menulinks">
         <Link to='/'> Home</Link>
          <Link to='/'> About Us</Link> 
           <Link to='/'> Home</Link> 
            <Link to='/'> Home</Link>
</div>
<div className="adress">
<p>V CUBE Software Solutions Pvt. Ltd. second floor,above Raymond’s clothing store,KPHB Phase 1 Kukatpally, Hyderabad, Telangana 500072<br/>
Contact us :<br/>
+917675070124/ +919059456742</p>
</div>



</div>
    </div>
  )
}

export default Footer