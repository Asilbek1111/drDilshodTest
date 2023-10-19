import "./HeroContact.css";



function HeroContact() {
      return (
        <div className="max-w-[1240px] mx-auto ">
          
            <div className="flex flex-col md:flex-row relative md:top-[-40px] shadow-2xl bg-red-200">
              <div className="bg-indigo-600 py-10 px-8 w-full md:w-3/5">
                <p className="mb-1 font-semibold text-lg text-gray-300">
                  Booking an appointment
                </p>

                <h2 className="mb-10 font-bold text-4xl">Free Consultation</h2>

                <form>
                  <div className="mb-7 flex flex-col md:flex-row gap-7 max-w-md md:max-w-full">
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      className="w-full
                                          rounded
                                          py-3
                                          px-[14px]
                                          text-gray-800 text-base
                                          outline-none
                                          border-none
                                          bg-white
                                          focus-visible:shadow-none
                                          focus:border-primary"
                    />
                    <input
                      type="number"
                      required
                      placeholder="Phone Number"
                      className="mb-4 md:mb-0 w-full
                                          rounded
                                          py-3
                                          px-[14px]
                                          text-gray-800 text-base
                                          outline-none
                                          border-none
                                          bg-white
                                          focus-visible:shadow-none
                                          focus:border-primary"
                    />
                  </div>
                  <div className="mb-7 flex flex-col md:flex-row gap-7 max-w-md md:max-w-full">
                    <input
                      type="date"
                      required
                      className="w-full
                                          rounded
                                          py-3
                                          px-[14px]
                                          text-gray-800 text-base
                                          outline-none
                                          border-none
                                          bg-white
                                          "
                    />
                    <input
                      type="time"
                      required
                      className="w-full
                                          rounded
                                          py-3
                                          px-[14px]
                                          text-gray-800 text-base
                                          outline-none
                                          border-none
                                          bg-white
                                          focus-visible:shadow-none
                                          focus:border-primary"
                    />
                  </div>

                  <button className="mx-auto block py-4 px-12 bg-gray-700 hover:bg-gray-600 text-white text-lg font-semibold rounded-md">
                    Confirm appointment
                  </button>
                </form>
              </div>

              <div className="py-10 bg-white w-100 md:w-2/5 min-h-[200px] text-center text-gray-800">
                <h3 className="mb-5 md:3 text-3xl font-semibold">
                  Business Hours
                </h3>

                <p className="mb-4 md:mb-2 uppercase text-xl md:text-base font-semibold text-indigo-600">
                  Opening days:
                </p>

                <p className="mb-3 md:mb-1 text-md md:text-sm text-gray-500">
                  <span className="text-gray-600">Monday - Friday:</span> 09:00
                  - 20:00
                </p>
                <p className="mb-6 md:mb-4 text-md md:text-sm text-gray-500">
                  <span className="text-gray-600">Saturday:</span> 10:00 - 19:00
                </p>

                <p className="mb-4 md:mb-2 uppercase text-xl md:text-base font-semibold text-indigo-600">
                  Vacations:
                </p>

                <p className="mb-3 md:mb-1 text-md md:text-sm text-gray-500">
                  All Sunday Days
                </p>
                <p className="mb-12 text-sm text-gray-500">
                  All Official Holidays
                </p>

                <div className="mb-8 h-[1px] w-9/12 mx-auto bg-gray-300"></div>

                <p className="mb-4 uppercase font-semibold text-xl text-indigo-600">
                  For emergency cases
                </p>
                <a
                  href="tel:+998901234567"
                  target="_blank"
                  className="uppercase font-semibold text-xl text-gray-600"
                  rel="noreferrer"
                >
                  +998 90 123 45 67
                </a>
              </div>
            </div>
          
        </div>
      );
}

export default HeroContact