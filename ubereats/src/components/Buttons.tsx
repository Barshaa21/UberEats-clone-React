interface ButtonsProps {
  onClick: (action: string) => void;
}

export default function Buttons({ onClick }: ButtonsProps){
  return (
    <div className="flex">
      <button
        className="login-btn bg-gray-100 border-none rounded-[20px] lg:rounded-[25px]  h-[4rem] mr-7 p-5 items-center lg:w-[7rem] lg:h-[3.4rem] flex hover:bg-gray-400"
        onClick={() => onClick("Login")}
      >
        <i className="fa-solid fa-user user w-[0.5em] text-[1.5rem] lg:text-[1.2em]"></i>
        &nbsp;&nbsp;
        <p className="text-[0px]  lg:text-[1em] font-semibold p-1">Log in</p>
      </button>
      <button
        onClick={() => onClick("Signup")}
        className="Signup text-white bg-black rounded-[20px] lg:rounded-[30px] text-[1.5em] h-[4rem] w-[8rem] p-4 items-center lg:w-[6rem] lg:h-[3.4rem] lg:text-[1.2em] lg:p-2 lg:font-normal"
      >
        <b>Sign up</b>
      </button>
    </div>
  );
}

