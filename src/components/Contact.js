import React from 'react'

const Contact = () => {
    return (
        <>
        <div className="contact">
        <div className="container vh-100">
        <h1 className='text-center fw-walker'>Contact-Page</h1>
        <div className="row mt-5">
        <div className="col-sm-12 col-md-5 col-lg-5">
         <h3>Connect With Our Sales Team</h3>
         <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eligendi. Quia maiores eaque tempora porro?</p>   
        <img src="images/call2.jpg" alt="blank" className='img-fluid rounded-3 mt-2' />
         </div>
        
        <div className="col-sm-12 col-md-7 col-lg-7">
        <h3>Contact Form:</h3>
        <form className="row g-3">
        <div className="col-md-4">
          <label for="validationServer01" className="form-label">First name</label>
          <input type="text" className="form-control is-valid" id="validationServer01"  required/>
          <div className="valid-feedback">
            Looks good!
          </div>
        </div>
        <div className="col-md-4">
          <label for="validationServer02" className="form-label">Last name</label>
          <input type="text" className="form-control is-valid" id="validationServer02"  required/>
          <div className="valid-feedback">
            Looks good!
          </div>
        </div>
        <div className="col-md-4">
          <label for="validationServerUsername" className="form-label">Username</label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend3">@</span>
            <input type="text" className="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required/>
            <div id="validationServerUsernameFeedback" className="invalid-feedback">
              Please choose a username.
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <label for="validationServer03" className="form-label">City</label>
          <input type="text" className="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required/>
          <div id="validationServer03Feedback" className="invalid-feedback">
            Please provide a valid city.
          </div>
        </div>
        <div className="col-md-3">
          <label for="validationServer04" className="form-label">State</label>
          <select className="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required>
            <option selected disabled value="">Choose...</option>
            <option>...</option>
          </select>
          <div id="validationServer04Feedback" className="invalid-feedback">
            Please select a valid state.
          </div>
        </div>
        <div className="col-md-3">
          <label for="validationServer05" className="form-label">Zip</label>
          <input type="text" className="form-control is-invalid" id="validationServer05" aria-describedby="validationServer05Feedback" required/>
          <div id="validationServer05Feedback" className="invalid-feedback">
            Please provide a valid zip.
          </div>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required/>
            <label className="form-check-label" for="invalidCheck3">
              Agree to terms and conditions
            </label>
            <div id="invalidCheck3Feedback" className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">Submit form</button>
        </div>
      </form>   
        </div>
        
        
        </div>
        
<div className="footer-area bg-dark text-white mt-5">

<div className="row text-center">
<div className="col-sm-12 col-md-3 col-lg-3">
<div className="name ms-5 fw-bolder">Company</div>
<div className="pera ms-5 mt-3">
<div className="pera1">product</div>
<div className="pera1">product</div>
<div className="pera1">product</div>
<div className="pera1">product</div>

</div>
</div>
<div className="col-sm-12 col-md-3 col-lg-3">
<div className="name ms-5 fw-bolder">Service</div>
<div className="pera ms-5 mt-3 ">
<div className="pera1">service1</div>
<div className="pera1">service1</div>
<div className="pera1">service1</div>
<div className="pera1">service1</div>

</div>
</div>
<div className="col-sm-12 col-md-3 col-lg-3">
<div className="name ms-5 fw-bolder">Support</div>
<div className="pera ms-5 mt-3">
<div className="pera1">support1</div>
<div className="pera1">support1</div>
<div className="pera1">support1</div>
<div className="pera1">support1</div>

</div>
</div>

<div className="col-sm-12 col-md-3 col-lg-3">
<div className="name me-3 fw-bolder">Follow Us</div>
<div className="pera ms-5 d-flex mx-5 mt-5">
<div className="pera1 mx-2"><i class="fab fa-facebook"></i></div>
<div className="pera1  mx-2"><i class="fab fa-twitter"></i></div>
<div className="pera1  mx-2"><i class="fab fa-linkedin"></i></div>
<div className="pera1  mx-2"><i class="fab fa-instagram"></i></div>

</div>
</div>




</div>

<p className='text-center mt-3'>Copyright &copy; All Rights Reserved 2021</p>







</div>



















        </div>
        </div>
            
        </>
    )
}

export default Contact
