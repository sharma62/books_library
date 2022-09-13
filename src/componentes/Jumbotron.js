import React from 'react'
import DigitalClock from './DigitalClock';

export default function Jumbotron(props) {
  return (
    <>
         <div className={`jumbotron jumbotron-fluid py-2 bg-${props.mode}`} style={{ color:props.mode==='dark' ? 'white':'#042743'}}>
            <div className="container">
              <div className="row">
                <div className="col offset-7">
                   <DigitalClock />
                </div>
              </div>
                <h1 className="display-3"><strong>{props.heading}</strong></h1>
                <p className="lead">{props.helperText}</p>
                <hr className="my-2" />
                 <p className="lead py-2">
                    <a className="btn btn-primary btn-lg " href={props.actionSrc} role="button">{props.title}</a>
                </p>
            </div>
         </div>
    </>
  );
}
