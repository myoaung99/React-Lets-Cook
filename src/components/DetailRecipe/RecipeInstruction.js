import React from "react";
import meal1 from "./../../assets/image/meal-3.png";

const RecipeInstruction = () => {
  return (
    <section className="pt-12 container mx-auto px-4 max-w-screen-md min-h-screen">
      <h4 className="mt-6 mb-10 text-2xl ">
        Instructions for cooking Meal name
      </h4>

      <div className="flex justify-center mb-10">
        <img className="w-40 rounded-sm shadow-sm " src={meal1} alt="meal" />
      </div>

      <div className=" ">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled
        </p>
        <br />

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled
        </p>
        <br />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled
        </p>
      </div>

      <div className="mt-10 mb-40 relative">
        <iframe
          width="716"
          height="403"
          className="absolute w-full"
          src="https://www.youtube.com/embed/Ys7-6_t7OEQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
};

export default RecipeInstruction;
