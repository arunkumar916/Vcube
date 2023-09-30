import axios from "axios";
import { useState } from "react";
// import img1 from './images/BG.jpg';
import {Link} from 'react-router-dom'
import './Secondapp.css';
import Button from 'react-bootstrap/Button';
import Footer from "./Footer";
function Secondapp(){
    const [fullname, setFullname] = useState("");
    const [emailid, setEmailid] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [course, setCourse] = useState("");
    function post(){
        axios.post('http://127.0.0.1:8000/post/',{
          Name:fullname,
          Email:emailid ,
          MobileNumber:phoneNumber,
          Course:course,

        }).then((response)=>{
            console.log(response.data)
        }).catch((error)=>{
            console.log(error);
        });
        
       alert('Form Submited') 

    }
    

    return(
      <>
      <div className='BG' > 
       <div className='para'>
       <span class="elementor-icon-list-text"><li>V cube software solutions Pvt.Ltd</li></span>
      <h1> Learn Best Courses  In  Our  Traning  Academy For Your "IT CAREER"</h1>
      <p>V CUBE SOFTWARE SOLUTIONS PVT.LTD  is one of the Best software Traning institutes, Can Assist you to Reach Your GOAL with IT Courses.</p>

    <div className="buttons">
   <Link path='/studentlogin' className="btn btn-warning"> Start Course</Link>
    <button className="btn btn-secondary ">View All Courses</button>

    </div>

      </div>      
      <form onSubmit={post}>
        <label className="form form-label"> Name:</label>
        <input
          type="text"
          value={fullname}
          placeholder="First name"
          className='fname form-control'
          required
          onChange={(e) => setFullname(e.target.value)}
        />
        
        <label className="femail form-label">Email: </label>
        <input
          type="text"
          value={emailid}
          placeholder="Email "
          className='email form-control'
          required
          onChange={(e) => setEmailid(e.target.value)}
        />
        
        <label className="fphn form-label">Mobile Number:</label>
        <input type="text"
          value={phoneNumber}
          placeholder="Mobile Number"
          className='phn form-control'
          required
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        
        <label className="fcourse form-label">Course :</label>
        {/*<select className="form-select">
          <option>Python</option>
          <option>Python FullStack</option>
          <option>Java</option>
          <option>Java FullStack</option>
        </select>*/}
         <input
          type="text"
          
          value={course}
          placeholder="Course"
          className='course form-control'
          required
          onChange={(e) => setCourse(e.target.value)}
        />
         
        <Button className='submit' class='btn btn-danger' type="submit">Submit</Button>
        
            </form>
   
      </div>
      <Footer/>
      
      </>

    );
}

export default Secondapp;