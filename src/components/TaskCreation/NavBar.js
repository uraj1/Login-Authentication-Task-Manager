import { signOut } from "firebase/auth";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import style from './TaskCreation.module.css'
import { Button } from 'react-bootstrap';
import { auth } from "../../firebase";
import { useNavigate } from 'react-router-dom';
function NavScrollExample() {

  const navigate = useNavigate();

  const handleClick = () =>{
    signOut(auth).then(val=>{
        navigate('/')
    })
}
  return (
    <Navbar expand="lg" style={{boxShadow:"2px 2px 50px rgba(0,0,0,0.3)"}} className="navbar navbar-expand-lg navbar-dark shadow-10-strong">
      <Container fluid>
        <Navbar.Brand href="/">Task Creation App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
          </Nav>
          <Form className="d-flex">
            <p className = {style.buttonName}>
          <Button onClick={handleClick} style={{background: "none", padding:"0", border:"none", outline: "none"}}>SignOut</Button>
        </p>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;