import React from 'react'


export default function BlogList(props) {

  const blogs = props.blogs
  return (
    <section className='blogs'>
    {blogs.map(blog =>(
      <div className="blog" key={blog.id}>
        <h2 className="title">{blog.title}</h2>
        <div className="content">{blog.content}</div>

      </div>
    ))}
    </section>
  )
}
