import "./App.css";
import ClassComp from "./components/classComp";
import Parent from "./components/Parent";
import FuncComp from "./components/funcComp";
import HandlingEvents from "./components/handlingEvents";

function App() {
  return (
    <div className="App">
      <HandlingEvents />
    </div>
  );
}

export default App;

// <ClassComp />
// <FuncComp />
// <Parent />
