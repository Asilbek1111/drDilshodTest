import React from "react";
import Fade from "react-reveal/Fade";

const Detail = () => {
  return (
    <>
      <Fade right cascade>
        <div className="flex pt-10 relative max-w-[1240px] mx-auto my-[8rem]">
          <div className="img-container w-[50%]">
            <img
              src="https://preview.colorlib.com/theme/medically/images/about.png"
              alt="Doctors"
            />
          </div>
          <div className="details-container w-[50%] flex justify-center items-center">
            <p className="text-xl">
              <i>
                "<b>Health care</b> for the whole family is our passion and
                commitment. At Dr.Dilshod's clinic, we understand the
                significance of comprehensive medical care that caters to every
                age group. With a focus on wellness, prevention, and
                personalized treatments, we're here to be your trusted partners
                on your journey to optimal health."
              </i>
            </p>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Detail;
