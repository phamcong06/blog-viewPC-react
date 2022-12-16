import "./App.css";
import Menu from "./shared/menu/menu";
function App() {
  return (
    <div className="app">
      <div className="menu">
        <Menu />
      </div>
      <div className="container">
        <div className="featured_news"></div>
        <div className="content"></div>
        <div className="advertisement"></div>
      </div>
      <div className="footer">
        
      </div>
    </div>
  );
}

export default App;
