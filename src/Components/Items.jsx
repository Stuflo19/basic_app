import React, {useEffect, useState} from 'react';

export default function Items() {
    const [items, setItems] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        fetch('http://localhost:5000/items', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },     
        })
          .then(res => res.json())
          .then(
            (result) => {
              setItems(result);
              setLoaded(true);
            },
            (error) => {
              console.log("error getting items");
            }
          )
      }, [])

    console.log(items);

    if(!loaded){return <div>Loading...</div>}
    else {
        return (
            <div className="items">
            <h2>Items</h2>
            <ul>
                {items.map((item)=>{
                    return <li key={item[0]}>{item[1]}</li>
                })}
            </ul>
            </div>
        );
    }
}