import React from 'react'

const About = () => {
  return (
    <div>
        <section id="about">
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://i.pinimg.com/736x/c0/56/ab/c056abd5fc67bcfa9ceb42054605ff4e.jpg" alt="About" className='w-75 mt-5'/>
                    </div>
                    <div className="col-md-6">
                        <h3 className="fs-5 mb-0">About Us</h3>
                        <h1 className="display-6 mb-2">Who <b>We</b> Are</h1>
                        <hr className='w-50'/>
                        <p className="lead mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repudiandae nostrum explicabo reiciendis voluptates, ducimus, ipsa accusantium deleniti nulla ad nemo in iusto numquam quia velit voluptatem, dolorum distinctio aperiam quisquam doloribus iste sunt asperiores! Debitis obcaecati molestias aperiam architecto nihil a possimus reiciendis mollitia, voluptatibus culpa nisi temporibus doloremque?</p>
                        <button className="btn btn-primary rounded-pill px-4 py-2">Get Started</button>
                        <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact Us</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About