import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header/Header";
import Body from "./Component/Body/body";
import About from "./Component/Body/About";
import Project from "./Component/Body/Project";

function App() {
  return (
    <div>
      <Header />
      <Body />
      <About />
      <Project />
    </div>
  );
}

export default App;
