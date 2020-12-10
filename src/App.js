import "./App.css";
import ClassComp from "./components/classComp";
import Parent from "./components/Parent";
import FuncComp from "./components/funcComp";
import HandlingEvents from "./components/handlingEvents";
import ConditionalRender from "./components/conditionalRender";

function App() {
  return (
    <div className="App">
      <ClassComp />
    </div>
  );
}

export default App;

// <ClassComp />
// <FuncComp />
// <Parent />
// <HandlingEvents />
