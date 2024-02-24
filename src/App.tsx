import Navbar from "./component/ui/nav";
import Title from "./component/ui/title";
import About from "./component/ui/about_me";

export default function App() {
  return (
    <>
      <div className="bg-[#E7DFD8]">
        <Navbar />
        <Title />
        <About />
      </div>
    </>
  );
}
