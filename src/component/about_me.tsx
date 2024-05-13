function about_me() {
  return (
    <>
      <div className="md:p-12 p-2 w-full ml-10" id="about_me">
        <div className="w-full md:px-8 px-0">
          <h1 className="font-tt-backwards md:text-6xl font-medium text-[#735E59] text-[24px]">
            About me
          </h1>
          <div className="bg-black h-0.5 w-full"></div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-canva-sans text-[#735E59] font-semibold text-5xl my-8">
            Hello There!
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center  gap-8 md:px-20 md:text-[34px] font-extralight text-center w-full">
          <p className="font-tt-commons-pro text-[#544541]">
            I'm a second-year student at Rochester Institute of Technology, with
            a passion for web and mobile computing.{" "}
          </p>

          <p className="font-tt-commons-pro text-[#544541]">
            As a web and mobile computing major, I thrive on bringing ideas to
            life through design and collaboration. There's something incredibly
            fulfilling about working alongside a partner to create innovative
            projects that captivate audiences. Whether it's brainstorming ideas
            or diving deep into coding, the collaborative process has pushed me
            beyond the limits.{" "}
          </p>

          <p className="font-tt-commons-pro text-[#544541] ">
            One of my greatest joys is designing websites that not only look
            stunning but also deliver seamless user experiences. I love
            experimenting with different effects and techniques to enhance the
            visual appeal and functionality of a site.
          </p>
        </div>
      </div>
    </>
  );
}

export default about_me;
