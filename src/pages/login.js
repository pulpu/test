import React, { Component } from 'react';
import LoginApi from '../services/api/loginApi';
import Input from '../components/forms/input';
import Button from '../components/forms/button';

class Login extends Component {
    constructor(props){
        super(props);
        this.apiServices = new LoginApi();
        this.state = {
            username : '',
            password: '',
            loginError: false
        };
    }

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    };
    componentDidMount() {
        console.log('>>>>>', process.env.REACT_APP_GOOGLE_KEY)

    }

    onSubmit = (event) => {
        event.preventDefault();
        //this.apiServices.login(this.state.username, this.state.password)
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="container-md">
                    <div id="wrapper">
                        <div className="form-group">
                            <Input
                                className="col-12"
                                type="text"
                                value={this.state.username}
                                name="username"
                                onChange={this.handleInputChange}
                                placeholder="username"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <Input
                            className="col-12"
                            type="password"
                            value={this.state.password}
                            name="password"
                            onChange={this.handleInputChange}
                            placeholder="password"
                            required
                            />
                        </div>
                        <div className="text-center">
                            <Button type={'primary'}
                                    title={'Login'}
                            />
                            <span className={this.state.loginError ? 'd-block alert alert-danger' : 'd-none' }>Login failed</span>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default Login;