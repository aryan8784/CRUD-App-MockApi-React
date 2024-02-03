import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Edit = () => {



  const [id, setId] = useState(0)
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setAge(localStorage.getItem("age"));
    setEmail(localStorage.getItem("email"));
  }, []);


  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`https://65bcbf9ab51f9b29e93231c0.mockapi.io/CRUD-2024/${id}`, {
      e_name: name,
      e_age: age,
      e_email: email
    }).then(() => {
      navigate("/")
    }).catch((err) => {
      console.log(err);
    })
  }




  return (
    <>
      <div>
        <div className='row'>
          <div className="col-md-8 col-lg-8 mx-auto">

            <div className="bg-primary rounded p-4 text-center text-light mt-3">
              <h1>Update Data</h1>
            </div>

            <div className='mt-4 mb-4 ms-auto'>
              <Link to='/'>
                <button className='btn btn-primary'>Read data +</button>
              </Link>
            </div>


            <form className='mt-5' onSubmit={handleUpdate}>
              <div className="form-group mt-3">
                <label className='mb-3 fs-4'>Enter name </label>
                <input type="text" placeholder='Enter Your Name' className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="form-group mt-3">
                <label className='mb-3 fs-4'>Enter Age </label>
                <input type="number" placeholder='Enter Your Age' className='form-control' value={age} onChange={(e) => setAge(e.target.value)} />
              </div>
              <div className="form-group mt-3">
                <label className='mb-3 fs-4'>Enter Email </label>
                <input type="email" placeholder='Enter Your Email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <br />
              <div className='d-grid'>
                <input type="submit" value="Update" className='btn btn-outline-primary' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Edit