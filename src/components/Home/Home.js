import React from 'react';
import './Home.scss';
import {connect} from 'react-redux';
import { userLogout, getProfile } from '../../redux/actions';
import {DayWeek} from '../DayWeek/DayWeek';
import {Loader} from '../../ui/Loader/Loader';
// import BreadcrumbsWrapper from '../../ui/Breadcrumbs/Breadcrumbs';

class Home extends React.PureComponent
{
    componentDidMount = () => 
    {
        this.props.getProfile();
    }

    render()
    {
        if(this.props.data)
        {
            console.log(this.props.data);

            return (
                <div className="main container pt-4">
                    <h1 className="text-center">Home Page</h1>
                    <button type="button" className="btn btn-primary" onClick={this.props.userLogout}>Выйти</button>
                    <div className="pt-3 content">
                        {
                            (this.props.data).map((elem, index) => {
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
    getProfile: () => dispatch(getProfile())
});

const mapStateToProps = state => ({
    data: state.data.data
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);



