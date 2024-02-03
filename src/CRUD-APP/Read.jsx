import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Read = () => {

  const [apiData, setApiData] = useState([])


  const getData = () => {
    axios.get("https://65bcbf9ab51f9b29e93231c0.mockapi.io/CRUD-2024")
      .then((res) => {
        setApiData(res.data)
      }).catch(() => { })
  }


  const handleDelete = (id) => {
    axios.delete(`https://65bcbf9ab51f9b29e93231c0.mockapi.io/CRUD-2024/${id}`)
      .then(() => {
        getData();
      }).catch((err) => { console.log(err); })
  }


  const setDataToStorage = (id, name, age, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("email", email);
  }






  useEffect(() => {
    getData();
  }, []);





  return (
    <>
      <div className="row">
        <div className="col-md-12 col-sm-12">

          <div className="bg-primary rounded p-4 text-center text-light mt-3">
            <h1>Read Data</h1>
          </div>

          <div className='mt-4 mb-4'>
            <Link to='/create'>
              <button className='btn btn-primary'>Create New data +</button>
            </Link>
          </div>

          <table className='table table-bordered table-hover '>
            <thead className='table-dark'>
              <tr className='text-center'>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>EMAIL</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {
                apiData.map((val, ind) => {
                  return (
                    <>
                      <tr key={ind} className='text-center fw-bold'>
                        <td>{val.id}</td>
                        <td>{val.e_name}</td>
                        <td>{val.e_age}</td>
                        <td>{val.e_email}</td>
                        <td>
                          <Link to="/edit">
                            <button type="button" className="btn btn-outline-success" onClick={() => setDataToStorage(val.id, val.e_name, val.e_age, val.e_email)}>Edit</button>
                          </Link>
                        </td>
                        <td>
                          <button type="button" className="btn btn-outline-danger" onClick={() => { if (window.confirm("Are you To Delete Data??")) { handleDelete(val.id) } }}>Delete</button>
                        </td>
                      </tr>
                    </>
                  )
                })
              }

            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Read