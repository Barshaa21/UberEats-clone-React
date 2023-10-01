import { ReactElement } from "react";

export default function Body(): ReactElement {
  return (
    <div className="flex flex-col text-[2em] mt-[8rem] w-full lg:pt-[4rem] px-12">
      <h1 className="mb-[3rem] text-[4rem] font-bold lg:text-[3.7rem]">
        Order food to your door
      </h1>
      <div className="flex flex-col gap-3 lg:flex-row w-[90%] justify-center mx-auto lg:w-[60%] lg:ml-0">
        {/* <i className="fa-solid fa-location-dot text-[1.5rem] bg-white"></i> */}
        <input
          type="text"
          className="cursor-pointer border-none m-auto w-full h-[5rem] px-[10px] lg:h-[4rem] lg:text-[0.6em] lg:px-7 lg:font-medium"
          placeholder="Enter delivery address"
        />
        {/* <i className="fa-solid fa-circle-chevron-down text-[1.2rem] bg-white"></i> */}
        <select
          className="cursor-pointer border-none m-auto w-full h-[5rem] py-[10px] lg:w-[14rem] lg:h-[4rem] lg:text-[0.7em] lg:px-6 lg:font-medium"
        >
          <option value="volvo">Deliver now</option>
          <option>Schedule for later</option>
        </select>
        <button className="text-white bg-black rounded p-[4rem] cursor-pointer border-none m-auto w-full h-[5rem] pt-[10px] pr-[40px] pb-[10px] pl-[10px] lg:w-[13rem] lg:text-[0.7em] lg:font-medium lg:rounded-2xl lg:p-0 lg:h-[4rem] hover:bg-gray-700">
          Find Food
        </button>
      </div>
      <span className="mt-0 lg:text-[0.6em] lg:font-medium lg:mt-4">
        <a href="https://www.google.com" className="underline">
          Sign In
        </a>
        for your recent addresses
      </span>
    </div>
  );
}
