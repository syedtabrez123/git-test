import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './components/Home';
import Books from './components/Books';
import ShowBook from './components/home/ShowBook';
import Error from './components/Error';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
	        <Route path="/" component={Home} exact />
          <Route path="/book/:id" component={ShowBook} />
	        <Route path="/store" component={Books} />
	        <Route component={Error} />
	    </Switch>

        <Footer/>
      </div>
      );
  }
}

export default App;

