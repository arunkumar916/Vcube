import React from 'react'
import './Secondapp.css'

const Login = () => {
  return (
    <div className='login'>
      
        <>
        <form >
        <h3 className='text-white text-center'>Student Login</h3>
        <label className="form form-label"> Mobile Number:</label>
        <input
          type="text"
          placeholder="Enter Mobile Number "
          className='fname form-control'
          required
        />
        
        <label className="femail form-label">Password: </label>
        <input
          type="password"
          placeholder="Enter Password "
          className='email form-control'
          required
        />
        
       
        {/* <input
          type="text"
          value={course}
          placeholder="Course"
          className='course'
          required
          onChange={(e) => setCourse(e.target.value)}
        />
         */}
        <button className='submit' class='btn  btn-danger' type="submit">Submit</button>
        
       
        
      </form>

        
        </>
    </div>
  )
}

export default Login