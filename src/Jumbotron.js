import React from 'react'

export default function Jumbotron(props) {
  return (
    <div>
         <div className="jumbotron jumbotron-fluid py-5">
            <div className="container">
                <h1 className="display-3">{props.heading}</h1>
                <p className="lead">{props.helperText}</p>
                <hr className="my-2" />
                <p>{props.moreInfo}</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href={props.actionSrc} role="button">{props.title}</a>
                </p>
            </div>
         </div>
    </div>
  );
}
