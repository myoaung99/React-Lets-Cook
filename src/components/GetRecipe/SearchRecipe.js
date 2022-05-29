import React, { useRef } from "react";

const SearchRecipe = (props) => {
  const searchRef = useRef();

  const submitHandaler = (event) => {
    event.preventDefault();

    const searchText = searchRef.current.value.trim();
    if (searchText.trim().length === 0) {
      return;
    }
    props.onSearch(searchText);
    searchRef.current.value = "";
  };

  return (
    <section className="pt-12 container mx-auto text-center">
      <div className="mt-14 mb-10">
        <h4 className="text-2xl md:text-3xl mb-3 font-bold">
          Searching new dishes to cook?
        </h4>
        <p className="text-sm text-primaryBlackText  w-3/4 sm:w-auto mx-auto">
          Come Here!! Just type your main ingredient for entire recipe
        </p>
      </div>

      <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <form
            onSubmit={submitHandaler}
            className="input-group relative flex  items-stretch w-full mb-4"
          >
            <input
              autoFocus
              autoComplete="off"
              type="search"
              ref={searchRef}
              id="searchText"
              className=" relative flex-auto min-w-0 block w-full px-3 py-1.5  text-gray-700 bg-white border border-collapse border-primary transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  focus:outline-0 rounded-l-3xl"
              placeholder="Search"
            />
            <button
              className="btn  px-6 py-2.5 bg-primary text-primaryWhiteText font-medium text-xs leading-tight uppercase  shadow-md hover:bg-primaryDark hover:shadow-lg focus:bg-primaryDark  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primarDark active:shadow-lg transition duration-150 ease-in-out flex items-center rounded-r-3xl"
              type="submit"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchRecipe;
