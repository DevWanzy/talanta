import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';
import { AiOutlineArrowRight } from 'react-icons/ai';
import './App.css';
import Navbar from './components/Navbar';
import Splash from './components/splash';
import { motion } from 'framer-motion';
import pic from './pic.jpg';
import mlogo from './images/logo2.jpg';

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="social-media-links">
          <a href="https://www.twitter.com" className="twitter">
            <FaTwitter />
          </a>
          <a href="https://www.facebook.com" className="facebook">
            <FaFacebook />
          </a>
          <a href="https://www.youtube.com" className="youtube">
            <FaYoutube />
          </a>
          <a href="https://www.instagram.com" className="instagram">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com" className="linkedin">
            <FaLinkedin />
          </a>
        </div>

        <div className="web-links">
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
          <NavLink to="/careers" activeClassName="active">
            Careers
          </NavLink>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </div>

        <Navbar />

        <motion.div
          className="maincontent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img src={pic} alt="" />
          <div className="tint"></div>
        </motion.div>

        <motion.div
          className="content"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="hometext">
            Under 19 Tournament{' '}
            <i>
              {' '}
              <AiOutlineArrowRight />
            </i>{' '}
            <br />
            <span>Round 1 of 16 </span>
          </div>
          <div className="slide1"></div>
          <div className="slide2"></div>
          <div className="bigText">
            <h1>
              Identifying, Nurturing, &<br></br> Monetizing Talents
            </h1>
          </div>
          <button className="btn">
            Learn more
            <i
              className="arrow"
              style={{
                fontSize: '20px',
                backgroundColor: 'red',
                borderRadius: '50%',
                padding: '5px',
                alignItems: 'center',
                marginLeft: '5px',
              }}
            >
              <AiOutlineArrowRight />
            </i>{' '}
          </button>
        </motion.div>

        <footer className="footer">
          <div className="splashy">
            <Splash />
          </div>
          <div className="mOy">
            <img src={mlogo} alt="" />
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
