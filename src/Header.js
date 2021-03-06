import React from 'react';
import logo from './images/nasa.png';
import useStyles from './Keepnotecss';

const Header=()=>{
    const classes = useStyles();
    return(
        <>
            <header className={classes.header}>
                <img style={{maxWidth:150}} src={logo}/><h1 style={{color:'#eaad02'}}>Google keepnote</h1>
            </header>
        </>
    )
}
export default Header;