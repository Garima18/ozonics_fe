import React from 'react'
import Header from './../../shared/header/header';

export default function AddImage() {

    fileSelected=(event)=>{
        let file = event.target.files;
        console.warn("dat file:", file);
        
    }
    return (
        <div>
            <Header/>
            <h1>Upload file</h1>
            <input type="file" name="img" onChange={} />

        </div>
    )   
}