import React, { useState,useContext } from 'react'
import { adminLoginRoute } from '../utils/ApiRoutes';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AdminContext} from './ContextProvider/ContextAdmin';

const AdminLogin = () => {
    const navigate=useNavigate();
    const {adminstate,dispatchadmin}=useContext(AdminContext);
    const [inpval, setInpval] = useState({
        email: "",
        password: "",
    });


    const setVal = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    };

    const loginAdmin = async (e) => {
        e.preventDefault();
        const { email, password } = inpval;

        if (email === "") {
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
        }else{
            const data = await fetch(adminLoginRoute, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            });

            const res = await data.json();
            console.log(res);
            console.log(data);

            if (res.status === 201) {
                localStorage.setItem("admindatatoken",res.result.token);
                dispatchadmin({type:"ADMIN",payload:true});
                navigate("/");
            }
    }
    }
  return (
    <>
            <div className='container mt-2 p-3 text-center border border-primary'>
                <h1 className='text-primary'>Admin Login</h1>
                <div className='row'>
                    <div className='offset-lg-4 col-lg-4 border border-primary p-3'>
                        <form method='POST'>
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                            <input type="email" className="form-control" value={inpval.email} onChange={setVal} name="email" id="email" />
                            <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                            <input type="password" className="form-control" name='password' onChange={setVal} value={inpval.password} />
                            <button className='btn btn-primary mt-3' onClick={loginAdmin}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
  )
}

export default AdminLogin
