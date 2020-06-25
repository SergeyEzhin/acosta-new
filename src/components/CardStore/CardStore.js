import React from "react";
import './CardStore.scss';
import { push } from 'connected-react-router';
import {connect, useDispatch} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { toProjects } from "../../redux/actions";
import { Link } from 'react-router-dom';

const CardStore = (props) => {

    // const dispatch = useDispatch();
    console.log(props);

    return (
        <div className="col-md-4 pt-3 pb-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.elem.net}</h5>
                    <p className="card-text">Город: {props.elem.city}</p>
                    <p className="card-text">Адрес: {props.elem.adds}</p>
                    {/* <Link to={'/projects/' + props.elem.id}>
                        Перейти к проектам
                    </Link> */}
                    <button type="button" 
                        className="btn btn-primary" 
                        onClick={() => 
                        {
                            props.history.push(
                            {
                                pathname: '/projects/' + props.elem.id, 
                                state: props.elem.projects
                            });
                            // dispatch(push('/projects/' + props.elem.id));
                            // props.toProjects('/projects/' + props.elem.id);
                            
                        }}>
                        Перейти к проектам
                    </button>
                </div>
            </div>
        </div>
    )
}

// const mapDispatchToProps = dispatch => ({
//     toProjects: (path) => dispatch(toProjects(path))
// });

// const mapStateToProps = state => ({
//     data: state.data.data
// });

// export default connect(null, mapDispatchToProps)(CardStore);
export default withRouter(CardStore);