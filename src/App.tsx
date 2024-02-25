import Navbar from "./component/ui/nav";
import Title from "./component/ui/title";
import About from "./component/ui/about_me";
import Do from "./component/ui/what_I_can_do";

export default function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Title />
        <About />
        <Do />
      </div>
    </>
  );
}
