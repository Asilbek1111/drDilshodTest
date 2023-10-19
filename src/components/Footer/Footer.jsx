import { check, locationFooter, phoneFooter, telegram } from "../Icons/Icons"

function Footer() {
  return (
    <footer className="pb-14 bg-gray-900">
        <div className="max-w-[1240px] px-4 mx-auto text-white">
            <div className="flex justify-between flex-wrap gap-6">

                <div className="max-w-[255px] pt-12">
                    <h2 className="mb-6 text-xl font-semibold">Chiropractic</h2>
                    <p className="mb-10 text-sm text-gray-300">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    
                    <p className="text-gray-300 font-bold">Follow me:</p>
                    <div className="mt-2 flex justify-center bg-gray-200 py-2 rounded-sm">
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
                
                <div className="pt-12">
                    <h3 className="mb-6 text-xl font-semibold">Services</h3>
                        <div className="flex flex-col gap-3">
                            <a href="" className="flex items-center gap-2 text-gray-200 text-sm hover:text-indigo-600 footer__link">
                            {check} Spinal Manupulation
                            </a>
                            <a href="" className="flex items-center gap-2 text-gray-200 text-sm hover:text-indigo-600 footer__link">
                            {check} Electrotherapy
                            </a>
                            <a href="" className="flex items-center gap-2 text-gray-200 text-sm hover:text-indigo-600 footer__link">
                            {check} Manual Lympahtic
                            </a>
                            <a href="" className="flex items-center gap-2 text-gray-200 text-sm hover:text-indigo-600 footer__link">
                            {check} Medical Acupuncture
                            </a>
                            <a href="" className="flex items-center gap-2 text-gray-200 text-sm hover:text-indigo-600 footer__link">
                            {check} Therapeutic Exercise
                            </a>
                            <a href="" className="flex items-center gap-2 text-gray-200 text-sm hover:text-indigo-600 footer__link">
                            {check} Joint Mobilization
                            </a>
                        </div>
                </div>

                <div className="pt-12">
                    <h3 className="mb-6 text-xl font-semibold">Contact information</h3>

                    <div className="flex flex-col gap-y-7">
                            <a href="" className="flex items-center gap-4 text-gray-200 text-sm hover:text-indigo-600 footer__link">
                            <span className="block w-4">{locationFooter}</span>
                             24-A, Saidov st, Olmazor, Tashkent
                            </a>
                            <a href="" className="flex items-center gap-4 text-gray-200 text-sm hover:text-indigo-600 footer__link">
                            <span className="block w-4">{phoneFooter}</span>
                             +998 90 123 45 67
                            </a>
                            <a href="" className="flex items-center gap-4 text-gray-200 text-sm hover:text-indigo-600 footer__link">
                            <span className="block w-4">{telegram}</span>
                             drdilshod@gmail.com
                            </a>
                    </div>   
                </div>

            </div>

            <p className="mt-20">Copyright ©2023 All rights reserved </p>
        </div>
    </footer>
  )
}

export default Footer