import Detail from "../Detail/Detail"
import MainBanner from "../MainBanner/MainBanner"
import HeroContact from "./HeroContact/HeroContact"
import MainAbout from "./MainAbout/MainAbout"
import MainServices from "./MainServices/MainServices"
import MainTestimonials from "./MainTestimonials/MainTestimonials"


function Main() {
  return (
    <section>
      <MainBanner/>
      <Detail />
      <HeroContact/>
      <MainServices/>
      <MainAbout/>
      <MainTestimonials/>
    </section>
  )
}

export default Main