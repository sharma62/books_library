import React from 'react'

export default function Navbar(props) {
  return (
          
    <nav className="navbar navbar-expand-lg bg-light " style={{height:"100px"}}>
    <div className="container-fluid">
      <a className="navbar-brand" href='/'>{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">{props.features}</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/">{props.bookStore}</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              option
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another </a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="/"> search</a></li>
            </ul>
          </li>
        </ul>                  
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
   )
}
// define defalut props value 
Navbar.defaultProps = {
  title : 'Book Library',
  features :'Home',
  bookStore :'Bookstore'
}


// define prototype props  
// Navbar.protoType = {
//    title :props.string,
//    features :props.string
// }
