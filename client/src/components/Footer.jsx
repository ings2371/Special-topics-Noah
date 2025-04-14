import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';

const Footer = props => {
    return (
<footer className="text-dark bg-info">
        <div className="container">
          <p className="float-right">
            <Link to="/" style={{ color: 'white' }}>Home</Link><br />
            <Link to="/AddCard" style={{ color: 'white' }}>Add Card</Link><br />
            <Link to="/About" style={{ color: 'white' }}>About</Link><br />

            </p>

          <p style={{ color: 'black' }}>Dear user, <br /> hey there!<br/>
          If you think I should include any other <br />
           features to this email me at noahings16@gmail.com</p>
        </div>
      </footer>
    );
}
 
export default Footer;