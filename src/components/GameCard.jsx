import { Link } from 'react-router-dom'

const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <div className="premium-badge">PREMIUM</div>
      <img src={game.image} alt={game.title} />
      <div className="game-card-content">
        <h3>{game.title}</h3>
        <p>{game.description}</p>
        <Link to={game.path} className="btn">Play Now</Link>
      </div>
    </div>
  )
}

export default GameCard