import GameCard from '../components/GameCard'

const Home = () => {
  const games = [
    {
      title: 'Platform Runner',
      description: 'An exclusive 2D platformer with challenging levels and stunning visuals for premium gamers.',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      path: '/platform-runner'
    },
    {
      title: 'Lost Lands',
      description: 'Embark on an epic adventure through mysterious lands filled with puzzles and hidden treasures.',
      image: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      path: '/lost-lands'
    },
    {
      title: 'Space Adventure',
      description: 'Explore the cosmos in this action-packed space exploration game. Coming soon to Premium members.',
      image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      path: '#'
    }
  ]

  return (
    <div className="page-container">
      <section className="hero">
        <div className="container hero-content">
          <h1>Elite Gaming Experience</h1>
          <p>Discover premium games in an exclusive environment designed for discerning gamers who appreciate quality and style.</p>
          <a href="#games" className="btn-large">Explore Premium Games</a>
        </div>
      </section>

      <section className="container" id="games">
        <div className="gold-separator"></div>
        <h2 style={{textAlign: 'center', marginBottom: '40px', fontSize: '2.5rem', color: 'var(--gold)'}}>Featured Games</h2>
        <div className="games-grid">
          {games.map((game, index) => (
            <GameCard key={index} game={game} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home