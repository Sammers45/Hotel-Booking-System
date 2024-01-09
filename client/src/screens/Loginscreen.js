import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from "../components/Success";
import Swal from 'sweetalert2'
export default function Loginscreen() {


  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState(false)
  const [success, setsuccess] = useState(false)

  useEffect(() => {

    if (localStorage.getItem('currentUser')) {
      window.location.href = '/'
    }

  }, [])

  async function login(e) {
    e.preventDefault()
    const user = {
      email,
      password
    };
    // Client-side validatio
    try {
      setloading(true)
      const result = await axios.post('/api/users/login', user)
      console.log(result)
      if (result.status == 200) {
        localStorage.setItem('currentUser', JSON.stringify(result.data))
        window.location.href = '/'
      }
    } catch (error) {
      seterror(true)
      setloading(false)
      console.log(error);
    }
  }

  return (
    <div className='login'>
      <div className="row justify-content-center mt-5">
        <form onSubmit={(e) => login(e)} className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
          <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
            Login
          </h2>

          {loading && (<Loader />)}
          {error && (<Error error='Invalid Credentials' />)}
          {success && (<Success success='User Login Successfull' />)}
          <div>
            <input required type="text" placeholder="email" className="form-control mt-1" value={email} onChange={(e) => { setemail(e.target.value) }} />
            <input
              type="password"
              placeholder="password"
              className="form-control mt-1"
              value={password}
              required
              onChange={(e) => { setpassword(e.target.value) }}
            />

            <button type="submit" className="btn btn-success mt-3 mb-3 rounded-pill">LOGIN</button>
            <br />
            <a style={{ color: 'black' }} href="/register" className="mt-2">Click Here To Register</a>
          </div>
        </form>
      </div>
    </div>
  )
}