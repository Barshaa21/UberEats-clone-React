export default function Map() {
  const cityNames: string[] = [
    "Akron",
    "Hartford",
    "Nashville",
    "Providence", 
    "Albuque",
    "Houston",
    "New Orleans",
    "Providence",
    "Bridgeport",
    "Indianapolis",
    "Oklahoma City",
    "San Antonio",
    "Concord",
    "McAllen",
    "Orlando",
    "Stony Brook",
    "Dayton",
    "Mesa",
    "Omaha",
    "Tucson",
    "El Paso",
    "Milwaukee",
    "Palm Bay",
    "West Hollywood",
  ];

  return (
    <div className="p-[5rem]">
      <h2 className="text-[2.6em] font-semibold">Cities near me</h2>
      <iframe
        className="w-full h-[50vh] object-contain my-4"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23312.67816162623!2d85.28811026153086!3d27.66563618686945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1692270546904!5m2!1sen!2snp"
        loading="lazy"
      ></iframe>
      <div className="city-names">
        <ul className="city-list font-normal mt-[1rem] text-[2rem] grid grid-cols-2 grid-rows-1 gap-y-10 gap-x-8 lg:grid-cols-4 lg:grid-rows-6 lg:gap-x-8 lg:gap-y-8 lg:text-[1.2em]">
          {cityNames.map((city: string, index:number) => (
            <li
              key={index}
              className={`${index >= 12 ? "hidden sm:block" : ""}`}
            >
              {city}
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-[2rem] text-[2em] underline font-medium cursor-pointer">
        View all 500+ countries
      </p>
    </div>
  );
}
