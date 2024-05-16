import React from 'react';
import videores from '../images/backvideo.mp4';
import logof from '../images/logo.png'

function Banner() {
  return (
    <div>
      <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-full flex-row mb-2">
        <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
        
          <video className="w-full" autoPlay muted loop>
            <source src={videores} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="p-6">
          <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
            ORDERDO
          </h6>
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          <img src={logof} className='w-60 h-auto'/>
          </h4>
          <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            Like so many organizations these days, Autodesk is a company in
            transition. It was until recently a traditional boxed software
            company selling licenses. Yet its own business model disruption is
            only part of the story
          </p>
          <button type="button" class="text-white bg-black font-bold rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2">ORDER NOW</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
