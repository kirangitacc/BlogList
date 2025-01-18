import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogList} = props
  return (
    <div className="list-con">
      {blogList.map(i => (
        <BlogItem blogItem={i} key={i.id} />
      ))}
    </div>
  )
}

export default BlogList
