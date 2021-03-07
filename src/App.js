import React, { useState } from 'react';
import Keepnote from './Keepnote';
import Header from './Header';
import useStyles from './Keepnotecss';
import Note from './Note';

const App=()=>{

    const [addItem, setItem] = useState([]);

    const executeNote=(data)=>{
       setItem((oldvalue)=>{
        return [...oldvalue,data];
       })
    }

    const onDelete=(e)=>{
        setItem((oldvalue)=>{
            return(
                oldvalue.filter((currdata,indx)=>{
                    return indx!=e;
                })
            )
        })
    }   

    const classes = useStyles();
    return(
        <>
            <Header/>
            <Keepnote callEvent={executeNote}/>
            <div className={classes.gridContainer}>
                {addItem.map((value,index)=>{  
            
                        return(
                            <Note 
                                key={index}
                                id={index} 
                                title={value.title} 
                                content={value.content}
                                deleteItem={onDelete}   
                                />
                        )
                })}
            </div>  
        </>
    )
}

export default App;