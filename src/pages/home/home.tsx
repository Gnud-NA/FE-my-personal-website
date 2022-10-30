import React from "react";
import { Grid, MenuList, MenuItem } from "@mui/material";
import {
    Link
  } from 'react-router-dom';

import './home.css';

export class Home extends React.Component {
    render() {
        return (
            <Grid container spacing={0} sx={{height: '100%'}}>
                <Grid item xs={2} sx={{height: '100%'}}>
                    <div className="side-bar">
                        <h3>Nguyen Anh Dung</h3>
                        <h4>Backend Developer</h4>
                        <MenuList>
                            <MenuItem>
                                <Link to="/">Home</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/now">Now</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/project">Project</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/about">About</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/contact">Contact</Link>
                            </MenuItem>
                        </MenuList>
                    </div>
                </Grid>
                <Grid item xs={10}>
                    <div className="content-wrapper">
                        <h3>Hi there,</h3>
                        <p>I'm web developer</p>
                    </div>
                </Grid>
            </Grid>
        )
    }
}