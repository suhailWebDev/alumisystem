import React, { useContext, useState } from 'react'
import { loginRoute, registerRoute, staffLoginRoute, staffregisterRoute } from '../utils/ApiRoutes';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from './ContextProvider/Context';
import { StaffContext } from './ContextProvider/ContextStaff';

const Login = () => {
    const {state,dispatch}=useContext(UserContext);
    const {staffstate,dispatchstaff}=useContext(StaffContext);

    const [inpval, setInpval] = useState({
        userType: "Student",
        email: "",
        password: "",
    });
    const navigate = useNavigate();


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

    const loginUser = async (e) => {
        e.preventDefault();
        const { userType, email, password } = inpval;

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
        if(userType==='Student'){
            const data = await fetch(loginRoute, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    withCredential:true
                },
                body: JSON.stringify({
                    email, password
                })
            });

            const res = await data.json();
            console.log(res);
            console.log(data);
            
            if(res.status === 201){
                localStorage.setItem("usersdatatoken",res.result.token);
                dispatch({type:"USER",payload:true});
                navigate('/')
            }
        }
        if(userType==='Staff'){
            const data = await fetch(staffLoginRoute, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    withCredential:true
                },
                body: JSON.stringify({
                    email, password
                })
            });

            const res = await data.json();
            console.log(res);

            if(res.status === 201){
                localStorage.setItem("usersdatatoken",res.result.token);
                dispatchstaff({type:"STAFF",payload:true});
                navigate('/');
            }
        }
    }
    }
    return (
        <>
            <div className='container mt-2 p-3 text-center border border-primary'>
                <h1 className='text-primary'>Login</h1>
                <div className='row'>
                    <div className='offset-lg-4 col-lg-4 border border-primary p-3'>
                        <form method='POST'>
                        <label className="form-label">User Type</label>
                            <select className="form-select" value={inpval.userType} onChange={setVal} name="userType">
                                <option>Student</option>
                                <option>Staff</option>
                            </select>
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                            <input type="email" className="form-control" value={inpval.email} onChange={setVal} name="email" id="email" />
                            <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                            <input type="password" className="form-control" name='password' onChange={setVal} value={inpval.password} />
                            <button className='btn btn-primary mt-3' onClick={loginUser}>Login</button>
                        </form>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
