import React, {Component} from "react";
import Header from './common/Header';
import HomePage from "./home/HomePage";
import AboutPage  from "./about/AboutPage";
import CoursesPage from './course/CoursesPage'
import {BrowserRouter as Router, Route} from 'react-router-dom';

export class App extends Component{
    render(){
       return(     
       <div className="container-fluid">
                <Router>
                    <div>
                        <Header />
                        <Route exact  path="/" component={HomePage} />
                        <Route  path="/courses" component={CoursesPage} />
                        <Route  path="/about" component={AboutPage} />
                    </div>
                </Router>
        </div>
        )
    }
}




