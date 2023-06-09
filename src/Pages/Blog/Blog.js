import React from 'react'

function Blog() {
  return (
    <>
    <div className='blog'>
      <div className='container-fluid'>
        <div className='hero_title text-center'>
        Full Guide to Becoming a Professional Chef
        </div>
        <div className='blog_profile d-flex'>
          <img src='video.png'></img>
          {/* <div className='blog_info'> */}
          <div className='blog_p_name name'>
          John Smith
          </div>
          <div className='vl'></div>
          <div className='blog_p_date date'>
          15 March 2022
          </div>
        </div>
        {/* </div> */}
        <div className='hero_info text-center'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed<br></br> velit a faucibus. In feugiat vestibulum velit vel pulvinar.
        </div>
        <div className='blog_img'>
          <img src='./blog_back.png'></img>
        </div>
        <div className='blog_questions'>
          <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
            <div className='que_ans'>
                          <div className='blog_que'>
              How did you start out in the food industry?
              </div>
              <div className='blog_ans '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.
              </div>
              </div>
              <div className='que_ans'>
                          <div className='blog_que'>
                          What do you like most about your job?
              </div>
              <div className='blog_ans '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.
              </div>
              </div>
              <div className='que_ans'>
                          <div className='blog_que'>
                          Do you cook at home on your days off?
              </div>
              <div className='blog_img'>
              <img src='./girl_chef.png' className="blog_img mt-3"></img>
              </div>
         
              <div className='blog_ans '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.
              </div>
              </div>
              <div className='que_ans'>
                          <div className='blog_que'>
                          What would your advice be to young people looking to get their foot in the door?
              </div>
              <div className='blog_ans '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.
              </div>
              </div>
              <div className='ans_box'>
             <h1> “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.”</h1>
              </div>
              <div className='que_ans'>
                          <div className='blog_que'>
                          What is the biggest misconception that people have about being a professional chef?
              </div>
              <div className='blog_ans '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.
              </div>
              </div>
              
            </div>
            <div className='col-md-4'>
              <div className='blog_social_icon'>
                <p className='text-center'>SHARE THIS ON:</p>
              </div>
              <div className='row b'>
                <div className='col-md-12 mt-5'>
                  <img src='./001-facebook.png '></img>
                </div>
                <div className='col-md-12 mt-5'>
                <img src='003-twitter.png'></img>
                </div>
                <div className='col-md-12 mt-5'>
                <img src='004-instagram.png'></img>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
   
    </>
  )
}

export default Blog