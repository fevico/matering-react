import type { MouseEvent } from "react";

const ListGroup = () => {
    let items = [
        "London",
        "Japan",
        "San Francisco",
        "Paris"
    ]
    
    const handleEvent = (event: MouseEvent) => console.log(event)

    const message = items.length === 0 ? <p className="flex justify-center text-2xl text-red-500">No items found!</p>: null

    const getMessage = () => {
        return items.length === 0 ? <p className="flex justify-center text-2xl text-red-500">No items found!</p>: null
    }
    const  msg = items.length === 0 && <p>No items found!</p>
  return <>
      <h1>List</h1>
       <ul>
        {/* <li>An item</li>
        <li>Second item</li>   
        <li>Third item</li>
        <li>last item</li> */}  
        {msg}
        {items.map((item, index) => <li key={item} onClick={handleEvent}>{item}</li>)}
      </ul>
  </>
};

export default ListGroup;
// in react you can not return more than 1 element 