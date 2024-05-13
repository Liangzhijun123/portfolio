
import { Bounce } from 'react-awesome-reveal';
import img1 from "../images/myimage.png";

function Title() {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-36 mb-52 w-full px-10"  id="title">
        <div className="flex flex-col justify-center items-center ">
          <div className=" ">
            <p className="font-bold text-[22px] font-tt-commons-pro ">
              Hello everyone! My name is
            </p>
            <Bounce>
              <h1 className="font-agrandir font-bold md:text-[72px] text-[32px] ">
                Zhi Jun Liang
              </h1>
            </Bounce>

            <p className="font-bold text-[22px] font-tt-commons-pro">
              I am a web designer / web developer
            </p>
            
          </div>
          {/* <VisitorCounter /> */}
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-white p-4">
            <img src={img1} alt="myimage" height={200} width={500} />
          </div>
        </div>
      </div>
     
    </>
  );
}

export default Title;
