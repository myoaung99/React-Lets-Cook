import React from "react";
import meal1 from "../../assets/image/meal-1.png";
import meal2 from "../../assets/image/meal-2.png";
import meal3 from "../../assets/image/meal-3.png";
import meal4 from "../../assets/image/meal-4.png";

const MealShowCase = () => {
  return (
    <section className="container mx-auto min-h-screen my-16 px-3">
      <h1 className="text-center text-4xl">What's is on your mind?</h1>

      <div className="my-16">
        <h4 className="text-2xl mb-5">Today's Popular Meals</h4>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4  meal-row-1">
          <div className="cursor-pointer hover:-translate-y-3 transition-transform">
            <img className="object-cover" src={meal1} alt="meal suggestion" />
          </div>
          <div className="cursor-pointer hover:-translate-y-3 transition-transform">
            <img className="object-cover" src={meal2} alt="meal suggestion" />
          </div>
          <div className="cursor-pointer hover:-translate-y-3 transition-transform">
            <img className="object-cover" src={meal3} alt="meal suggestion" />
          </div>
          <div className="cursor-pointer hover:-translate-y-3 transition-transform">
            <img className="object-cover" src={meal4} alt="meal suggestion" />
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h4 className="text-2xl mb-5">You May Like</h4>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 meal-row-2">
          <div className="cursor-pointer hover:-translate-y-3 transition-transform">
            <img className="object-cover" src={meal1} alt="meal suggestion" />
          </div>
          <div className="cursor-pointer hover:-translate-y-3 transition-transform">
            <img className="object-cover" src={meal2} alt="meal suggestion" />
          </div>
          <div className="cursor-pointer hover:-translate-y-3 transition-transform">
            <img className="object-cover" src={meal3} alt="meal suggestion" />
          </div>
          <div className="cursor-pointer hover:-translate-y-3 transition-transform">
            <img className="object-cover" src={meal4} alt="meal suggestion" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MealShowCase;
