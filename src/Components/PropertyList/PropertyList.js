import React from 'react';
import './PropertyList.css';

const PropertyList = () => {
  return (
    <div className='pList'>
      <div className="pListItem">
        <img className='pListImg' src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg" alt="Dublin" />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>230 Hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img className='pListImg' src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/201533260.jpg?k=e81805708f087ba5aeac4c36042751d553471218824dc95c05f0798c02fc428d&o=" alt="Dublin" />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>203 Apartments</h2>
        </div>
      </div>
      <div className="pListItem">
        <img className='pListImg' src="https://diosasluxuryvillas.com/wp-content/uploads/2020/07/diosasluxuryvillas_kefallonia_villa_outside13.jpg" alt="Dublin" />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>120 Villas</h2>
        </div>
      </div>
      <div className="pListItem">
        <img className='pListImg' src="https://l.icdbcdn.com/oh/1590372f-bf7b-4379-b7e5-4b333cff911a.jpg" alt="Dublin" />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>98 Cabins</h2>
        </div>
      </div>
    </div>
  )
}

export default PropertyList