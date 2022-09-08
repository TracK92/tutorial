import React from "react";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          className="fpImg"
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/46/20/0b/aparthotel-stare-miasto.jpg?w=700&h=-1&s=1"
          alt="Madrid"
        />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">From $100 / night</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Superb</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          className="fpImg"
          src="https://photos.smugmug.com/Krakow/Krakow-Hotels/i-LRRmRGC/0/S/aparthotel-stare-miasto2-S.jpg"
          alt="Madrid"
        />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">From $100 / night</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Superb</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          className="fpImg"
          src="https://www.kayak.com/rimg/himg/9e/44/eb/revato-1502-11347837-981611.jpg?width=1366&height=768&xhint=1560&yhint=1001&crop=true"
          alt="Madrid"
        />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">From $100 / night</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Superb</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          className="fpImg"
          src="https://www.kayak.com/rimg/himg/9e/44/eb/revato-1502-11347837-981611.jpg?width=1366&height=768&xhint=1560&yhint=1001&crop=true"
          alt="Madrid"
        />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">From $100 / night</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Superb</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
