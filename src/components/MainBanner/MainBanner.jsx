import React from 'react';

const MainBanner = () => {
    return (
      
             
      <div className="pt-10 relative max-w-[1240px] mx-auto isolate  bg-transparent mb-[8rem]">
        {/* Color for background */}
        {/* <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#da3636] to-[#2c1fe7] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div> */}
        {/* Color for background */}
        <div className="pt-52 sm:pt-28 md:pt-40 pb-6 sm:pb-24 px-4 sm:bg-right-bottom bg-[70px] site__hero ">
          <div className="text-left max-w-[20rem] md:max-w-[34rem]">
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-gray-700 leading-[40px] md:leading-[60px] lg:leading-[60px]">
              <span className='font-semibold tracking-tight text-gray-900'>Health Care </span>
              <br /> For Whole Family
            </h1>
            <p className="mt-2 lg:mt-5 text-sm md:text-lg leading-8 text-gray-600">
              Our goal is to help a wider audience of patients, as well as inform and educate them about health-related knowledge.
            </p>
            <div className="mt-8 lg:mt-16 flex items-center gap-x-6" >
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Check our services
              </a>
            </div>
          </div>
          {/* <div>
            <img src="/images/hero-image.png" alt="" className='min-h-[400px] min-w-[400px]'/>
          </div> */}
        </div>
      </div>
      
       
    );
}

export default MainBanner;
