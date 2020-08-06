import React from "react";
import Project from '../Project/Project';
import {Loader} from '../../ui/Loader/Loader';
import {FieldsContext} from '../FieldsContext/FieldsContext';

const Projects = (props) => {

    let projects = props.location.state;

    if(projects)
    {
        return (
            <div className="container pt-4">
                <h1 className="text-center">Projects</h1>
                <div className="row pt-3">
                {
                    projects.map((elem, index) => 
                    {
                        return (
                            <FieldsContext.Provider value={{fields: elem.report_fields}} key={index}>
                                <Project elem={elem} key={index} id={elem.id} />
                            </FieldsContext.Provider>
                        )
                    })
                }
                </div>
            </div>
        )
    }
    else 
    {
        return <Loader />
    }
    
}

export default Projects;

