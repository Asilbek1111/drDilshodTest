import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import VideoCard from "../../components/VideoCard/VideoCard";
import "./About.css";

const About = () => {
  return (
    <div>
      <Header />
      <div className="big-banner flex items-center justify-center mb-[5rem]">
        <h1 className="text-[60px] text-white font-bold">About Us</h1>
      </div>
      {/* card  container*/}
      <div className="container  grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3  my-[10rem]">
        <VideoCard
          name="Nega husnbuzarlar chiqadi?"
          link="https://www.youtube.com/embed/izRa6DwP5zo"
          detail="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum corrupti tempora alias explicabo quo cumque."
        />
        <VideoCard
          name="Nega husnbuzarlar chiqadi?"
          link="https://www.youtube.com/embed/avjRE_GFn_Y?si=k8lQC-UYK--3T1OG"
          detail="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum corrupti tempora alias explicabo quo cumque."
        />
        <VideoCard
          name="Nega husnbuzarlar chiqadi?"
          link="https://www.youtube.com/embed/IJH3B8pwKNM?si=8BNKIsiEr4gkRtiI"
          detail="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum corrupti tempora alias explicabo quo cumque."
        />
      </div>
      {/* card container */}

      <Footer />
    </div>
  );
};

export default About;

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/IJH3B8pwKNM?si=8BNKIsiEr4gkRtiI&amp;controls=0"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>;
