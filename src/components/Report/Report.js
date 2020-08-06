import React from 'react';
// import {FieldsContext} from '../FieldsContext/FieldsContext';

export const Report = (props) => 
{
    console.log(props);
    return (
        // <FieldsContext.Consumer>
        //     {({fields}) => {
        //         console.log(fields);
        //         return (
                    <div className="container pt-4">
                        <h1 className="text-center">Send report</h1>
                        <p>Plan face: {props.location.planFace ? props.location.planFace : 'Не указан'}</p>
                        <p>Plan shelf number: {props.location.planShelfNumber ? props.location.planShelfNumber : 'Не указан'}</p>
                        <form id="report">
                            {
                            
                            }
                            <button type="submit" className="btn btn-primary">Отправить</button>
                        </form>
                    </div>
        //         )
        //     }}
        // </FieldsContext.Consumer>
    )
}