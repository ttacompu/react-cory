import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class  HomePage extends Component{

    render(){
        return(
            <div className="jumbotron">
                <h1>Plural Sight Administration</h1> 
                <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
                <Link to="/about" >Learn more</Link>
            </div>
        )
    }
}

 export default HomePage