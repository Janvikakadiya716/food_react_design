import React from 'react'

function Home_Inbox() {
  return (
    <><div class='container-fluid inbox'>
    <div class='bg-image'>
      <img src='./p5.png' class='img_inbox' alt='Background Image'/>
    </div>
   
    <div class="centered">
        <div className='category_title '>
        Deliciousness to your inbox
        </div>
        <div className='hero_info'>
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim 
        </div>
        <form>
    <input type='email' placeholder='Enter your email' required />
    <button type='submit'>Subscribe</button>
  </form>
    </div>
  </div>
  
    </>
  )
}

export default Home_Inbox
