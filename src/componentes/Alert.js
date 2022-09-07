import React from 'react'

function Alert(props) {
    return (
        <>
            <div className="container-fluid ">
                <div class="alert alert-success" role="alert">
                  <strong>{props.type}</strong> : <span>{props.msg}</span>
                </div>
            </div>
        </>
    )
}

export default Alert;