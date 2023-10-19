import Carousel from "./Carousel"
import Zoom from "react-reveal/Zoom";

function MainTestimonials() {
  return (
    <section className="pt-28 pb-40">
      <Zoom right>
        <div className="max-w-[1240px] mx-auto px-4">
          <h2 className="mb-16 text-center font-bold text-4xl text-indigo-600">
            Happy Clients & Feedbacks
          </h2>
          <Carousel />
        </div>
      </Zoom>
    </section>
  );
}

export default MainTestimonials