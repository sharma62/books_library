import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {

  const enableMode = () => {
    if (props.mode === 'light') {
      props.toggleMode('dark');

    }
    if (props.mode === 'dark') {
      props.toggleMode('light');

    }
  }


  return (

    <nav className={`navbar navbar-expand-lg bg-${props.mode} sticky`} style={{ color: props.mode === 'dark' ? 'white' : '#042743', height: "80px" }}>

      <div className="container-fluid">
 
        <Link className={`navbar-brand `} to='/' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}> <img src="https://png.pngtree.com/template/20190316/ourmid/pngtree-books-logo-image_79143.jpg" width={'80px'} style={{ borderRadius: '50px' }} alt={`${(props.title)}`} /></Link>
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link active`} to="/" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} aria-current="page" >{props.features}</Link>
            </li>
            <li className="nav-item active ">
              <Link className={`nav-link  `} to="/Store" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>{props.bookStore}</Link>
            </li>
            <li className="nav-item active ">
              <Link className={`nav-link  `} to="/profile" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>Profie</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2 mt-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
        <div className="custom-control custom-switch mx-3">
          <button type='submit' className="btn btn-dark" onClick={enableMode}
            style={{
              backgroundColor: props.mode === 'dark' ? 'white' : '',
              color: props.mode === 'dark' ? 'black' : ''
            }}>

            {(props.mode).toUpperCase()}

          </button>
        </div>
      </div>
    </nav>
  )
}
// define defalut props value 
Navbar.defaultProps = {
  title: 'Book Library',
  features: 'Home',
  bookStore: 'Bookstore'
}


// define prototype props
// Navbar.protoType = {
//    title :props.string,
//    features :props.string
// }
