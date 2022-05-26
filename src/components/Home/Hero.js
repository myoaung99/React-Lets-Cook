import React from "react";
import { Link } from "react-router-dom";
import heroImg from "./../../assets/image/heroImg.png";

const Hero = () => {
  return (
    <main className="bg-header-bg ">
      <div className="container pb-16 sm:pb-0 pt-12 mx-auto grid xl:grid-cols-2 sm:min-h-screen items-center px-5">
        <div className="w-4/5 mx-auto order-2 ">
          <blockquote className="text-4xl md:text-5xl header-quote italic font-bold leading-normal">
            <span className="quote-symbol ">" </span>Part of the secret of{" "}
            <span className="text-primary ">success</span> in life is to eat
            what you like...
            <span className="quote-symbol "> "</span>
          </blockquote>

          <Link to="/get-recipe">
            <button className="bg-primary py-2 px-6   hover:bg-primaryDark focus:ring-primaryDark focus:ring-offset-indigo-200 text-primaryWhiteText transition ease-in duration-200 font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full mt-5">
              Get Recipe
            </button>
          </Link>
        </div>

        <div className="order-1  mx-auto sm:w-3/4 xl:w-auto px-6 lg:px-0">
          <img
            className="object-cover py-16 sm:py-0"
            src={heroImg}
            alt="beautifully degorated delicious meal"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
