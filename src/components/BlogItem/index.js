// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogDetails

  return (
    <Link to={`/blogs/${id}`} className="blog-item-link">
      <div className="item-container">
        <img src={imageUrl} className="item-image" alt={`item${id}`} />

        <div className="item-info">
          <p className="item-topic">{topic}</p>

          <h2 className="item-title">{title}</h2>
          <div className="author-info">
            <img className="avatar" src={avatarUrl} alt={`avatar${id}`} />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
