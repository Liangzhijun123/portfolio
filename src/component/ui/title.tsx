
import { Bounce } from 'react-awesome-reveal';
import VisitorCounter from './visitor'; 

function Title() {
  return (
    <>
      <div className="grid grid-cols-2 gap-10 mt-36 mb-52" id="title">
        <div className="flex flex-col justify-center items-center">
          <div className="text-left">
            <p className="font-bold text-[22px] font-tt-commons-pro ">
              Hello everyone! My name is
            </p>
            <Bounce>
              <h1 className="font-agrandir font-bold text-[72px]">
                Zhi Jun Liang
              </h1>
            </Bounce>

            <p className="font-bold text-[22px] font-tt-commons-pro">
              I am a web designer / web developer
            </p>
            
          </div>
          <VisitorCounter />
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-white p-4">
            <img src="/myimage.png" alt="myimage" height={200} width={500} />
          </div>
        </div>
      </div>
     
    </>
  );
}

export default Title;
