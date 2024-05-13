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
      title: "Project",
      year: "2024",
      year_title: "Year",
      type_title: "Type",
      type: "Group project",
      link: "https://www.figma.com/proto/r31HvMoSMr2TOsxFFvhZCr/e-commerce-site-for-a-camera-store?node-id=38-7&t=xcDbvrs6yY33owrH-1",
    },
    {
      img: img2,
      project_title: "Crochet Cuteness",
      title: "Project",
      year: "2024",
      year_title: "Year",
      type_title: "Type",
      type: "Commercial/business web design project",
      link: "https://www.figma.com/proto/7xJNdNuXfmmeVSLFXG7AFu/shop?node-id=132-14&starting-point-node-id=132%3A14&t=0a6ur9FHQvAwRLE7-1",
    },
    {
      img: img4,
      project_title: "Smoothie",
      title: "Project",
      year: "2024",
      year_title: "Year",
      type_title: "Type",
      type: "Personal web design project",
      link: "https://www.figma.com/proto/dqXTuN0fxFodAwFQkaQQLZ/smoothies?node-id=107-697&starting-point-node-id=107%3A697&t=Ng6C5VgiM058y17u-1",
    },
    {
      img: img3,
      project_title: "Veteran sponsored",
      title: "Project",
      year: "2024",
      year_title: "Year",
      type_title: "Type",
      type: "Volunteer web design project",
      link: "https://www.figma.com/proto/uNQOJ2RWc17GwoI0qzc3b9/veteransponsored?node-id=1-2&starting-point-node-id=1%3A2&t=dbA4k1oNWsNa05Gk-1",
    },
    {
      img: img5,
      project_title: "Management app for airport in Japan",
      title: "Project",
      year: "2024",
      year_title: "Year",
      type_title: "Type",
      type: "Person web design project",
      link: "https://www.figma.com/proto/RtqZg8YmHdXJrNs6naLowW/management-app-for-airport-in-japan?node-id=12-160&t=wBeyt1JY8PNttAjp-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A2",
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

        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-5 justify-evenly mt-10">
          {items.map((item, index) => (
            <div key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.img}
                  alt={item.project_title}
                  style={{
                    width: "100%",
                    height: "350px",
                    objectFit: "cover",
                    borderBottom: "6px solid black",
                  }}
                />
              </a>

              <div className="grid grid-cols-2 ">
                <div className="font-tt-commons-pro font-bold text-[#544541]">
                  {item.title}{" "}
                </div>
                <div className="font-tt-commons-pro ">
                  {" "}
                  {item.project_title}
                </div>
                <div className="font-tt-commons-pro font-bold text-[#544541]">
                  {item.year_title}{" "}
                </div>
                <div className="font-tt-commons-pro">{item.type_title} </div>
                <div className="font-tt-commons-pro font-bold text-[#544541]">
                  {item.year}
                </div>
                <div className="font-tt-commons-pro">{item.type}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default can_do;
