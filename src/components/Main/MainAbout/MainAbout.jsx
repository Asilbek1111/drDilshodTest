

function MainAbout() {
  return (
    <div className="bg-slate-50">
    
        <div className="max-w-[1240px] px-4 mx-auto">
          <div className="flex flex-col lg:flex-row gap-2">
            <div className="mb-16 lg:mb-0 pt-24 pb-20 w-11/12 sm:w-9/12 lg:w-6/12 self-center text-gray-900 text-center lg:text-left">
              <h2 className="mb-6 text-3xl md:text-4xl font-semibold">
                Dr. <span className="text-indigo-700">Dilshod Tursunov</span>
              </h2>
              <p className="mb-20 text-gray-600 leading-8">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country, in which roasted parts of sentences fly
                into your mouth.
              </p>

              <div className="flex justify-center flex-wrap gap-4 lg:gap-2">
                <div className="py-6 px-4 w-[190px] bg-white text-center">
                  <p className="mb-3 text-3xl font-bold text-indigo-700">12</p>
                  <p className="capitalize text-lg">Years of experience</p>
                </div>
                <div className="py-6 px-4 w-[190px] bg-white text-center">
                  <p className="mb-3 text-3xl font-bold text-indigo-700">
                    4,500
                  </p>
                  <p className="capitalize text-lg">Happy Patients</p>
                </div>
                <div className="py-6 px-4 w-[190px] bg-white text-center">
                  <p className="mb-3 text-3xl font-bold text-indigo-700">300</p>
                  <p className="capitalize text-lg">Number of Staffs</p>
                </div>
              </div>
            </div>
            <div className="lg:w-6/12 min-h-[400px] flex lg:items-center justify-center lg:justify-end">
              <iframe
                className="block w-full lg:w-11/12 h-[400px] lg:h-full"
                src="https://www.youtube.com/embed/D08MOfcTpww?si=dbP3XU-GYDp5fZb3"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      
    </div>
  );
}

export default MainAbout;
