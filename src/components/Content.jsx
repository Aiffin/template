import React from 'react'
import map from '../assets/image/map1.jpg'
import Confirm from './Confirm'
import Footer from './Footer'

function Content() {
  return (
    <section className="content">
    <div className="container">
        <div className="row">
            <div className="col-2"></div>
            <div className="col-8 mt-3">
                <b>
                <p className='news text-center text-justify lh-sm'><span>ATTENTION!</span> Did you serve,live or work at Marine Corps Base </p>
                <p className='news text-center text-justify lh-sm'>Camp Lejeune,North Carolina between <span>August 1953, and</span></p>
                <p className='news text-center text-justify lh-sm'><span>December 1987?</span><mark>You may be entitled to compensation.</mark></p></b>
                <img src={map} className='mx-auto d-flex img-fluid' alt="map" /><br />
                <p className='article text-center text-justify'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus et dolore earum nemo quam laborum sapiente quibusdam enim accusantium. Sequi laborum deserunt quidem tenetur eum dolores perspiciatis alias, impedit accusamus delectus enim ipsum voluptas mollitia corrupti placeat maxime aperiam facere dolorem. Laudantium excepturi fugit consequatur corrupti quos tempore deserunt nulla? Lorem ipsum dolor sit ametrum unde reprehenderit eum maxime aut.
                </p>
            <Confirm/>
            </div>
            <div className="col-2"></div>
        </div>
        <Footer/>

      </div>
      </section>
  )
}

export default Content