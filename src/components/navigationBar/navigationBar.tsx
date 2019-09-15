import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Typography } from '@material-ui/core';
import './navigationBar.scss';

export class NavigationBar extends React.PureComponent {
    render() {
        return (
            <div className='navigation_bar'>
                <AppBar position='static'>
                    <Typography variant='h6'>
                    Unsplash API demo
                    </Typography>
                </AppBar>
            </div>
        )
    }
}