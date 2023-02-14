import React, {useState} from 'react';
import SearchedItems from './SearchedItems';

export default function AddItems() {
    const [name, setName] = useState(""); 

    const handleChange = (event) => {
    //   event.preventDefault();
      // 👇 Get input value from "event"
      setName(event.target.value);
    }; 

      return (
          <div className="items">
          <h2>Search Item</h2>
              <input type="search" onChange={handleChange} id="default-search" placeholder="Search items" />
            <SearchedItems searchedName={name}/>
          </div>
      );
}