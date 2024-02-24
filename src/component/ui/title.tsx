function title() {
  return (
    <>
      <div className="grid grid-cols-2 gap-10 mt-20">
        <div className="flex flex-col justify-center items-center">
          <div className="text-left">
            <p className="font-bold text-[22px] font-tt-commons-pro ">Hello everyone! My name is</p>
            <h1 className="font-agrandir font-bold text-[72px]">
              Zhi Jun Liang
            </h1>
            <p className="font-bold text-[22px] font-tt-commons-pro">I am a web designer / web developer</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src="/myimage.png" alt="myimage" height={200} width={500}></img>
          <div className=" bg-white h-400 w-800"></div>
        </div>
      </div>
    </>
  );
}

export default title;
