import React from 'react'

export default function showCommentPopup({filename, comments}) {
    return (
        <div>
              <div className="delete-popup">
            <div className="delete-popup-inner">
                <p className="delete-p">  {filename}</p>
              
        <p>comments}</p>
                <div className="popup-button">
                    <a href={`/addImage/${id}`}><button className="delete-button cancel"  >Cancel</button></a>
                    <button className="delete-button confirm" onClick={deleteFile}>Confirm</button>
                </div>
            </div>
            </div>
        </div>
    )
}
