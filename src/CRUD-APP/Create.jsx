import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://65bcbf9ab51f9b29e93231c0.mockapi.io/CRUD-2024", {
      e_name: name,
      e_age: age,
      e_email: email
    }).then(() => {
      navigate("/")
    }).catch((err) => {  console.log(err);})
  }


  return (
    <>
      <div>
        <div className='row'>
          <div className="col-md-8 col-lg-8 mx-auto">

            <div className="bg-primary rounded p-4 text-center text-light mt-3">
              <h1>Create Data</h1>
            </div>

            <div className='mt-4 mb-4 ms-auto'>
              <Link to='/'>
                <button className='btn btn-primary'>Read data +</button>
              </Link>
            </div>


            <form className='mt-5' onSubmit={handleSubmit}>
              <div className="form-group mt-3">
                <label className='mb-3 fs-4'>Enter name </label>
                <input type="text" placeholder='Enter Your Name' className='form-control' onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="form-group mt-3">
                <label className='mb-3 fs-4'>Enter Age </label>
                <input type="number" placeholder='Enter Your Age' className='form-control' onChange={(e) => setAge(e.target.value)} />
              </div>
              <div className="form-group mt-3">
                <label className='mb-3 fs-4'>Enter Email </label>
                <input type="email" placeholder='Enter Your Email' className='form-control' onChange={(e) => setEmail(e.target.value)} />
              </div>
              <br />
              <div className='d-grid'>
                <input type="submit" value="Submit" className='btn btn-outline-primary' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Create