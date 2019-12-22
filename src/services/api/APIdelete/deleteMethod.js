import React from 'react';
import API from '../api';

class DeleteMethod extends React.Component {

    async remove(type,  value, ) {
        return API.delete(`/${type}`, value)
    }
}
export default DeleteMethod;