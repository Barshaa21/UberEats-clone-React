import { useEffect, useState, ReactElement } from "react";
import Buttons from "./Buttons";

interface NavbarProps {
  onClick: (action: string) => void;
}

export default function Navbar({ onClick }: NavbarProps): ReactElement {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar ${
        scrolling
          ? "flex justify-between cursor-pointer top-0 left-0 right-0 pt-12 lg:pt-5 lg:px-12 fixed bg-white p-10"
          : "flex justify-between cursor-pointer left-0 right-0 pt-12 lg:pt-5 lg:px-12"
      }`}
    >
      <div className="flex items-center gap-12">
        <i className="fa-solid fa-bars text-[2em] items-center lg:text-[1.4em]"></i>
        <img
          alt="Uber Eats Home"
          src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/97c43f8974e6c876.svg"
          width="110"
          className="items-center h-[2rem]"
        />
      </div>
      <Buttons onClick={onClick} />
    </nav>
  );
}



