import React from 'react'
import './Secondapp.css'


const AdminLogin = () => {
  return (
    <div className='AdminLogin'>
    <>
    <form >
    <h3 className='text-white text-center'>Admin Login</h3>
    <label className="form form-label"> AdminID</label>
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

export default AdminLogin