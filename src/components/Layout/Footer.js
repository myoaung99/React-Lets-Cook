import React from "react";

const Footer = () => {
  return (
    // <div className="flex justify-center bg-teal-500 py-3 fixed bottom-0 w-full text-white">
    //   <div className="">All Copyright reserved.</div>
    // </div>

    <footer class="p-4 bg-primary shadow flex items-center justify-center md:justify-between dark:bg-primary">
      <span class="text-sm text-primaryText text-center dark:text-primary hidden md:block">
        © 2022{" "}
        <a href="" class="hover:underline">
          Let's Cook™
        </a>
        . All Rights Reserved.
      </span>

      <span className="text-sm text-primaryText text-center dark:text-primary ">
        Designed and Developed by me, Myo Myint Aung
      </span>
    </footer>
  );
};

export default Footer;
