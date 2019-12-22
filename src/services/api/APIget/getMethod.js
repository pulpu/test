import React from 'react';
import API from '../api';

class GetMethod extends React.Component {

    async get(type, value, key, description) {
        return API.get(`/${type}`, {
            key: value,
        })
    }
}
export default GetMethod;