import Navbar from "./component/ui/nav";
import Title from "./component/ui/title";
import About from "./component/ui/about_me";
import Do from "./component/ui/what_I_can_do";
import Contact from "./component/ui/contact";
import Slide from "./component/ui/slide";
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
