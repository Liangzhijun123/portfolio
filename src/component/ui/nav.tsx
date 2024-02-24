function nav() {
  return (
    <>
      <div className="flex justify-center px-64">
        <div className="flex items-center justify-between mt-10">
          <div className="flex flex-row gap-80">
            <a className="font-agrandir font-bold text-[13.8px] hover:bg-[#735E59] hover:underline hover:text-white rounded-3xl px-14 py-2  transition duration-300">Bio</a>
            <a className=" font-agrandir font-bold text-[13.8px] hover:bg-[#735E59] hover:underline hover:text-white rounded-3xl px-14 py-2  transition duration-300">About me</a>
            <a className="font-agrandir font-bold text-[13.8px] hover:bg-[#735E59] hover:underline hover:text-white rounded-3xl px-14 py-2  transition duration-300">Contact me</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default nav;
