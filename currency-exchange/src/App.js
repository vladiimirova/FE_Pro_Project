import RouterComponent from "./Components/Router/RouterComponent.js";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Layout/Header/Header.js";
import Card from "./Components/Layout/Card/Card.js";
import Footer from "./Components/Layout/Footer/Footer.js";
import "./App.css";
import "./Fonts/Fonts.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Card />
        <main className="flex justify-center">
          <RouterComponent />
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
