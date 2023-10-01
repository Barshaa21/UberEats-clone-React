import { ReactElement } from 'react';

export default function Map(): ReactElement {
  const cityNames: string[] = [
    "Australia", "France", "Netherlands", "Sweden", "Belgium", "Germany", "New Zealand",
    "Switzerland", "Canada", "Guatemala", "Panama", "Taiwan", "Chile", "Ireland", "Poland",
    "United Kingdom", "Costa Rica", "Italy", "Portugal", "United States", "Dominican Republic",
    "Japan", "South Africa", "Ecuador", "El Salvador", "Kenya", "Spain", "Mexico", "Sri Lanka"
  ];

  return (
    <div className='p-[5rem]'>
      <h2 className="text-[2.6em] font-semibold">Countries with Uber Eats</h2>
      <div className="city-names">
        <ul className="city-list font-normal mt-[1rem] text-[2rem] grid grid-cols-2 grid-rows-1 gap-y-20 gap-x-8 lg:grid-cols-4 lg:grid-rows-6  lg:gap-x-8 lg:gap-y-8 lg:text-[1.2em]">
          {cityNames.map((city:string, index:number) => (
            <li
              key={index}
              className={`${index >= 12 ? 'hidden sm:block' : ''}`}
            >
              {city}
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-[2rem] text-[2em] underline font-medium cursor-pointer">View all countries</p>
    </div>
  );
}
