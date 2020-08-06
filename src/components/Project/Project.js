import React from 'react';
import './Project.scss';
import {withRouter} from 'react-router-dom';
import {FieldsContext} from '../FieldsContext/FieldsContext';

const Project = ({elem, history}) => {

    return (
        <FieldsContext.Consumer>
            {({fields}) => (
                <div className="col-md-4 pt-3 pb-3">
                    <div className="card">
                        <div className="card-body">
                            <h5>{elem.name}</h5>
                            <p className="card-text">E-mail: <a href={`mailto:${elem.email}`} className="card-text">{elem.email}</a></p>
                            <button type="button" 
                                className="btn btn-primary" 
                                onClick={() => {
                                    history.push(
                                    {
                                        pathname: '/goods/' + elem.id,
                                        state: {products: elem.products, fields}, 
                                    });
                                }}>
                                Перейти к товарам
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </FieldsContext.Consumer>
    )
}

export default withRouter(Project);

