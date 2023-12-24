import react from 'react';
import { Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <div>
        <Navbar className="bg-body-secondary justify-content-between" style={{position: 'fixed', width: '100%', zIndex: 2}}>
            <Navbar.Brand style={{color: 'blue', paddingLeft: "8rem", fontFamily: 'sans-serif', fontWeight: 'bold'}}>DocScheduler</Navbar.Brand>
            <Button variant="outline-info" style={{marginRight: "8rem"}}>Log In</Button>
        </Navbar>
    </div>
  );
}

export default NavBar;