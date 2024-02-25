function Nav() {
  const scrollToSection = (id: string, duration = 800) => {
    const element = document.getElementById(id);
    if (element === null) return;

    const startPosition = window.pageYOffset;
    const targetPosition = element.offsetTop;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();

    const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const scroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      window.scrollTo(0, easeInOutQuad(elapsedTime, startPosition, distance, duration));
      if (elapsedTime < duration) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  };

  return (
    <>
      <div className="fixed top-0 w-full bg-white bg-opacity-70 shadow-md z-10 transition-all duration-500">
        <div className="flex justify-center px-64">
          <div className="flex items-center justify-between mt-10">
            <div className="flex flex-row gap-80">
              <a onClick={() => scrollToSection('title')} className="font-agrandir font-bold text-[13.8px] hover:bg-[#735E59] hover:underline hover:text-white rounded-3xl px-14 py-2 transition-all duration-500 transform transition:translate-x-28" href="#title">Bio</a>
              <a onClick={() => scrollToSection('about_me')} className="font-agrandir font-bold text-[13.8px] hover:bg-[#735E59] hover:underline hover:text-white rounded-3xl px-14 py-2 transition-all duration-500 transform transition:translate-x-28" href="#about_me">About me</a>
              <a onClick={() => scrollToSection('contact_me')} className="font-agrandir font-bold text-[13.8px] hover:bg-[#735E59] hover:underline hover:text-white rounded-3xl px-14 py-2 transition-all duration-500 transform transition:translate-x-28" href="#contact_me">Contact me</a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-16"></div> 
    </>
  );
}

export default Nav;
