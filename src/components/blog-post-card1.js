import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card1.css'

const BlogPostCard1 = (props) => {
  return (
    <div className={`blog-post-card1-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="blog-post-card1-image"
      />
      <div className="blog-post-card1-container">
        <span className="blog-post-card1-text">{props.label}</span>
        <span className="blog-post-card1-text1">{props.title}</span>
        <span className="blog-post-card1-text2">{props.description}</span>
      </div>
    </div>
  )
}

BlogPostCard1.defaultProps = {
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1547841243-eacb14453cd9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxjaXR5fGVufDB8fHx8MTYyNjE4NjYxMg&ixlib=rb-1.2.1&w=1000',
  profile_src:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&ixlib=rb-1.2.1&h=1200',
  label: 'ENTERPRISE',
  description:
    'Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Sed non volutpat turpis.  ​ Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem  ​​ ipsum dolor sit amet, consectetur adipiscing elit.',
  time: '5 min read',
  profile_alt: 'profile',
  author: 'Jon Doe',
  title: 'Lorem ipsum dolor sit amet',
  rootClassName: '',
}

BlogPostCard1.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  profile_src: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
  time: PropTypes.string,
  profile_alt: PropTypes.string,
  author: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default BlogPostCard1
