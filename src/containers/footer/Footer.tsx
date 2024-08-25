import './footer.css'
import { FaRobot } from 'react-icons/fa'

function Footer() {
  return (
    <div className='gpt3__footer section__padding'>
      <div className="gpt3__footer-heading">
        <h1 className='gradient__text'>Do You Want To Into The Future Before Others?</h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <FaRobot size={40} color='white'></FaRobot>
          <p>REDD AXE .ALL RIGHTS RESERVED !!!</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contacts</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Contacts</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get In Touch</h4>
          <p>Bulawayo, Zimbabwe</p>
          <p>+263 778 879 3302</p>
          <p>Contact</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>&copy; {new Date().getFullYear()} REDD AXE.All rights Reserved </p>
      </div>
    </div>
  )
}

export default Footer
