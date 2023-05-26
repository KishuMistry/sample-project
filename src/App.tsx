import MyHeader from "./Component/MyHeader";
import MyFooter from "./Component/MyFooter";
import ListGroup from "./Component/ListGroup";
import MyMainInfo from "./Component/MyMainInfo";
import IplTeams from "./Component/IplTeams";

import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div>
      <MyHeader />
      <div>
        <IplTeams />
        <MyMainInfo />
      </div>

      <MyFooter />
    </div>
  );
}
export default App;
