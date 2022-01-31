import { Nav, Navbar, Container } from "react-bootstrap";

const Header = () => {
   return (
      <Navbar bg="light" expand="lg">
         <Container>
            <Navbar.Brand href="#home" className="logo">
               BLOG
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="ms-auto">
                  <Nav.Link href="/home">Home</Nav.Link>
                  <Nav.Link href="/new-blog" className="ms-3 new">
                     New Blog
                  </Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
};

export default Header;
