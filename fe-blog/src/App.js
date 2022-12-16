import "./App.css";
import Menu from "./shared/menu/menu";
import Home from "./app/home/home";
function App() {
  return (
    <div className="app">
      <div className="menu">
        <Menu />
      </div>
      <div className="container flex flex-col lg:flex-row m-auto">
        <div className="w-full featured_news lg:w-1/4"></div>
        <div className="w-full p-5  lg:content lg:w-1/2">
          <Home />
        </div>
        <div className="advertisement lg:w-1/4"></div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
