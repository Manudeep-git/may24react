import React from 'react';
import { Jumbotron, Container} from 'reactstrap';
import NavBar from '../Navbar/Navbar';

function Contact() {
  return (
    <div className="App">
     <div>
      <Jumbotron fluid>
         <NavBar />
        <Container fluid>
          <h1 className="display-3">My Contact Details</h1>
          <p className="lead">Here are my contact details </p>
          <p className="lead">Email/Slack-Id : manudeepgadde01@gmail.com </p>
          <p className="lead">Phone : 785 226 9952 </p>
          <p className="lead">Availability: I am available from 9AM to 2PM CDT via slack or whatsapp  </p>
        </Container>
      </Jumbotron>
    </div>
    </div>
  );
}

export default Contact;
