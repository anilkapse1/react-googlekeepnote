import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useStyles from './Keepnotecss';

const Footer=()=>{
    const classes = useStyles();
    const year = new Date().getFullYear();
    return(
        <>
            <footer className={classes.footer}>
                <h1>Copyright @ {year}</h1>
            </footer>
        </>
    )
}
export default Footer;