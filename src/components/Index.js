import React, { Component } from 'react';
import Header from './Header';
import Login from './Login';

class Index extends Component {
    render() {
        return (
            <div className="index">
                <Header/>
                <Login/>
            </div>
        );
    }
}

export default Index;