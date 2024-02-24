function about_me() {
  return (
    <>
      <div className="mt-40 p-10">
        <h1 className="font-tt-backwards text-[50px] text-[#735E59]">
          About me
        </h1>
        <div className="bg-black h-0.5 w-full"></div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-canva-sans text-[#735E59] font-bold text-[32px]">
            Hello There!
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-tt-commons-pro text-[17px]">
            I'm a second-year student at Rochester Institute of Technology, with
            a passion for web and mobile computing.{" "}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-tt-commons-pro text-[17px]">
            As a web and mobile computing major, I thrive on bringing ideas to
            life through design and collaboration. There's something incredibly
            fulfilling about working alongside a partner to create innovative
            projects that captivate audiences. Whether it's brainstorming ideas
            or diving deep into coding, the collaborative process has pushes me
            beyond the limits.{" "}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          {" "}
          <p className="font-tt-commons-pro text-[17px]">
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
