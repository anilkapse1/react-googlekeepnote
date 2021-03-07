import React, { useState } from 'react';
import Keepnote from './Keepnote';
import Header from './Header';

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

    return(
        <>
            <Header/>
            <Keepnote callEvent={executeNote}/>
          
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
        </>
    )
}

export default App;