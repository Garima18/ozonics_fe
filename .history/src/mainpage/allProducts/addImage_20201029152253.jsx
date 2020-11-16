import React, { useState } from 'react'
import Header from './../../shared/header/header';
import { get, post, baseUrl, refreshCookies } from "../../shared/http-service";
import './allProducts.scss'
import 'font-awesome/css/font-awesome.min.css';

export default function AddImage() {

    const [imageStr, setImageStr] = useState('');

    const fileSelected = async (event) => {
        let file = event.target.files;
        // console.warn("dat file:", file);
        let reader = new FileReader();
        reader.readAsDataURL(file[0]);
        reader.onload = (event) => {
            // console.warn("pic data:", event.target.result);
            const str = event.target.result;
            setImageStr(str);
            console.log("pic dataa:", str);
        }
        const response = await post(baseUrl + "saveImage/", {
            imageStr
        });
        console.log(response);
        if (response.msg === "SUCCESS") alert("File uploaded successfully");
        // if (username === "admin" && password === "admin12") setLoggedIn(true);
        else alert("Invalid USername or password");
    }
    const [img, setImg] = useState('');
    const previewimage=()=>{
        const defaultBtn = document.getElementById("default-btn");
        const customBtn = document.getElementById("custom-btn");
        setImg("img");

        defaultBtn.click();

        defaultBtn.addEventListener("change", function(){
            const file = this.files[0];

        });
    }
    return (
        <div  className="bg-color">
            <Header />
            <div className="products-outer">
                <h1>Mechnical/Packaging/</h1>
            <div className="imageCont">
                <div className="container">
                    <div className="wrapper">
                        <div className="image">
                            <img src={imageStr} alt="" />
                        </div>
                        <div className="content">
                            <div className="icon">
                                <i className="fas fa-cloud-upload-alt"></i>
                            </div>
                            <div className="text">
                                No file chosen
                            </div>
                        </div>

                        <div className="cancel-btn">
                                <i className="fas fa-times"></i>
                                </div>
                            <div className="file-name">
                                File name here  
                            </div>
                    
                    </div>
                    <input type="file" name="img" id="default-btn" hidden />
                    <button id="custom-btn" onClick="document.getElementById('custom-btn').click()" >Choose a file</button>

                </div>

         
                <h1>Upload file</h1>
                <input type="file" name="img" onChange={fileSelected} />
            </div>
            </div>
        </div>
    )
}
