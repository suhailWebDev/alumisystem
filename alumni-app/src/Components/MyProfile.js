import React, { useEffect,useState } from 'react';
import suhail from '../Images/suhail.jpg'
import { useNavigate } from 'react-router-dom';
import { profileRoute, validfstaffRoute } from '../utils/ApiRoutes';

const MyProfile = () => {
    const navigate=useNavigate();
    const[userData,setUserData]=useState();

    const callProfilePage = async () => {
        
        let token = localStorage.getItem("usersdatatoken");
        const res = await fetch(profileRoute, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });

        const data = await res.json();
        console.log(data);
        setUserData(data);

        if (data.status == 401 || !data) {
            navigate('/login')
        } else {
            console.log("user verify");
        }
        }

        

    useEffect(()=>{
        callProfilePage();
    },[])
    return (
        <>
            <div className='container mt-2'>
                <form method='GET'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='profile-img'>
                                <img src={suhail} alt='suhail' className='img-fluid' style={{ height: '150px', width: '200px' }} />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='profile-head'>
                                <h5>{userData.ValidUserOne.name}</h5>
                                <h6>{userData.ValidUserOne.occupation}</h6>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='offset-md-4 col-md-8 pl-5 about-info'>
                            <div className='tab-content profile-tab' id='myTabContent'>
                                <div>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <label>User Id</label>
                                        </div>
                                        <div className='col-md-6'>
                                            <p>{userData.ValidUserOne._id}</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <label>Name</label>
                                        </div>
                                        <div className='col-md-6'>
                                            <p>{userData.ValidUserOne.name}</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <label>Email</label>
                                        </div>
                                        <div className='col-md-6'>
                                            <p>{userData.ValidUserOne.email}</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <label>Phone</label>
                                        </div>
                                        <div className='col-md-6'>
                                            <p>{userData.ValidUserOne.contact}</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <label>Profession</label>
                                        </div>
                                        <div className='col-md-6'>
                                            <p>{userData.ValidUserOne.occupation}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                </form>
            </div>
        </>
    )
}

export default MyProfile
