import React from 'react';
import API from '../api';

class getSpotList extends React.Component {
    constructor(props) {
        super(props);
    }

    async get(type, value, key, description) {
        return API.get(`/${type}`, {
            key: value,
            description
        })
    }
}
export default getSpotList;