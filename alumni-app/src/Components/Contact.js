import React from 'react'

const Contact = () => {
  return (
    <>
    <div className="container text-center p-2">
        <h1>Feel Free To Contact Us</h1>
        <div className="row">
          <div className="col-12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.369367751871!2d77.98943907395387!3d27.207550747360678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747768eaaaaaad%3A0x481097b2a7e9beb5!2sRaja%20Balwant%20Singh%20Management%20Technical%20Campus!5e0!3m2!1sen!2sin!4v1681367631435!5m2!1sen!2sin"
           width="600"
            height="450" 
            style={{border:'0'}} 
            allowfullscreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      <div className="container mt-2 border">
      <h1 className='text-center text-warning'>Write your message below.</h1>
        <div className="row p-3">
          <div className="offset-lg-3 col-lg-5 border border-dark">
            <form action="https://formspree.io/f/moqzppvn" method="POSt">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  User Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="user name"
                  id="exampleFormControlInput1"
                  placeholder="User Name"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                ></textarea>
              </div>
              <button className="btn btn-primary mb-2" type="submit">Send</button>
            </form>
          </div>
        </div>
        </div>
    </>
  )
}

export default Contact
