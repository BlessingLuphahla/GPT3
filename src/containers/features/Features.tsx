import './features.css'
import Feature from '../../components/feature/Feature'

function Features() {

  const FeaturesData = [
    {
      title: 'Molestias obcaecati',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias obcaecati delectus numquam facilis odit eum adipisci? Molestiae ea voluptatem quod.'
    },
    {
      title: 'Lorem ipsum ',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias obcaecati delectus numquam facilis odit eum adipisci? Molestiae ea voluptatem quod.'
    },
    {
      title: 'Molestiae ea',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias obcaecati delectus numquam facilis odit eum adipisci? Molestiae ea voluptatem quod.'
    },
    {
      title: 'Delectus num',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias obcaecati delectus numquam facilis odit eum adipisci? Molestiae ea voluptatem quod.'
    }
  ]

  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">The future is Now and You Just Need To Realize It.Step Into the Future Today & Make It Happen</h1>
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__features-container">
        {FeaturesData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>

    </div>
  )
}

export default Features
