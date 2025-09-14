const LostLands = () => {
  return (
    <div className="page-container">
      <div className="game-header">
        <div className="container game-header-content">
          <h1>Lost Lands</h1>
          <p>Embark on an epic journey through mysterious lands filled with puzzles and adventure</p>
          <a href="#play" className="btn-large">Play Now</a>
        </div>
      </div>

      <div className="container">
        <div className="game-content">
          <div className="game-info">
            <h2>About The Game</h2>
            <p>Lost Lands is a captivating adventure game that transports you to mysterious worlds filled with ancient secrets and challenging puzzles. Explore diverse environments, from lush forests to ancient ruins, as you uncover the story of the Lost Lands.</p>
            
            <p>With its rich narrative and immersive gameplay, Lost Lands offers hours of entertainment for puzzle and adventure game enthusiasts. Meet unique characters, solve intricate puzzles, and restore balance to the Lost Lands!</p>
            
            <div className="screenshot-gallery">
              <img src="https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Screenshot 1" />
              <img src="https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Screenshot 2" />
              <img src="https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1178&q=80" alt="Screenshot 3" />
              <img src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Screenshot 4" />
            </div>
            
            <h2>Premium Features</h2>
            <ul>
              <li>Engaging story with multiple endings</li>
              <li>100+ challenging puzzles</li>
              <li>Beautifully crafted environments</li>
              <li>Original soundtrack</li>
              <li>Regular content updates with new chapters</li>
              <li>Exclusive golden artifacts to collect</li>
            </ul>

            <div id="play" className="game-embed-container">
              <iframe 
                className="game-embed"
                title="Lost Lands Game"
                src="/games/lost-lands/index.html"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          <div className="game-details">
            <img src="https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Lost Lands" style={{width: '100%', borderRadius: '10px', marginBottom: '20px'}} />
            
            <a href="#play" className="btn" style={{display: 'block', textAlign: 'center', marginBottom: '30px'}}>Play Now</a>
            
            <h3>Game Details</h3>
            <div className="detail-item">
              <span>Developer:</span>
              <span>Adventure Studios</span>
            </div>
            <div className="detail-item">
              <span>Release Date:</span>
              <span>March 22, 2023</span>
            </div>
            <div className="detail-item">
              <span>Genre:</span>
              <span>Adventure, Puzzle</span>
            </div>
            <div className="detail-item">
              <span>Platforms:</span>
              <span>Web, Windows, Mac, iOS, Android</span>
            </div>
            <div className="detail-item">
              <span>Rating:</span>
              <span>4.9/5</span>
            </div>
            
            <h3>System Requirements</h3>
            <div className="detail-item">
              <span>OS:</span>
              <span>Windows 10, Mac OS X, iOS 12, Android 8.0</span>
            </div>
            <div className="detail-item">
              <span>Memory:</span>
              <span>4 GB RAM</span>
            </div>
            <div className="detail-item">
              <span>Storage:</span>
              <span>1 GB available space</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LostLands