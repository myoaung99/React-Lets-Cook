import React from "react";
import heroImg from "./../../assets/image/heroImg.png";

const Hero = () => {
  return (
    <main className="bg-header-bg ">
      <div className="container pt-12 mx-auto grid md:grid-cols-2 min-h-screen items-center px-5">
        <div className="w-4/5 mx-auto order-2 ">
          <blockquote className="text-4xl md:text-5xl header-quote italic font-bold leading-normal">
            <span className="quote-symbol ">" </span>Part of the secret of{" "}
            <span className="text-primary ">success</span> in life is to eat
            what you like...
            <span className="quote-symbol "> "</span>
          </blockquote>

          <button className="bg-primary py-2 px-6   hover:bg-primaryDark focus:ring-primaryDark focus:ring-offset-indigo-200 text-primaryText transition ease-in duration-200 font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full mt-5">
            Get Recipe
          </button>
        </div>

        <div className="order-1  mx-auto sm:w-3/4 md:w-auto">
          <img
            className="object-cover"
            src={heroImg}
            alt="beautifully degorated delicious meal"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
