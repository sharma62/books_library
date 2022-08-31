import React from 'react'

const Accordion = (props) => {
   function clickHandler(){
    console.log('clickHandler');

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
                                <div className="accordion-body">

                                    <div className="mb-3">
                                        <label htmlfor="exampleFormControlTextarea1" className="form-label">Enter Text </label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <input type="button" value="Uppercase" className=" btn btn-primary" onClick={clickHandler} />
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
