import React from 'react'

const Footer = (props) => {
  const style = {
     fontWeight: 'bold',
     
  }
  return (
    <>
        <div className={`container-fluid bg-${props.mode}`} style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
            <footer className="text-bold" style={style}>
                    <center>All Rights @ Reserved !</center>
            </footer>
        </div>
    </>
  )
}

export default Footer
