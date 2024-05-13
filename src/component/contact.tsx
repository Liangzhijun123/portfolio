import conn from "../images/conn.png";
import facebook from "../images/fb.png";
import twitter from "../images/twitter.png";
import github from "../images/github.png";
import linkedin from "../images/linkein.png";
import '../index.css';

function contact_me() {
  return (
    <>
      <div className="mt-40  flex flex-col items-center ml-10" id="contact_me">
        <div className="w-full ">
          <h1 className="font-tt-backwards md:text-6xl font-medium text-[#735E59] text-[24px] text-nowrap">
            I'd love to work with you. Contact me now.
          </h1>
          <div className="bg-black h-0.5 w-full"></div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1   mt-16 md:gap-[340px] gap-5">
          <div>
            <img src={conn} width={400} height={200}></img>
          </div>
          <div className="flex flex-col text-left justify-center  ">
            <div className="font-tt-commons-pro text-[24px] font-bold text-[#544541]">
              Phone
            </div>
            <div className="font-tt-commons-pro text-[20px]">
              (917) 608-2248
            </div>
            <div className="font-tt-commons-pro text-[24px] font-bold text-[#544541]">
              Email
            </div>
            <div className="font-tt-commons-pro text-[20px]">
              liangzhijun1216@gmail.com
            </div>
            <div className="font-tt-commons-pro text-[24px] font-bold text-[#544541]">
              Social
            </div>
            <div className="flex flex-row">
              <div>
                <a
                  href="https://www.facebook.com/profile.php?id=100009393358604"
                  target="_blank"
                >
                  <img src={facebook}></img>
                </a>
              </div>

              <div>
                <a href="https://twitter.com/n2nitrogenacid" target="_blank">
                  <img src={twitter}></img>
                </a>
              </div>
              <div>
                <a href="https://github.com/Liangzhijun123?tab=repositories" target="_blank">
                  <img src={github}></img>
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/zhi-jun-liang-9b1752228/"
                  target="_blank"
                >
                  <img src={linkedin}></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default contact_me;
