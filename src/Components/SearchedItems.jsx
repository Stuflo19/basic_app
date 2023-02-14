import React, {useState, useEffect} from 'react';

export default function SearchedItems({searchedName}) {

    const [searchedItems, setItems] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        fetch('http://localhost:5000/itemsearch/'+searchedName, {
          method: 'PUT',
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
      }, [searchedName])

      
      if(searchedItems.length > 0 && loaded)
      {
        console.log(searchedItems);
        return (
            <div className="items">
            <h2>Items</h2>
            <ul>
                {searchedItems.map((item)=>{
                    return <li key={item[0]}>{item[1]}</li>
                })}
            </ul>
            </div>
        );
        } else {
            return(
                <p>No items found...</p>
            );
        }
}