import './possibility.css'
import possibility from '../../../public/static/logo.png'

function Possibility() {
  return (
    <div id='possibility' className='gpt3__possibility section__padding'>
      <div className="gpt3__possibility-image">
        <img src={possibility}  alt="possibility image" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access To Get Started</h4>
        <h1 className='gradient__text'>The possibilities are unlimited</h1>
        <p>Only limited by your imagination and creativity!! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem esse neque dolor beatae assumenda dignissimos commodi adipisci veritatis dolores itaque?</p>
        <h4>Request Early Access To Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility
