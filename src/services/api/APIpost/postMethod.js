import React from 'react';
import API from '../api';

class PostMethod extends React.Component {

    async post(type,  value, ) {
        return API.post(`/${type}`, value)
    }
}
export default PostMethod;