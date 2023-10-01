import React from 'react';

const List: React.FC = () => {
  const firstListItems: string[] = [
    "Get Help",
    "Buy gift cards",
    "Add your restaurant",
    "Sign up to deliver",
    "Create a business account",
    "Promotions",
  ];

  const secondListItems: string[] = [
    "Restaurants near me",
    "View all cities",
    "View all countries",
    "Pickup near me",
    "About uberEats",
    "English",
  ];

  return (
    <div className="div-6-right flex flex-col gap-[3rem] lg:flex-row lg:gap-[3.5rem]">
      <ul className="div-6-list cursor-pointer text-[1.8em] font-normal lg:text-[1.2em] ">
        {firstListItems.map((item, index) => (
          <li className="lg:p-2" key={index}>{item}</li>
        ))}
      </ul>
      <ul className="div-6-list cursor-pointer text-[1.8em] font-normal lg:text-[1.2em]">
        {secondListItems.map((item, index) => (
          <li  className="lg:p-2" key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
