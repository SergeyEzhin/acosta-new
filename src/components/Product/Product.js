import React from 'react';
import './Product.scss';
import {withRouter} from 'react-router-dom';

const Product = (props) => {

    console.log(props)

    return (
        <li className="list-group-item p-0">
            <button 
                className="m-0 button-report" 
                onClick={() => 
                {
                    props.history.push(
                    {
                        pathname: '/report/' + props.elem.id, 
                        planFace: props.planFace, 
                        planShelfNumber: props.planShelfNumber
                    });
                }}>
                {props.elem.name}
            </button>
        </li>
    )
}

export default withRouter(Product);