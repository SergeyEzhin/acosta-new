import React, { Component } from 'react';
import {connect} from 'react-redux';
import {userLoginFetch} from '../../redux/actions';
import './Auth.scss';

class Auth extends Component {

    state = {
        username: '',
        password: ''
    }

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    
    handleSubmit = event => {
        event.preventDefault();
        this.props.userLoginFetch(this.state);
    }

    render()
    {
        console.log(this.props);
        return (
            <div className="container pt-4">
                <h1 className="text-center">Login</h1>
                <form id="auth" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="login-auth">Логин</label>
                        <input 
                            type="text" 
                            name="username" 
                            placeholder="Введите логин" 
                            id="login-auth"
                            className="form-control"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password-auth">Пароль</label>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Введите пароль" 
                            id="password-auth"      
                            className="form-control"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="submit" 
                            id="submit-auth" 
                            name="submit-auth" 
                            value="Войти" 
                            className="btn btn-primary"
                        />
                    </div>
                </form>
                {this.props.errorAuth
                    ?
                    <div className="alert alert-danger" role="alert">
                        Неверно указаны учетные данные!
                    </div>
                    : null}
            </div>
        )

    }
}

const mapDispatchToProps = dispatch => ({
    userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
});

const mapStateToProps = state => ({
    errorAuth: state.auth.errorAuth
})


  
export default connect(mapStateToProps, mapDispatchToProps)(Auth);