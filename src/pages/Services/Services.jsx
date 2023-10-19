import Footer from "../../components/Footer/Footer";
import "../../components/Header/Header.css";
import HeaderTest from '../../components/HeaderFa/HeaderFa';
import "./Services.css"
import Header from '../../components/Header/Header'
import MainServices from "../../components/Main/MainServices/MainServices";



export default function Services() {

  return (
    <>
      <div className="">
        {/* <HeaderTest/> */}
        <Header />
        <div className=" mt-20 services__hero h-96 flex items-center justify-center content-center">
          <div className="">
            {/* <p className="mb-2 text-lg">Home &gt; <span>Services</span></p> */}
            <h2 className="text-[40px] font-bold text-white my-auto">
              Services
            </h2>
          </div>
        </div>
      </div>
      <MainServices />
        <Footer />
    </>
  );
}
