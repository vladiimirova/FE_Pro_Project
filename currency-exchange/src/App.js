import RouterComponent from "./components/Router/RouterComponent.js";
import { BrowserRouter as Router, useLocation } from "react-router-dom"; 
import Header from "./components/Layout/Header/Header.js";
import Card from "./components/Layout/Card/Card.js";
import Footer from "./components/Layout/Footer/Footer.js";
import "./App.css";
import "./Fonts/Fonts.css";

const validPaths = [
  "/",
  "/converter",
  "/services",
  "/contacts",
  "/questions",
  "/cabinet"
];

function AppContent() {
  const location = useLocation(); 

  const isNotFoundPage = !validPaths.includes(location.pathname);

  return (
    <div className="App">
      {!isNotFoundPage && <Header />}
      {!isNotFoundPage && <Card />}

      <main>
        <RouterComponent />
      </main>

      {!isNotFoundPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router> 
      <AppContent />
    </Router>
  );
}

export default App;
