import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import useStyles from './Keepnotecss';
import TextField from '@material-ui/core/TextField';

const Keepnote=(props)=>{

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
        if(note.title=="" || note.content=="" ){
            return false;
        }
        else{
            props.callEvent(note);
            setnote({
                title:'',
                content:'',
            })
    
        }
    }


    const classes = useStyles();
    return(
        <div className={classes.container}>
        
            <form  className={classes.formSection} noValidate autoComplete="off">
                <TextField 
                    m={2}
                    id="standard-basic" 
                    label="title" 
                    name="title" 
                    value={note.title} 
                    onChange={inputEvent} />

                 <TextField
                    id="outlined-multiline-static"
                    label="type a note" 
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                    variant="outlined"
                    name="content"
                    value={note.content} 
                    onChange={inputEvent}
                    defaultValue="Default Value"
                    />    
                
                <Button onClick={addEvent}>
                    <AddCircleIcon/>
                </Button>
            </form> 

          
        
        </div>
    )
}
export default Keepnote;