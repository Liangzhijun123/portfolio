import { useEffect, useState } from 'react';


const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(() => {
    const savedCount = localStorage.getItem('visitorCount');
    return savedCount ? parseInt(savedCount) : 0;
  });

  const handleClick = () => {
    let userId = localStorage.getItem('userId');
    userId = userId ? userId : ''; 

    const visited = localStorage.getItem('visited');

    if (!visited || visited !== userId) {
      setVisitorCount(prevCount => prevCount + 1);
      localStorage.setItem('visited', userId);
    }
  };

  useEffect(() => {
    localStorage.setItem('visitorCount', visitorCount.toString());
  }, [visitorCount]);

  return (
    <div className="flex justify-center items-center pr-32 mt-10 ">
      <div className="text-center">
        <h1 className="text-4xl  mb-4">Visitor Count</h1>
        <p className="text-6xl  text-blue-500">{visitorCount}</p>
        <button onClick={handleClick} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          click this button :D
        </button>
      </div>
    </div>
  );
};

export default VisitorCounter;
