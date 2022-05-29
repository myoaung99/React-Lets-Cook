import React, { useState, useEffect } from "react";
import "./Pagination.css";

const Pagination = (props) => {
  const { data, RenderComponent, pageLimit, dataLimit } = props;

  // pagination information
  const [pages] = useState(Math.ceil(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  // scroll to top
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, [currentPage]);

  // next page btn
  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  // prev page btn
  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  // go with paginated page numbers
  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  // ပြမည့် 1 မျက်နာစာ data အစု
  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  // pagination သွားလို့ရမည့် ဂဏန်း ၅ လုံး
  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <div className=" ">
      {/* show the posts, 6 posts at a time */}
      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 row-1">
        {getPaginatedData().map((d, idx) => (
          <RenderComponent key={idx} data={d} />
        ))}
      </div>

      {/* show the pagiantion
      it consists of next and previous buttons
      along with page numbers, in our case, 3 page
      numbers at a time
  */}
      <div className="pagination py-12 flex bg-white rounded-lg justify-center">
        {/* previous button */}
        <button
          onClick={goToPreviousPage}
          className={`mr-2 h-12 border-2  border-primary
          px-4 rounded-l-lg hover:bg-primary hover:text-white ${
            currentPage === 1 ? "disabled" : ""
          }`}
        >
          <span>prev</span>
        </button>

        {/* show page numbers */}
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem h-12 border-2 border-primary
            w-12 relative mr-2 ${
              currentPage === item ? "bg-primary text-primaryWhiteText" : null
            } ${item > pages ? "disabled" : ""}`}
          >
            <span>{item}</span>
          </button>
        ))}

        {/* next button */}
        <button
          onClick={goToNextPage}
          className={`h-12 border-2  border-primary
          px-4 rounded-r-lg hover:bg-primary hover:text-primaryWhiteText ${
            currentPage === pages ? "disabled" : ""
          }`}
        >
          <span>next</span>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
