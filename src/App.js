import "./App.css";
import { Switch, Route, Link, BrowserRouter as Router } from "react-dom";
import { Layout, Typography, Space } from "antd";
//import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Exchanges from "./components/Exchanges";
import Cryptocurrencies from "./components/Cryptocurrencies";
import CryptoDetails from "./components/CryptoDetails";
import News from "./components/News";

function App() {
  return (
    <div className="App">
      <div className="navbar"></div>
      <Router>
        <div className="main">
          <Layout>
            <div className="routes">
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
              </Switch>
            </div>
          </Layout>
        </div>
      </Router>
      <div className="footer"></div>
    </div>
  );
}

export default App;
