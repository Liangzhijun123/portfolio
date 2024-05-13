function Nav() {
  return (
    <>
      <div className="fixed top-0 w-full bg-white bg-opacity-70 shadow-md z-10 transition-all duration-500">
        <div className="flex justify-center items-center py-3">
          <div className="flex flex-row text-nowrap overflow-x-auto">
            <a
              className="font-agrandir font-bold text-[20px] hover:bg-[#735E59] hover:underline hover:text-white rounded-3xl px-6 md:px-10 py-2 transition-all duration-500"
              href="#title"
            >
              Bio
            </a>
            <a
              className="font-agrandir font-bold text-[20px] hover:bg-[#735E59] hover:underline hover:text-white rounded-3xl px-6 md:px-10 py-2 transition-all duration-500"
              href="#about_me"
            >
              About me
            </a>
            <a
              className="font-agrandir font-bold text-[20px] hover:bg-[#735E59] hover:underline hover:text-white rounded-3xl px-6 md:px-10 py-2 transition-all duration-500"
              href="#contact_me"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>

      <div className="h-16"></div>
    </>
  );
}

export default Nav;
