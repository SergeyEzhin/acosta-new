import React from 'react';
import './Home.scss';
import {connect} from 'react-redux';

export const Home = () =>
{
  
    return (
        <div className="container pt-4">
            <h1 className="text-center">Домашняя страница</h1>
        </div>
    )
}

// const mapDispatchToProps = dispatch => ({
//     userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
// });

// const mapStateToProps = state => ({
//     errorAuth: state.auth.errorAuth
// })



