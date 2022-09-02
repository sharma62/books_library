import React from 'react'
import { useState } from 'react';

const Accordion = (props) => {
    const [currText, setText] = useState('');

    function clickToUpper() {
        setText(currText.toUpperCase());
    }
    function clickToLower() {
        setText(currText.toLowerCase());
    }
    function changeHandler(event) {
        setText(event.target.value);
    }
     return (
        <>
            <div className="container">
                <div className="row">
                    <div className="accordion my-4" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    {props.title}
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <label htmlFor="reading time" className='p-3'> Read Time : {0.008 * currText.split(" ").length} Min</label>
                                <div className="accordion-body">

                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Text </label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" value={currText} onChange={changeHandler} placeholder="Enter Text "></textarea>
                                    </div>
                                    <input type="button" value="Upper case" className="mx-1 btn btn-primary" onClick={clickToUpper} />
                                    <input type="button" value="Lower case" className="mx-1 btn btn-primary" onClick={clickToLower} />
                                     <p className='my-4'> Total : {currText.split(" ").length} words  and  {currText.length} Characters</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Accordion
