import BannerImg from "../assets/bannerImg.png";
import {
  FaArrowRight,
  FaArrowLeft,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";
import "../Style/Home.css";
import { FiTruck, FiRotateCcw, FiShield } from "react-icons/fi";

const Home = () => {
  const sty = {
    fontFamily: "Poppins, sans-serif",
    backfroundColor: "#aliceblue",
  };

  return (
    <>
      <div className="home-container flex flex-row gap-10 p-20">
        <div className="flex flex-row justify-cenetr items-center">
          <div className="content flex flex-column gap-5">
            <h4 className="font-poppins flex justify-center rounded-full items-center border border-[#e5e2d9] w-40 h-10 bg-white text-l font-bold text-[#1b3b2f]">
              Fresh arrivals
            </h4>
            <h1 className="font-kalnia text-4xl font-bold text-[#1C3A2E]">
              Bring plants home. <br />Breathe better.
            </h1>
            <p style={sty} className="font-normal w-150">
              Hand-picked indoor & outdoor plants, delivered with care.
              Choose your favorites and get them shipped right away.
            </p>

            <div className="home-btn flex flex-row  gap-7">
              <button
                style={sty}
                className="bg-green-950 px-5 w-40 h-10 rounded-md text-white "
              >
                Shop plant <FaArrowRight className="inline" />
              </button>

              <button
                style={sty}
                className="rounded-md w-40 h-10 border-2 border-green-[#1C3A2E] text-green-950 bg-[#FFFFFF] "
              >
                Plant care guide
              </button>
            </div>
          </div>

          <div className="banner-img">
            <img className="banner-img" src={BannerImg} alt="" />
          </div>
        </div>
      </div>

      <div className="features flex flex-row gap-60 justify-center">
        <div flex flex-row>
          <FiTruck />
          <div>
            <h3>Free shipping</h3>
            <p>On order above ₹ 999</p>
          </div>
        </div>

        <div>
          <FiRotateCcw />
          <div>
            <h3>Easy returns</h3>
            <p>7-day hassle-free</p>
          </div>
        </div>
        <div flex flex-row>
          <FiShield />
          <div>
            <h3>Plant care guarantee</h3>
            <p>Healthy plants delivered</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
