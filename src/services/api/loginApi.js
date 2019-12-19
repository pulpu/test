import React from 'react';
import API from './api';

class LoginApi extends React.Component {
    constructor(props) {
        super(props);
    }

    async login(username, password) {
        API.post('/login', {
            username: username,
            password: password
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}
export default LoginApi;