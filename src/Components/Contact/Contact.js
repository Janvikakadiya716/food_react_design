import React from 'react'
import Home_Inbox from '../Home_Inbox';
import Racipe_cate_2 from '../Racipe_cate_2';
import Footer from '../Footer/Footer';
function Contact() {
  return (
    <>
    <div className='contact '>
      <div className='container-fluid'>
        <div className='hero_title text-center'>
        Contact us
        </div>
        <div className='row'>
       
        <div className='col-md-4'>
        <img src='./contact.png' className='other_racipes_img'></img>
            </div>
            <div className='col-md-1'></div>
            <div className='col-md-6'>
            <form class="form-card" >
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">NAME<span class="text-danger"> </span></label> <input type="text" id="fname" name="fname" placeholder="Enter your name..." onblur="validate(1)"/> </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">EMAIL ADDRESS<span class="text-danger"> </span></label> <input type="text" id="lname" name="lname" placeholder="Your email address..." onblur="validate(2)"/> </div>
                    </div>
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">SUBJECT<span class="text-danger"> </span></label> <input type="text" id="email" name="email" placeholder="Enter subject..." onblur="validate(3)"/> </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">ENQUIRY TYPE<span class="text-danger"> </span></label> 
                        <select class="form-select" aria-label="Default select example">
  
  <option value="1">Advertising</option>
  <option value="2">Advertising</option>
  <option value="3">Advertising</option>
</select> </div>
                    </div>
                    
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-12 flex-column d-flex">   
                        <label for="comment">MESSAGES</label>
                        <textarea class="form-control" rows="5" id="comment" placeholder='Enter your messages...'></textarea> </div>
                    </div>
                    <div class="row ">
                        <div class="form-group col-sm-6"> <button type="submit" class="btn-block  view_btn mt-3 m-3">Submit</button> </div>
                    </div>
                </form>
            </div>
        </div>
      </div>
     
    </div>
     <Home_Inbox/>
      <Racipe_cate_2/>
      <Footer/></>
  )
}

export default Contact