import React, {useState} from 'react';

export default function EditItems() {
    const [name, setName] = useState(""); 
    const [id, setId] = useState("");

    const handleidChange = (event) => {
      event.preventDefault();
      // 👇 Get input value from "event"
      setId(event.target.value);
    }; 

    const handlenameChange = (event) => {
        event.preventDefault();
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      // setSearch(event.target.value);
      // console.log(search)
      // 👇 Get input value from "event"
      fetch('http://localhost:5000/items/'+id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },     
        body: JSON.stringify({"name": name})
      }).then((response) => response).then((data) => window.location.reload());
  };    

      return (
          <div className="items">
          <h2>Edit item</h2>
          <ul>
            <form onSubmit={handleSubmit}>
              <input type="input" onChange={handleidChange} id="default-search" placeholder="Insert ID of item to edit" />
              <input type="input" onChange={handlenameChange} id="default-search" placeholder="Insert new item name" />
              <button type="submit">Submit</button>
            </form>
          </ul>
          </div>
      );
}