import React from 'react';
import './Product.scss';
import {withRouter} from 'react-router-dom';
import {FieldsContext} from '../FieldsContext/FieldsContext';

const Product = (props) => {

    console.log(props)

    return (
        <FieldsContext.Consumer>
            {({fields}) => (
                <li className="list-group-item p-0">
                    <button 
                        className="m-0 button-report" 
                        onClick={() => 
                        {
                            props.history.push(
                            {
                                pathname: '/report/' + props.elem.id, 
                                state: {
                                    planFace: props.planFace, 
                                    planShelfNumber: props.planShelfNumber,
                                    fields
                                }
                            });
                        }}>
                        {props.elem.name}
                    </button>
                </li>
            )}
        </FieldsContext.Consumer>
    )
}

export default withRouter(Product);