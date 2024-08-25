import './whatgpt3.css'
import Feature from '../../components/feature/Feature'

function whatGPT3() {
  return (
    <div className='gpt3__whatgpt3 section__margin gradient__bg' id='wgpt3'>
      <div className="gpt3__whatgpt3-feature">
        <Feature title='What is GPT3' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. A adipisci, sunt possimus itaque et similique? Ipsum quibusdam saepe pariatur eius est fugit vero expedita neque.'></Feature>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className='gradient__text'>the possibilities are beyond your imagination</h1>
        <p>Explore the library</p>
      </div>


      <div className="gpt3__whatgpt3-container">
        <Feature title='ChatBots' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. A adipisci, sunt possimus itaque et similique? Ipsum quibusdam saepe pariatur eius est fugit vero expedita neque.'></Feature>
        <Feature title='Knowledgebase' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. A adipisci, sunt possimus itaque et similique? Ipsum quibusdam saepe pariatur eius est fugit vero expedita neque.'></Feature>
        <Feature title='Education' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. A adipisci, sunt possimus itaque et similique? Ipsum quibusdam saepe pariatur eius est fugit vero expedita neque.'></Feature>
      </div>

    </div>
  )
}

export default whatGPT3
