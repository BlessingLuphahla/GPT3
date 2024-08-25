import './feature.css'

interface FeatureProps {
  title: string,
  text: string
}

function Feature({ title, text }: FeatureProps) {

  return (
    <div className='.gpt3__features-container__feature'>
      <div className="gpt3__features-container__feature-title">
        <h1>{title}</h1>
      </div>
      <div className="gpt3__features-container__feature-text">
        <p> {text}</p>
      </div>
    </div>
  )
}

export default Feature
