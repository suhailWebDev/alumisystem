import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addEventRoute } from '../../utils/ApiRoutes';

const NewEvents = () => {
  const navigate=useNavigate();
  const [user, setUser] = useState({
    eventname: '', eventdate:'',eventdescription:''
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value })
  }

  const submitForm = async (e) => {
    e.preventDefault();

    const {eventname,eventdate,eventdescription} = user;

    if (eventname === "") {
        toast.warning("event name is required!", {
            position: "top-center"
        });
    } else if (eventdate === "") {
        toast.error("event date is required!", {
            position: "top-center"
        });
    } else if (eventdescription==='') {
        toast.error("event description is required", {
            position: "top-center"
        });
    }  else {
        // console.log("user registration succesfully done");


        const res = await fetch(addEventRoute, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            eventname,eventdate,eventdescription
          })
        });
        const data = await res.json();
        console.log(data);
        if (res.status===422 || !data) {
          alert('Invalid data',data.error);
          console.log('Invalid data',data.error);
        } else {
          window.alert('Event Register successfull');
          console.log('Event Register successfull');
          toast.success("Event added Successfully 😃!", {
            position: "top-center"
        });
          navigate('/eventlist');
        }
    }
}

  return (
    <>
      <form method='POST'>
          <label htmlFor="exampleFormControlInput1" className="form-label">Event Name</label>
          <input type="text" className="form-control w-50" name="eventname" id='eventname' value={user.eventname} onChange={handleInputs} required />
          <label htmlFor="DOB">Date Of Event</label>
          <input id="startDate" className="form-control w-50" type="date" name='eventdate' value={user.eventdate} onChange={handleInputs} />
          <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Event Description
                </label>
                <textarea
                  className="form-control w-50"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name='eventdescription' value={user.eventdescription} onChange={handleInputs}
                ></textarea>
              </div>
              <button className='btn btn-primary mt-3' onClick={submitForm}>Add Event</button>
          </form>
          <ToastContainer/>
    </>
  )
}

export default NewEvents
