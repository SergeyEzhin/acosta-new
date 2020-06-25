import React from "react";
import {withRouter} from 'react-router-dom'
import Project from '../Project/Project';

const Projects = (props) => {

    console.log(props);
    let projects = props.location.state;

    if(projects.length)
    {
        return (
            <div className="container pt-4">
                <h1 className="text-center">Projects</h1>
                <div className="row pt-3">
                {
                    projects.map((elem, index) => 
                    {
                        return (
                            <Project elem={elem} key={index} id={elem.id} fields={elem.report_fields} />
                        )
                    })
                }
                </div>
            </div>
        )
    }
    else 
    {
        return null;
    }
}

// export default withRouter(Projects);
export default Projects;
