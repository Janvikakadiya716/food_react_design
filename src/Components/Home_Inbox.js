import React from 'react'

function Home_Inbox() {
  return (
    <>
     <div class='container-fluid'>
   
   <div class="bbb-wrapper fl-wrap inbox">
      <div class="subcribe-form fl-wrap">
      <div className='category_title'>Deliciousness to your inbox</div>
                        <p class="text-center inbox_space">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor<br></br> incididunt ut labore et dolore magna aliqut enim ad minim 
                            
                        </p>
                        <form id="subscribe" novalidate="true">
                            <input class="enteremail" name="EMAIL" id="subscribe-email" placeholder="Your Email Address" spellcheck="false" type="text"/>
                            <button type="submit" id="subscribe-button" class="subscribe-button color-bg">Subscribe</button>
                            <label for="subscribe-email" class="subscribe-message"></label>
                        </form>
                    </div>
                </div>
  </div>
  
    </>
  )
}

export default Home_Inbox
