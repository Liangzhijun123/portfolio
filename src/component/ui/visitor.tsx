import { useState, useEffect } from "react";

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const retrieveVisitorCount = () => {
      const countString = localStorage.getItem("visitorCount");
      if (countString !== null) {
        const count = parseInt(countString);
        setVisitorCount(count);
      }
    };

    retrieveVisitorCount();
  }, []);

  useEffect(() => {
    const handleLinkClick = () => {
      setVisitorCount(prevCount => {
        const newCount = prevCount + 1;
        localStorage.setItem("visitorCount", newCount.toString());
        return newCount;
      });
    };


    const link = document.querySelector("a[href='https://portfolio-liart-iota.vercel.app/']");
    if (link) {
      link.addEventListener("click", handleLinkClick);
    }

    return () => {
     
      if (link) {
        link.removeEventListener("click", handleLinkClick);
      }
    };
  }, []);
  return (
    <div className="mt-5 pr-56 items-center ">
      <div className="text-center">
        <h1 className="text-4xl  mb-4 pl-5">Visitor Count: </h1>
        <p className="text-6xl  text-blue-500">{visitorCount}</p>
      </div>
    </div>
  );
};

export default VisitorCounter;
