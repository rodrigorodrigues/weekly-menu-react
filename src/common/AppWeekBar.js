/**
 * Created by eliasmj on 24/01/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import MenuIconComponent from '../MenuIconComponent';
import { Toolbar, Typography } from '@material-ui/core';

export const AppWeekBar = (props) => {
    return (
        <div >
            <AppBar position="static">
                <Toolbar>
                    <MenuIconComponent></MenuIconComponent>
                    <Typography variant="title" color="inherit">
                        {props.title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

AppWeekBar.propTypes = {
    title: PropTypes.string.isRequired,
};

export default AppWeekBar;

