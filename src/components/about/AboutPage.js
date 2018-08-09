import React, {Component} from 'react';
import { Link} from 'react-router-dom';


class  AboutPage extends Component{
    render(){
        return (
            <div>
               <span> About Page</span>
                <Link to="/">Back</Link>
            </div>
            
        )
    }
}

export default AboutPage;