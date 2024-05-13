import img1 from "../images/pic.png";
import img2 from "../images/pic1.png";
import img3 from "../images/pic2.png";
import img4 from "../images/pic3.png";
import img5 from "../images/pic4.png";




function can_do() {
  const items = [
    {
      img: img1,
      project_title: "E-commerce",
      year:"2024",   
      type: "Group project",
    },
    {
      img: img2,
      project_title: "Crochet Cuteness",
      year:"2024",   
      type: "Commercial/business web design",
    },
    {
      img: img3,
      project_title: "Founding Story",
      year:"2021",   
      type: "Group project",
    },
    {
      img: img4,
      project_title: "Founding Story",
      year:"2021",   
      type: "Group project",
    },
    {
      img: img5,
      project_title: "Founding Story",
      year:"2021",   
      type: "Group project",
    },
  ];
  return (
    <>
      <div className="mt-40 p-8">
        <div className="w-full px-8">
          <h1 className="font-tt-backwards text-6xl font-medium text-[#735E59]">
            What I can do for you
          </h1>
          <div className="bg-black h-0.5 "></div>
        </div>

        {/* <div className="grid md:grid-cols-3 grid-cols-1 relative mt-16  overflow-hidden p-12">
          <div className="flex flex-col items-center">
            <div>
              <a
                href="https://ecommerce-full-stack-jet.vercel.app/  "
                target="_blank"
                className=""
              >
                {" "}
                <img
                  className="pb-4 border-b-2 border-black mb-2 hover:scale-105"
                  src="/pic.png"
                  alt="myimage"
                  height={200}
                  width={500}
                />
              </a>

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
              <a
                href="https://www.figma.com/proto/7xJNdNuXfmmeVSLFXG7AFu/shop?type=design&node-id=132-14&t=F8pwueNsNTZkTPUq-0&scaling=scale-down&page-id=0%3A1"
                target="_blank"
              >
                {" "}
                <img
                  className="pb-4 border-b-2 border-black mb-2 hover:scale-105"
                  src="/pic1.png"
                  alt="myimage"
                  height={200}
                  width={500}
                />
              </a>

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
                  Individual figma web design
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center flex-col">
            <div>
              <a
                href="https://www.figma.com/proto/RtqZg8YmHdXJrNs6naLowW/management-app-for-airport-in-japan?type=design&node-id=2-2&t=oYkeLAIqtLQSw00G-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A2"
                target="_blank"
              >
                <img
                  className="pb-4 border-b-2 border-black mb-2 hover:scale-105 "
                  src="/pic4.png"
                  alt="myimage"
                  height={300}
                  width={500}
                />
              </a>

              <div className="grid grid-cols-2">
                <div className="font-tt-commons-pro font-bold text-[#544541] text-[14px]">
                  Project
                </div>
                <div className="font-tt-commons-pro text-[#544541] text-[14px]">
                  Management app for airport in Japan
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
                  Web design for mobile app airport in Japan <br />
                 
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center flex-col mt-10">
            <div>
              <a
                href="https://www.figma.com/proto/dqXTuN0fxFodAwFQkaQQLZ/smoothies?type=design&node-id=3-189&t=lXzDz6o7bKMhWG8O-1&scaling=scale-down&page-id=0%3A1&mode=design"
                target="_blank"
              >
                <img
                  className="pb-4 border-b-2 border-black mb-2 hover:scale-105"
                  src="/pic3.png"
                  alt="myimage"
                  height={300}
                  width={500}
                />
              </a>

              <div className="grid grid-cols-2 ">
                <div className="font-tt-commons-pro font-bold text-[#544541] text-[14px]">
                  Project
                </div>
                <div className="font-tt-commons-pro text-[#544541] text-[14px]">
                  Smoothies web design 
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
                  Web design for selling smoothies <br />
                  <a
                    href="https://www.figma.com/proto/RtqZg8YmHdXJrNs6naLowW/management-app-for-airport-in-japan?type=design&node-id=2-2&t=eyiUN3hxaaCD7EuP-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A2&mode=design"
                    target="_blank"
                    className="hover:underline  hover:text-[#58a2f5]"
                  ></a>{" "}
                  <br />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center flex-col mt-10">
            <div>
              <a
                href="https://www.figma.com/proto/uNQOJ2RWc17GwoI0qzc3b9/veteransponsored?type=design&t=u8jDaxvxnypO5onW-1&scaling=scale-down&page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2&mode=design"
                target="_blank"
              >
                <img
                  className="pb-4 border-b-2 border-black mb-2 hover:scale-105"
                  src="/pic2.png"
                  alt="myimage"
                  height={300}
                  width={500}
                />
              </a>

              <div className="grid grid-cols-2 ">
                <div className="font-tt-commons-pro font-bold text-[#544541] text-[14px]">
                  Project
                </div>
                <div className="font-tt-commons-pro text-[#544541] text-[14px]">
                  Veteran web design volunteer 
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
                  Web design for sponsoring the verterans <br />
               
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default can_do;
