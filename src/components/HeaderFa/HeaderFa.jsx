import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import "../Header/Header.css";
import HeaderTop from '../Header/HeaderTop/HeaderTop';
import { Link, NavLink } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function HeaderFa() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  // const [isBelowHero, setIsBelowHero] = useState(false)

  let handleScroll = function () {
    console.log(window.scrollY)

    setIsScrolling(window.scrollY > 90)

    // setIsBelowHero(window.scrollY > 400)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, []);

  return (
    <div className='bg-red-300'>
      <HeaderTop />
      <header className={`inset-x-0 top-50px z-50 transition delay-300 duration-300 ease-in-out ${isScrolling ? "bg-white shadow-md fixed top-0" : "absolute bg-transparent"}`}>
        <div className='max-w-[1240px] mx-auto'>
          <nav className={`flex items-center justify-between py-4 px-4 `} aria-label="Global">
            <div className="flex lg:flex-1">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-10 w-auto"
                  src="/images/logo.png"
                  alt="logo"
                />
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <NavLink key={item.name} to={item.href} className="text-base font-semibold leading-6 text-gray-700 hover:text-gray-950">
                  {item.name}
                </NavLink>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link to="/contact" className="py-2 px-4 text-sm text-indigo-600 hover:text-indigo-500 border-2 border-indigo-600 hover:border-indigo-500 rounded-md font-semibold leading-6">
                Make an appointment
              </Link>
            </div>
          </nav>
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link to="/" className="-m-1.5 p-1.5">
                  <img
                    className="h-8 w-auto"
                    src="/images/logo.png"
                    alt=""
                  />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:text-gray-950 hover:bg-gray-50"
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                  <div className="py-6">
                    <Link to="/" className="py-2 px-4 text-sm text-indigo-600 hover:text-indigo-500 border-2 border-indigo-600 hover:border-indigo-500 rounded-md font-semibold leading-6">
                      Make an appointment
                    </Link>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </header>
    </div>
  )
}
