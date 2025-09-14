const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>GameHub Premium</h3>
            <p>Your exclusive destination for premium gaming experiences.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-discord"></i></a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Explore</h3>
            <ul>
              <li><a href="#">All Games</a></li>
              <li><a href="#">New Releases</a></li>
              <li><a href="#">Premium Exclusives</a></li>
              <li><a href="#">Coming Soon</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Support</h3>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Premium Newsletter</h3>
            <p>Subscribe to get exclusive updates on new games and special offers.</p>
            <form>
              <input type="email" placeholder="Your email address" style={{width: '100%', padding: '10px', margin: '10px 0', borderRadius: '5px', border: 'none', background: 'var(--gray)', color: 'var(--light)'}} />
              <button type="submit" className="btn" style={{width: '100%'}}>Subscribe</button>
            </form>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2023 GameHub Premium. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer