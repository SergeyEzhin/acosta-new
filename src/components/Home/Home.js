import React from 'react';
import './Home.scss';
import {connect} from 'react-redux';

const Home = () =>
{
  
    return (
        <div className="container pt-4">
            <h1 className="text-center">Домашняя страница</h1>
        </div>
    )
}

// const mapDispatchToProps = dispatch => ({
    
// });

// const mapStateToProps = state => ({
  
// })

export default connect(null, null)(Home);



