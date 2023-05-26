import "bootstrap/dist/css/bootstrap.css";
import PCMessage from "./Component/PCMessage";
import AlertExample from "./Component/AlertExample";
import Alert from "./Component/Alert";

function App() {
  return (
    <div>
      <PCMessage text="Hello My First Property"></PCMessage>
      <AlertExample />
      <Alert>
                <p>Hello Alert</p>     {" "}
      </Alert>
    </div>
  );
}
export default App;
