/* eslint-disable no-unused-vars */
// import React from 'react'
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';

// const Navbars = () => {
//   return (
//     <div>
//     <Navbar bg="dark" variant="dark" id='navbrand'>
//       <Navbar.Brand>
//       <Link to='/'>Home</Link>
//       </Navbar.Brand>
//       <Nav className="me-auto navlinks">
//         <Link to='/about'>About</Link>
//         <Link to='/services'>Services</Link>
//         <Link to='/contact'>Contact</Link>
//       </Nav>
//   </Navbar>
//     </div>
//   )
// }

// export default Navbars


import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navbars = () => {
  return (
    <div>
      <Navbar className='navLinks'>
         <Link to='/'>Home</Link>
         <Link to='/about'>About</Link>
         <Link to='/services'>Services</Link>
         <Link to='/contact'>Contact</Link>
      </Navbar>
    </div>
  )
}

export default Navbars
