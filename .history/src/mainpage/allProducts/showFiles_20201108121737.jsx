import React, { useState } from 'react'
import { get, post, baseUrl, refreshCookies } from "../../shared/http-service";
import axios from 'axios';

export default function ShowFiles() {
   const [buttonClicked, isButtonClicked] = useState(false); 
var parameter = "HR200/Mechnical/Product Drawing/2D Drawing/Main Unit";
cont [dataValue, setDatavalue] = useS
    const fileUploader = (event)=>{
        isButtonClicked=true;
        axios.post("http://127.0.0.1:8080/ozonics/sendAllFiles/", null, {
        params:{
            id:"HR200/Mechnical/Product Drawing/2D Drawing/Main Unit"
        }
        }).then(res=>{
            console.log("full reponse:"+res.data['files']);
            console.log(res.statusText);
        })
    }
    
    return (
        <div>
            <button onClick={fileUploader}>Click</button>
            <div>
                {buttonClicked && <h1></h1>}
            </div>
        </div>
    )
}
