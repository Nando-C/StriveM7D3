import { Component } from 'react'
import { Form, FormControl, Button, Navbar, Nav, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';

class SearchBar extends Component {
    state = {  }

    render() { 
        return ( 
            <Navbar bg="light" variant="light">
                <Link to='/'>
                    <Image className='brandLogo' src='https://remotive.io/remotive_website_static_pages/static/src/img/logo_remotive.png' />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Favourites</Nav.Link>
                    </Nav>
                    <Form inline className='ml-auto'>
                        <FormControl type="text" placeholder="Search Jobs" className="mr-sm-2" value={this.props.query} onChange={this.props.inputChange} />
                        <Button variant="outline-info" onClick={() => this.props.fecthJobs(this.props.query)} >Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            // <Form inline className='my-3'>
            //     <FormControl type="text" placeholder="Search Jobs" className="mr-sm-2" value={this.props.query} onChange={this.props.inputChange}/>
            //     <Button variant="outline-info" onClick={() => this.props.fecthJobs(this.props.query)} >Search</Button>
            // </Form>
        );
    }
}
 
export default SearchBar;