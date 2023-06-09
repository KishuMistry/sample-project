import { MouseEvent } from "react";

function ListGroup() {
  let items = ["Bengaluru", "Valsad", "Mumbai", "Surat", "Chennai"];
  const handleClick = (event: MouseEvent) => console.log(event);
  //items = [];
  return (
    <>
      <h1>Dynamic List</h1>
      {items.length == 0 && <p>No City Found..!!</p>}
      <ul className="list-group">
        {items.map((x, index) => (
          <li className="list-group-item" key={index} onClick={handleClick}>
            {x}{" "}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
