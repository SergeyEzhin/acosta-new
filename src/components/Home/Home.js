import React from 'react';
import './Home.scss';
import {connect} from 'react-redux';
import { userLogout, getData } from '../../redux/actions';
import {DayWeek} from '../DayWeek/DayWeek';
import {Loader} from '../../ui/Loader/Loader';

class Home extends React.Component
{
    render()
    {
        console.log(this.props.data);
        let data = this.props.data;

        if(data)
        {
            return (
                <div className="main container pt-4">
                    <h1 className="text-center">Home Page</h1>
                    <button type="button" className="btn btn-primary" onClick={this.props.userLogout}>Выйти</button>
                    <div className="pt-3 content">
                        {
                            data.map((elem, index) => {
                                if(elem.outlets.length === 0)
                                {
                                    return null;
                                }
                                return (
                                    <DayWeek elem={elem} index={index} key={elem.id} />
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
}

const mapDispatchToProps = dispatch => ({
    userLogout: () => dispatch(userLogout()),
    getData: () => dispatch(getData())
});

const mapStateToProps = state => ({
    data: state.data.data
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);



