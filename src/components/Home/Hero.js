import React from "react";
import heroImg from "./../../assets/image/heroImg.png";

const Hero = () => {
  return (
    <main className="bg-header-bg">
      <div className="container mx-auto grid grid-cols-2 min-h-screen items-center px-5">
        <div className="w-4/5 mx-auto ">
          <blockquote className="text-5xl header-quote italic font-bold leading-normal">
            <span className="quote-symbol ">" </span>Part of the secret of{" "}
            <span className="text-primary ">success</span> in life is to eat
            what you like...
            <span className="quote-symbol "> "</span>
          </blockquote>

          <button className="bg-primary px-8 py-2 rounded-full cursor-pointer hover:bg-primaryDark text-primaryText mt-6 ">
            Get Recipe
          </button>
        </div>

        <div className="">
          <img src={heroImg} alt="beautifully degorated delicious meal" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
