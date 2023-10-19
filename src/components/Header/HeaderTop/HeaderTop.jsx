import { location, phone } from "../../Icons/Icons.jsx"

function HeaderTop() {
      return (
            <div className='bg-white border-b-2 border-gray-100 text-black'>
                  <div className="max-w-[1240px] mx-auto px-5 py-2">
                        <div className="flex flex-col sm:flex-row justify-between items-center">

                              <div className="flex items-center justify-between gap-6 text-gray-700">

                                    <a href="https://maps.app.goo.gl/8EkC5U1798bQPWmN8" target="_blank" className="flex text-sm font-medium underline" rel="noreferrer"> <i className="block w-3 h-2 mr-1">{location}</i> 24-A, Saidov st, Olmazor</a>

                                    <a href="tel:+998901234567" target="_blank" className="flex items-center text-sm font-medium underline" rel="noreferrer"> <i className="block w-3 h-3 mr-1">{phone}</i> +998 90 123 45 67</a>


                              </div>

                              <div className="mt-3 flex items-center justify-around sm:justify-end">
                                    <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="flex justify-center items-center mr-4 w-8 h-7">
                                          <img src="/images/youtube.png" alt="" />
                                    </a>
                                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="flex justify-center items-center mr-4 w-9 h-7">
                                          <img src="/images/instagram-icon-white.png" alt="" />
                                    </a>
                                    <a href="https://telegram.me/" target="_blank" rel="noreferrer" className="flex justify-center items-center mr-5 w-7 h-7">
                                          <img src="/images/telegram-icon.png" alt="" />
                                    </a>
                                    <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" className="flex justify-center items-center w-7 h-7">
                                          <img src="/images/tiktok-icon.png" alt="" />
                                    </a>
                              </div>

                        </div>
                  </div>
            </div>
      )
}

export default HeaderTop