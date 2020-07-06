import React, { Component } from 'react';
import Header from './Header';
import Login from './Login';
import AvatarProfile from './AvatarProfile';

class Index extends Component {
    render() {
        return (
            <div className="index">
                <Header/>
                <AvatarProfile/>
                <Login/>
            </div>
        );
    }
}

export default Index;