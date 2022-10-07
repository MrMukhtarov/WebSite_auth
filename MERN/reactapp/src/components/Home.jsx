import React from 'react'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <section id="home">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-5">
                        <h1 className="display-4 fw-bolder mb-4 text-center text-white">Feels the Fresh Business Perspective</h1>
                        <p className="load text-center fs-4 mb-5 text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, 
                        non natus quae unde voluptas corrupti veritatis 
                        doloremque ad vel deleniti.
                        </p>
                        <div className="buttons d-flex justify-content-center">
                            <NavLink to='/contact' className="btn btn-light me-4 rounded-pill px-4 py-2">Get Quote</NavLink>
                            <NavLink to='/services' className="btn btn-outline-light rounded-pill px-4 py-2">Our Services</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <NavLink to='/login' className="btn btn-outline-primary ms-auto px-4 rounded-pill">
        <i className="fa fa-sign-in me-2"></i>Login</NavLink>
    <NavLink to='/register' className="btn btn-outline-primary ms-2 px-4 rounded-pill">
    <i className="fa fa-user-plus me-2"></i>Register</NavLink>
    <NavLink to='/logout' className="btn btn-outline-primary ms-2 px-4 rounded-pill">
    <i className="fa fa-sign-out me-2"></i>Logout</NavLink>
        <About/>
        <NavLink className="navbar-brand fw-bolder fs-4 mx-auto" to="/">Fine Art</NavLink>
        <Services/>
        <Contact/>
    </div>
  )
}

export default Home