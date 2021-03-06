import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import useStyles from './Keepnotecss';

const Keepnote=()=>{

    const [note, setnote]=useState({
        title:'',
        content:'',
    });

    const inputEvent=(e)=>{
        const {name,value}=e.target;

        setnote((oldvalue)=>{
            return  {
                ...oldvalue,
                [name]:value
            }
        })
    }

    const addEvent=()=>{
        
    }


    const classes = useStyles();
    return(
        <div className={classes.container}>
            <form className={classes.formSection}>
                <input 
                    type="text" 
                    placeholder="title"
                    name="title"
                    value={note.title}                   
                    onChange={inputEvent} 
                    autoComplete="off"/>
                
                <textarea 
                    rows="" 
                    column=""
                    name="content" 
                    value={note.content}
                    onChange={inputEvent} 
                    placeholder="type a note"
                    >
                </textarea>


                <Button onClick={addEvent}>
                    <AddCircleIcon/>
                </Button>
            </form> 
        </div>
    )
}
export default Keepnote;