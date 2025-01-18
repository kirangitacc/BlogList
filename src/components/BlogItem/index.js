import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {description, publishedDate, title} = blogItem
  return (
    <li className="i-con">
      <div className="h-con">
        <h1 className="h2">{title}</h1>
        <p className="p2">{publishedDate}</p>
      </div>
      <p className="p3">{description}</p>
    </li>
  )
}

export default BlogItem
