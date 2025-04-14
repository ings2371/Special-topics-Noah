import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';

const Footer = props => {
    return (
      <footer className="text-muted bg-dark">
        <div className="container">
          <p className="float-right">
            <Link to="/">Home</Link><br />
            <Link to="/AddCard">Add Card</Link><br />
            <Link to="/About">About</Link><br />

            </p>

          <p>Dear user, <br /> hey there!</p>
          <p>If you think I should include any other <br />
           features to this email me at noahings16@gmail.com</p>
        </div>
      </footer>
    );
}
 
export default Footer;