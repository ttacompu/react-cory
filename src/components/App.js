import React, {Component} from "react";
import HomePage from "./home/HomePage";
import AboutPage  from "./about/AboutPage";
import {BrowserRouter as Router, Route} from 'react-router-dom';

export class App extends Component{
    render(){
       return(     
       <div className="container-fluid">
                <p>Header here ...</p>
                <Router>
                    <div>
                        <Route exact  path="/" component={HomePage} />
                        <Route  path="/about" component={AboutPage} />
                    </div>
                </Router>
        </div>
        )
    }
}




