import React from 'react';
import './Home.scss';
import {connect} from 'react-redux';
import { userLogout, getData } from '../../redux/actions';
import {DayWeek} from '../DayWeek/DayWeek';

class Home extends React.Component
{
    componentDidMount()
    {
        this.props.getData();
    }

    render()
    {
        console.log(this.props.data);
        return (
            <div className="container pt-4">
                <h1 className="text-center">Home Page</h1>
                <button type="button" className="btn btn-primary" onClick={this.props.userLogout}>Выйти</button>
                <div className="row pt-3">
                    {/* {
                      
                        data.map((elem, index) => {
                            if(elem.outlets.length === 0)
                            {
                                return null;
                            }
                            return (
                                <DayWeek elem={elem} index={index} key={elem.id} />
                            )
                        })
                        
                    } */}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    userLogout: () => dispatch(userLogout()),
    getData: () => dispatch(getData())
});

const mapStateToProps = state => ({
    data: state.data.data
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);



