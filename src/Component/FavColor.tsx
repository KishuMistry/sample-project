import { useState } from "react";

function FavColor() {
  const [color, setColor] = useState("Red");
  return (
    <div>
      My Fav Color is {color}
      <button onClick={() => setColor("Green")}>Change Color</button>
    </div>
  );
}
export default FavColor;
