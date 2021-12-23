import React from 'react'

const Menu = () => {
    return (
        <>
        <div className="main-div bg-light">
        <div class="container vh-90">
          <div class="row">
            <div class=" col-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center align-items-center mt-5">
            <h1 className='w-75 fw-light text-center'><b>Online Pament Made Eassy For You!</b></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ea aliquam labore reprehenderit doloribus iusto a ipsam sunt alias incidunt, dolorem deleniti vero ducimus dolore quia quis cumque mollitia! Quod?</p>
            <h3 className='mt-5 fw-light'>Get The All Process Here...</h3>
            <input type="text" className=' input border-none h-20 w-100 position-relative rounded-3' />
            <button className='btn btn-outline-secondary text-info  position-absolute rounded-pill w-0 mt-1'>Get Result</button>
            </div>
            <div class="col-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center mt-5">
            <img src="images/photo3.jpg" alt="blank" className='img1 rounded-3 position-relative' style={{height:400,width:450}} />
            <img src="images/photo4.jpg" alt="blank" className='img2 rounded-3 position-absolute mb-b' style={{height:170,width:200}} />

            </div>
          </div>
        </div>
        
        </div>
            
        </>
    )
}

export default Menu
