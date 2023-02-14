import React, {useState} from 'react';

export default function AddItems() {
    const [name, setName] = useState(""); 

    const handleChange = (event) => {
      event.preventDefault();
      // 👇 Get input value from "event"
      setName(event.target.value);
    }; 

    const handleSubmit = (event) => {
      event.preventDefault();
      // setSearch(event.target.value);
      // console.log(search)
      // 👇 Get input value from "event"
      fetch('http://localhost:5000/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },     
        body: JSON.stringify({"name": name})
      }).then((response) => response).then((data) => window.location.reload());
      // window.location.reload();
  };    

      return (
          <div className="items">
          <h2>Add item</h2>
          <ul>
            <form onSubmit={handleSubmit}>
              <input type="search" onChange={handleChange} id="default-search" placeholder="Insert name of item to add" />
              <button type="submit">Submit</button>
            </form>
          </ul>
          </div>
      );
}