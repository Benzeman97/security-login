import React from 'react';
import {Avatar} from '@material-ui/core';
import {AvatarGroup} from '@material-ui/lab';
import '../css/AvatarProfile.css';

function AvatarProfile(props) {
    return (
        <div className="avatar">
            <AvatarGroup max={3}>
           <a href="https://www.linkedin.com/"> <Avatar variant="square" alt="linkdin" src="/images/avatar/linkdin.png"/> </a>
           <a href="https://myaccount.google.com/"><Avatar variant="square" alt="google" src="/images/avatar/google.png"/></a>
           <a href="https://twitter.com/"><Avatar variant="square" alt="twitter" src="/images/avatar/twitter.png"/></a>
            </AvatarGroup>
        </div>
    );
}

export default AvatarProfile;