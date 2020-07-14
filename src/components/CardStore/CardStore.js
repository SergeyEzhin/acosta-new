import React from "react";
import './CardStore.scss';
import {withRouter} from 'react-router-dom';

const CardStore = ({elem, history}) => 
{
    return (
        <div className="col-md-4 pt-3 pb-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{elem.net}</h5>
                    <p className="card-text">Город: {elem.city}</p>
                    <p className="card-text">Адрес: {elem.adds}</p>
                    <button type="button" 
                        className="btn btn-primary" 
                        onClick={() => 
                        {
                            history.push(
                            {
                                pathname: '/projects/' + elem.id, 
                                state: elem.projects
                            }); 
                        }}>
                        Перейти к проектам
                    </button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(CardStore);