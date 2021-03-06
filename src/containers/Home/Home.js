import React from 'react';
import './Home.scss';
import {connect} from 'react-redux';
import { userLogout, getProfile } from '../../redux/actions';
import {DayWeek} from '../../components/DayWeek/DayWeek';
import {Loader} from '../../ui/Loader/Loader';

class Home extends React.Component
{
    componentDidMount = () => 
    {
        this.props.getProfile();
    }

    render()
    {
        let {data} = this.props;

        if(data.length)
        {
            console.log(data);

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
            // console.log(data);
            return <Loader />
        }
    }
}

const mapDispatchToProps = dispatch => ({
    userLogout: () => dispatch(userLogout()),
    getProfile: () => dispatch(getProfile())
});

const mapStateToProps = state => ({
    data: state.data.data
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);



