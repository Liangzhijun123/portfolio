import { useEffect, useState } from 'react';
import axios from 'axios'; 

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    
    fetchVisitorCount();
  }, []);

  const fetchVisitorCount = async () => {
    try {
      const response = await axios.get('/api/visitor-count');
      setVisitorCount(response.data.visitorCount);
    } catch (error) {
      console.error('Error fetching visitor count:', error);
    }
  };

  const incrementVisitorCount = async () => {
    try {
      await axios.post('/api/increment-visitor-count');
      setVisitorCount(prevCount => prevCount + 1);
    } catch (error) {
      console.error('Error incrementing visitor count:', error);
    }
  };

  const handleClick = () => {
    incrementVisitorCount();
  };


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
