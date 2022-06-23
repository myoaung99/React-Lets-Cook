import React, { useEffect } from "react";
import { useInView } from "react-hook-inview";
import { Link } from "react-router-dom";

import { motion, useAnimation } from "framer-motion";

const card = {
  hidden: {
    opacity: 0.8,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const MealCard = React.memo((props) => {
  const { meal } = props;
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  const pathLink = `/detail-recipe/${meal.idMeal}`;

  return (
    <Link to={pathLink}>
      <motion.div
        ref={ref}
        variants={card}
        initial="hidden"
        animate={control}
        className="cursor-pointer shadow-md rounded hover:-translate-y-3 transition-transform"
      >
        <img
          id={meal.idMeal}
          className="object-cover mx-auto  rounded"
          src={meal.strMealThumb}
          alt="meal suggestion"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title={meal.strMeal}
        />
      </motion.div>
    </Link>
  );
});

export default MealCard;
