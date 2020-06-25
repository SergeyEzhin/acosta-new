import React from 'react';
import './Project.scss';
import {withRouter} from 'react-router-dom';

const Project = (props) => {

    let fields = props.elem.report_fields;
    console.log(fields);
    
    return (
        <div className="col-md-4 pt-3 pb-3">
            <div className="card">
                <div className="card-body">
                    <h5>{props.elem.name}</h5>
                    <p className="card-text">E-mail: <a href={`mailto:${props.elem.email}`} className="card-text">props.elem.email</a></p>
                    <button type="button" 
                        className="btn btn-primary" 
                        onClick={() => {
                            props.history.push(
                            {
                                pathname: '/goods/' + props.elem.id,
                                state: props.elem.products, 
                                fields
                            });
                        }}>
                        Перейти к товарам
                    </button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Project);

