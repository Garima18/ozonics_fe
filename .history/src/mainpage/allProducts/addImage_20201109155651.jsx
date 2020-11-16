import React, { useState } from 'react'
import Header from './../../shared/header/header';
import { get, post, baseUrl, refreshCookies } from "../../shared/http-service";
import './allProducts.scss'
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function AddImage() {
    let {id} = useParams();
    console.log("ext:"+id);
    
    var id_arr = id.split("_");
    var productSelectted = id_arr[0];
    var category = id_arr[1];
    var level1 = id_arr[2];
    var level2 = id_arr[3];
    // var level3 = id_arr[4];
    var parameter = productSelectted+"/"+category+"/"+level1+"/"+level2;
    // var parameter ="HR344"
        const [imageStr, setImageStr] = useState('');
    var str = [];
    let fname = '';
    const fileSelected = async (event) => {
        let files = event.target.files;
        fname = event.target.files[0].name;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (event) => {
            str.push(event.target.result);
            // str = (event.target.result);
            setImageStr(str[0]);
            console.log("pic dataa:", str[0]);
            console.log("file name:" + fname);
            handleLogInClick();
        }
    }

    const handleLogInClick = async () => {
        const apiresponse = await post(baseUrl + "saveImage/", {
            imageStr: str[0],
            fileName: fname
        });
        console.log(apiresponse);
        if (apiresponse.msg === "SUCCESS") alert("File uploaded successfully");
        else alert("Invalid USername or password");
    };

    const fileUploader = (event)=>{
        let selectedFile= event.target.files[0];
        const data = new FormData();

        data.append('file', selectedFile);
        axios.post("http://127.0.0.1:8080/ozonics/saveImage/", data, {
        params:{
            id:{parameter}
        }
        }).then(res=>{
            console.log(res.statusText);
        })
    }

    return (
        <div className="bg-color">
            <Header />
            <div className="products-outer">
                <p></p>
                <h6>{parameter}</h6>
                <div className="imageCont">
                    <div className="container">
                        <div className="wrapper">
                           
                          
                            <div className="cancel-btn">
                                <i className="fas fa-times"></i>
                            </div>
                            <div className="file-name">
                                File name here
                            </div>

                        </div>
                        {/* <input type="file" name="img" id="default-btn" hidden />
                    <button id="custom-btn" onPress="document.getElementById('custom-btn').click()" >Choose a file</button> */}

                        <h5>Upload file</h5>
                        <input type="file" id="file_name" name="img" onChange={fileUploader} multiple />
                    </div>



                </div>
            </div>
        </div>
    )
}
