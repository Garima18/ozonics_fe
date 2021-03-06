import React, { useState } from 'react'
import { post, baseUrl } from '../../shared/http-service';
import { Redirect } from 'react-router-dom';

export default function DeletePopup({ username }) {
    const [loggedIn, setLoggedIn] = useState(false);
    var deleted = false;
    const deleteUser = async () => {
        const response = await post(baseUrl + "deleteUser/", {
            username: username
        });
        console.log(response);
        if (response.msg === "SUCCESS") {
            deleted = true;
            setIsDeleted(true);
            alert("User deleted successfully");
            console.log("delete" + IsDeleted);

        }
    }
    return (
        <div>
            
            {IsDeleted && <Redirect to="/showUsers" />}

            <div className="delete-popup">
                <div className="delete-popup-inner">
                <h3>Deleted: {IsDeleted}</h3>
                    <p className="delete-p"> Deleting {username}, please confirm!</p>
                   
                    <div className="popup-button">
                        <a href="/showUsers"><button className="delete-button cancel" >Cancel</button></a>
                        <button className="delete-button confirm" onClick={deleteUser}>Confirm</button>
                    </div>
                </div>


            </div>
        </div>
    )

}
