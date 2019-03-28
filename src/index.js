import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Form from "./conditionalForms/Form";
import Contact from "./Contact/Contact";
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
const routing = (
    <Router>
      <div>
     <div className="navigation">
        <div><Link className="link" to="/">Home</Link></div>
        <div> <Link to="/Form">Forms</Link></div>
        <div> <Link to="/contact">Animations</Link></div>
     </div>
    
        <Route path="/" component={App} />
        <Route path="/Form" component={Form} />
        <Route path="/contact" component={Contact} />
    
     
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))
  registerServiceWorker();