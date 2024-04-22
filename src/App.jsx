import "./App.css";
import Controls from "./Controls";
import About from "./About";

function App() {
  return (
    <div  className="flex mt-5 flex-col laptop:flex-row items-stretch"> 
      <Controls  />
      <About />
    </div>
  );
}

export default App;
