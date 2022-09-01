import React from 'react'

export default function Item_card(props) {
    return (
        <>
        <div className="col-3">
            <div className="card border" style={{width:"200px" }}>
                <img src={props.imgSrc} className="card-img-top" alt="..."  style={{width:"100%", height:"90%"}} />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.about}.</p>
                        <a href="#" className="btn btn-primary">Read</a>
                        <a href="#" className="btn btn-primary mx-3">Buy</a>
                    </div>
            </div>
        </div>

        </>
    )
}
