import React from 'react'

export default function showFile() {

    const fileUploader = (event)=>{
        isButtonClicked(true);
        axios.post("http://127.0.0.1:8080/ozonics/sendAllFiles/", null, {
        params:{
            id:"HR200/Mechnical/Product Drawing/2D Drawing/Main Unit"
        }
        }).then(res=>{
            console.log("full reponse:"+res.data['files']);
            setDatavalue(res.data['files']);
            console.log(res.statusText);
        })
    }
    return (
        <div>
            
        </div>
    )
}
