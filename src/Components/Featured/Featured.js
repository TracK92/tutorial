import React from 'react';
import './Featured.css';

const Featured = () => {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <img className='featuredImg' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Dublin_-_The_Temple_Bar%2C_Dublin_-_20191126161201.jpg/1200px-Dublin_-_The_Temple_Bar%2C_Dublin_-_20191126161201.jpg" alt="Dublin" />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h1>123 properties</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img className='featuredImg' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Dublin_-_The_Temple_Bar%2C_Dublin_-_20191126161201.jpg/1200px-Dublin_-_The_Temple_Bar%2C_Dublin_-_20191126161201.jpg" alt="Dublin" />
        <div className="featuredTitles">
          <h1>Nairobi</h1>
          <h1>103 properties</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img className='featuredImg' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Dublin_-_The_Temple_Bar%2C_Dublin_-_20191126161201.jpg/1200px-Dublin_-_The_Temple_Bar%2C_Dublin_-_20191126161201.jpg" alt="Dublin" />
        <div className="featuredTitles">
          <h1>Perth</h1>
          <h1>98 properties</h1>
        </div>
      </div>
    </div>
  );
};

export default Featured;