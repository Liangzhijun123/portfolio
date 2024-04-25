function Nav() {
  return (
    <> 
      <div className="fixed top-0 w-full bg-white bg-opacity-70 shadow-md z-10 transition-all duration-500">
        <div className="flex justify-center md:px-64  w-full px-0">
          <div className="flex items-center  py-3 md:gap-[60] gap-5 text-wrap ">
            <a
              className="font-agrandir font-bold text-[20px] hover:bg-[#735E59] hover:underline hover:text-white rounded-3xl px-14 py-2 transition-all duration-500 transform transition:translate-x-28"
              href="#title"
            >
              Bio
            </a>
            <a
              className="font-agrandir font-bold text-[20px] hover:bg-[#735E59] hover:underline hover:text-white rounded-3xl px-14 py-2 transition-all duration-500 transform transition:translate-x-28"
              href="#about_me"
            >
              About me
            </a>
            <a
              className="font-agrandir font-bold text-[20px] hover:bg-[#735E59] hover:underline hover:text-white rounded-3xl px-14 py-2 transition-all duration-500 transform transition:translate-x-28"
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
