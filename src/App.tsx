import Navbar from "./component/nav";
import Title from "./component/title";
import About from "./component/about_me";
import Do from "./component/what_I_can_do";
import Contact from "./component/contact";
import Slide from "./component/slide";


import "./App.css";
export default function App() {
  return (
    <>
      <div className="">
        <Navbar />

        <Slide>
          <Title />
        </Slide>
        <Slide>
          <About />
        </Slide>

        <Slide>
          <Do />
        </Slide>

        <Slide>
          <Contact />
        </Slide>
      </div>
    </>
  );
}
