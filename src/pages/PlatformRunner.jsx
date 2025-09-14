const PlatformRunner = () => {
  return (
    <div className="page-container">
      <div className="game-header">
        <div className="container game-header-content">
          <h1>Platform Runner</h1>
          <p>Run, jump, and dash through challenging levels in this premium platformer</p>
          <a href="#play" className="btn-large">Play Now</a>
        </div>
      </div>

      <div className="container">
        <div className="game-content">
          <div className="game-info">
            <h2>About The Game</h2>
            <p>Platform Runner is an exhilarating 2D platform game that tests your reflexes and timing. Navigate through increasingly difficult levels filled with obstacles, enemies, and puzzles.</p>
            
            <p>With stunning visuals and smooth controls, Platform Runner offers a satisfying challenge for both casual and hardcore gamers. Unlock new characters and abilities as you progress through the game!</p>
            
            <div className="screenshot-gallery">
              <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Screenshot 1" />
              <img src="https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80" alt="Screenshot 2" />
              <img src="https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1084&q=80" alt="Screenshot 3" />
              <img src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1157&q=80" alt="Screenshot 4" />
            </div>
            
            <h2>Premium Features</h2>
            <ul>
              <li>50+ challenging levels with increasing difficulty</li>
              <li>10 unique characters to unlock</li>
              <li>Special abilities and power-ups</li>
              <li>Global leaderboards and achievements</li>
              <li>Regular content updates with new levels</li>
              <li>Exclusive gold-themed content</li>
            </ul>

            <div id="play" className="game-embed-container">
              <iframe 
                className="game-embed"
                title="Platform Runner Game"
                src="/games/platform-runner/index.html"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          <div className="game-details">
            <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Platform Runner" style={{width: '100%', borderRadius: '10px', marginBottom: '20px'}} />
            
            <a href="#play" className="btn" style={{display: 'block', textAlign: 'center', marginBottom: '30px'}}>Play Now</a>
            
            <h3>Game Details</h3>
            <div className="detail-item">
              <span>Developer:</span>
              <span>Runner Games</span>
            </div>
            <div className="detail-item">
              <span>Release Date:</span>
              <span>June 15, 2023</span>
            </div>
            <div className="detail-item">
              <span>Genre:</span>
              <span>Platformer</span>
            </div>
            <div className="detail-item">
              <span>Platforms:</span>
              <span>Web, Windows, Mac</span>
            </div>
            <div className="detail-item">
              <span>Rating:</span>
              <span>4.8/5</span>
            </div>
            
            <h3>System Requirements</h3>
            <div className="detail-item">
              <span>OS:</span>
              <span>Windows 10, Mac OS X</span>
            </div>
            <div className="detail-item">
              <span>Memory:</span>
              <span>2 GB RAM</span>
            </div>
            <div className="detail-item">
              <span>Storage:</span>
              <span>500 MB available space</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlatformRunner