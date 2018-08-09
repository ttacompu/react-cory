import React, {Component} from 'react';

class CoursesPage extends Component{
    onTitleChanged = (event) =>{
        const {course} = this.state;
        course.title = event.target.value;
        this.setState({course});
        
    }
    onClickSave = (event) =>{
        const {course} = this.state;
        alert(course.title);
    }
        
    state= {
        course : { title : ''}
    }
    constructor(props, context){
        super(props, context);
    }

    render(){
        return (
            <div>
                <h1>Courses</h1>
                <h2>Add Course</h2>
                <input type="text" onChange={this.onTitleChanged} value={this.state.course.title} />
                <input type="submit" value="Save" onClick={this.onClickSave}  />
            </div>
        )
    }
}

export default CoursesPage;