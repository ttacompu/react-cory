import React, {Component} from 'react';
import { Link} from 'react-router-dom';


class  AboutPage extends Component{
    render(){
        return (
            <div>
               <div> About Page</div>
                <Link to="/">Back</Link>
            </div>
            
        )
    }
}

export default AboutPage;