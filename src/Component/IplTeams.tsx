import { MouseEvent, useState } from "react";
function IplTeams() {
  let iplTeamsList = ["CSK", "RCB", "MI", "KKR", "GT"];
  // cities = [];
  // const handleClick = (event: MouseEvent) => console.log(event);
  const [activeIndex, setIndex] = useState(-1);

  return (
    <>
      <h1>Dynamic List</h1>
      {iplTeamsList.length === 0 && <p>No team selected..!!</p>}

      <ul className="list-group">
        {iplTeamsList.map((team, index) => (
          <li
            className={
              activeIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => setIndex(index)}
          >
            {team}
          </li>
        ))}
      </ul>
    </>
  );
}

export default IplTeams;
