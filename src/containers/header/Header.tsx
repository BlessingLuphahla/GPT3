import './header.css'
import ai from '../../../public/static/ai.png'

function Header() {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Lets Build Something Cool With OpenAI's GPT3
        </h1>
        <p>AI is the future.Dont get left in the past</p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder='your email address' />
          <button type='button'>GET STARTED</button>
        </div> </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="header image" />
      </div>

    </div>
  )
}

export default Header
