import React from 'react';
import './App.css';
import Header from "./comonents/Header";
import Main from "./comonents/Main";
import Products from "./comonents/Products";
import Locate from "./comonents/Locate";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer from "./comonents/Footer"
function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Main />
      <Products />
      <Locate />
      <Footer />
      <Switch>
      <Route path="#" exact component={Main}/>
      <Route path="#products" component={Products}/>
      <Route path="#locate-us" component={Locate}/>
      </Switch>
      </div>
      </Router>
  );
}

export default App;
