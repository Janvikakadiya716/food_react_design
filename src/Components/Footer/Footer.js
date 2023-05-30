import React from 'react'

function Footer() {
  return (
    <div>
      <div className='footer'>
        <div className='container-fluid'>
            <div className='row footer_info'>
                <div className='col-md-6 footer_logo'>
                    <img src='./logo.png'></img>
                    <div className='hero_info'>Lorem ipsum dolor sit amet, consectetuipisicing elit, </div>
                </div>
                <div className='col-md-6'>
                    <div className='menu '>
                        <ul className='footer_menu d-flex nav-item'>
                            <li className='nav-link'>
                            Recipes
                            </li>
                            <li className='nav-link'>
                            Blog
                            </li>
                            <li className='nav-link'>
                            Contact
                            </li>
                            <li className='nav-link'>
                            About us
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className='copy_right mt-5 d-flex'>
  <div className='year text-center flex-grow-1'>
    © 2020 Flowbase. Powered by <span className='text-danger'>Webflow</span>
  </div>
  <div className='social_icon d-flex'>
    <img src='./001-facebook.png' alt='Facebook'></img>
    <img src='./003-twitter.png' alt='Twitter'></img>
    <img src='./004-instagram.png' alt='Instagram'></img>
  </div>
</div>

        </div>
      </div>
    </div>
  )
}

export default Footer
