import React from "react";
import './CardStore.scss';
// import {withRouter} from 'react-router-dom'

export const CardStore = (props) => {

    return (
        <div className="col-md-4 pt-3 pb-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.elem.net}</h5>
                    <p className="card-text">Город: {props.elem.city}</p>
                    <p className="card-text">Адрес: {props.elem.adds}</p>
                    <button type="button" 
                        className="btn btn-primary" 
                        onClick={() => 
                        {
                            props.history.push(
                            {
                                pathname: '/projects/' + props.elem.id, 
                                state: props.elem.projects
                            });
                        }}>
                        Перейти к проектам
                    </button>
                </div>
            </div>
        </div>
    )
}