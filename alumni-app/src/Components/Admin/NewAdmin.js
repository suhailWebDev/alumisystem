import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { adminRegisterRoute } from '../../utils/ApiRoutes';

const NewAdmin = () => {
  const navigate=useNavigate();
  const [user, setUser] = useState({
    name: '', email: '', contact: '', password: '', confirmpassword: ''
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value })
  }

  const submitForm = async (e) => {
    e.preventDefault();

    const { name, email, contact, password, confirmpassword } = user;

    if (name === "") {
        toast.warning("fname is required!", {
            position: "top-center"
        });
    } else if (email === "") {
        toast.error("email is required!", {
            position: "top-center"
        });
    } else if (!email.includes("@")) {
        toast.warning("includes @ in your email!", {
            position: "top-center"
        });
    } else if (password === "") {
        toast.error("password is required!", {
            position: "top-center"
        });
    } else if (password.length < 6) {
        toast.error("password must be 6 char!", {
            position: "top-center"
        });
    } else if (confirmpassword === "") {
        toast.error("cpassword is required!", {
            position: "top-center"
        });
    }
    else if (confirmpassword.length < 6) {
        toast.error("confirm password must be 6 char!", {
            position: "top-center"
        });
    } else if (password !== confirmpassword) {
        toast.error("pass and Cpass are not matching!", {
            position: "top-center"
        });
    } else {
        // console.log("user registration succesfully done");


        const res = await fetch(adminRegisterRoute, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name, email, contact, password, confirmpassword
          })
        });
        const data = await res.json();
        console.log(data);
        if (res.status===422 || !data) {
          alert('Invalid Registration',data.error);
          console.log('Invalid Registration',data.error);
        } else {
          window.alert('Registration successfull');
          console.log('Registration successfull');
          toast.success("Registration Successfully done 😃!", {
            position: "top-center"
        });
          navigate('/login');
        }
    }
}

  return (
    <>
      <div className='container border border-dark p-2 mt-2'>
        <h1 className='text-center'>Add New Admin</h1>
        <form method='POST'>
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control w-50" name="name" id='name' value={user.name} onChange={handleInputs} required />
          <label className="form-label">Email address</label>
          <input type="email" className="form-control w-50" placeholder="name@example.com" name='email' value={user.email} onChange={handleInputs} />
          <label className="form-label">Contact Number</label>
          <input type="number" className="form-control w-50"  name='contact' value={user.contact} onChange={handleInputs} />
          <label className="form-label">Password</label>
          <input type="password" className="form-control w-50" name='password' value={user.password} onChange={handleInputs} />
          <label className="form-label">Confirm Password</label>
          <input type="password" className="form-control w-50" name='confirmpassword' value={user.confirmpassword} onChange={handleInputs} />
          <button className='btn btn-primary mt-3' onClick={submitForm}>Register</button>
        </form>
        <ToastContainer/>
      </div>
    </>
  )
}

export default NewAdmin
