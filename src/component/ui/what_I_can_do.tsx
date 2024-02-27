

function can_do() {
  return (
    <>
      <div className="mt-40 p-8">
        <div className="w-full px-8">
          <h1 className="font-tt-backwards text-6xl font-medium text-[#735E59]">
            What I can do for you
          </h1>
          <div className="bg-black h-0.5 "></div>
        </div>

        <div className="grid 2xl:grid-cols-3 lg:grid-cols-2  relative mt-16  overflow-hidden">
          <div className="flex flex-col items-center">
            <div>
              <img
                className="pb-4 border-b-2 border-black mb-2"
                src="/pic.png"
                alt="myimage"
                height={200}
                width={500}
              />

              <div className="grid grid-cols-2">
                <div className="font-tt-commons-pro font-bold text-[#544541]">
                  Project
                </div>
                <div className="font-tt-commons-pro text-[#544541]">
                  E-commerce
                </div>
                <div className="font-tt-commons-pro font-bold text-[#544541]">
                  Year
                </div>
                <div className="font-tt-commons-pro text-[#544541]">2024</div>

                <div className="font-tt-commons-pro font-bold text-[#544541]">
                  Type
                </div>
                <div className="font-tt-commons-pro text-[#544541]">
                  Group project
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div>
              <img
                className="pb-4 border-b-2 border-black mb-2"
                src="/pic1.png"
                alt="myimage"
                height={200}
                width={500}
              />

              <div className="grid grid-cols-2">
                <div className="font-tt-commons-pro font-bold text-[#544541] text-[14px]">
                  Project
                </div>
                <div className="font-tt-commons-pro text-[#544541] text-[14px]">
                  Crochet Cuteness
                </div>
                <div className="font-tt-commons-pro font-bold text-[#544541] text-[14px]">
                  Year
                </div>
                <div className="font-tt-commons-pro text-[#544541] text-[14px]">
                  2024
                </div>
                <div className="font-tt-commons-pro font-bold text-[#544541] text-[14px]">
                  Type
                </div>
                <div className="font-tt-commons-pro text-[#544541] text-[14px]">
                  Commerical/business (work in progress)
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center flex-col">
            <div>
              <img
                className="pb-4 border-b-2 border-black mb-2"
                src="/pic2.png"
                alt="myimage"
                height={200}
                width={500}
              />

              <div className="grid grid-cols-2">
                <div className="font-tt-commons-pro font-bold text-[#544541] text-[14px]">
                  Project
                </div>
                <div className="font-tt-commons-pro text-[#544541 text-[14px]]">
                  Travel to China
                </div>
                <div className="font-tt-commons-pro font-bold text-[#544541] text-[14px]">
                  Year
                </div>
                <div className="font-tt-commons-pro text-[#544541] text-[14px]">
                  2023
                </div>
                <div className="font-tt-commons-pro font-bold text-[#544541] text-[14px]">
                  Type
                </div>
                <div className="font-tt-commons-pro text-[#544541] text-[14px]">
                  Travel website
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default can_do;
