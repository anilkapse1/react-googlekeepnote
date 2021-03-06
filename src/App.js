import React from 'react';
import Keepnote from './Keepnote';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';

const App=()=>{
    return(
        <>
            <Header/>
            <Keepnote/>
            <Note/>
            <Footer/>
        </>
    )
}

export default App;