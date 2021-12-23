import React from 'react'

const Home = () => {
    return (
        <>
<nav className=" navbar navbar-expand-lg navbar-light ">
  <div className="container d-flex justify-content-lg-around ">
    <a className="navbar-brand fst-italic fw-bolder" href="#">Online Payment System</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-lg-end justify-content-md-end p-3" id="navbarNav">
      <ul className="navbar-nav fw-bolder">

        <li className="nav-item ">
          <a className="nav-link" aria-current="page" href="Home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="http://localhost:3000/Service">Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link bg-info rounded-pill " href="#">Sign Up</a>
        </li>
        <li className="nav-item">
          <a className="nav-link btn-outline-primary rounded-pill" href="#">Login</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
            
        </>
    )
}

export default Home;
