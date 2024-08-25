import './blog.css'
import Article from '../../components/article/Article'
import { AiFillBuild, AiFillBank, AiOutlineSearch, AiFillBook, AiFillClockCircle } from 'react-icons/ai'

function Blog() {

  const size = 70
  const color = 'rgb(0, 183, 255)'

  return (
    <div className='gpt3__blog section__padding'>
      <div className=' gpt3__blog-heading'>
        <div className="gradient__text">
          <h1>A lot is happening. We are blogging about it</h1> <br />
        </div>
        <div className="gpt3__blog-container">
          <div className="gpt3__blog-container_groupA">
            <Article date='Sunday July 21 2024' title='GPT3 and Open AI is the future.Lets explore how it is'><AiFillBank size={size * 2} color={color} /></Article>
          </div>
          <div className="gpt3__blog-container_groupB">
            <Article date='Sunday July 21 2024' title='GPT3 and Open AI is the future.Lets explore how it is'><AiOutlineSearch size={size} color={color} /></Article>
            <Article date='Sunday July 21 2024' title='GPT3 and Open AI is the future.Lets explore how it is'><AiFillClockCircle size={size} color={color} /></Article>
            <Article date='Sunday July 21 2024' title='GPT3 and Open AI is the future.Lets explore how it is'><AiFillBuild size={size} color={color} /></Article>
            <Article date='Sunday July 21 2024' title='GPT3 and Open AI is the future.Lets explore how it is'><AiFillBook size={size} color={color} /></Article>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
