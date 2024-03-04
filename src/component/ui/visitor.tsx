import { useState, useEffect } from "react";

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Retrieve visitor count from local storage
    const countString = localStorage.getItem("visitorCount");
    if (countString !== null) {
      const count = parseInt(countString);
      setVisitorCount(count);
    }
  }, []);

  useEffect(() => {
    // Increment visitor count and update local storage
    const increaseVisitorCount = () => {
      const newCount = visitorCount + 1;
      setVisitorCount(newCount);
      localStorage.setItem("visitorCount", newCount.toString());
    };

    increaseVisitorCount();
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
