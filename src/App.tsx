import MyHeader from "./Component/MyHeader";
import MyFooter from "./Component/MyFooter";
import ListGroup from "./Component/ListGroup";
import MyMainInfo from "./Component/MyMainInfo";
import FavColor from "./Component/FavColor";

import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div>
      <MyHeader />
      <div>
        <FavColor />
        <MyMainInfo />
        <ListGroup />
      </div>

      <MyFooter />
    </div>
  );
}
export default App;
