import BlogCard from "../Cards/BlogCard/BlogCard"
import blogListStyle from './blogListStyle.module.scss'

async function BlogList({ blogsData, query }) {
  
  const filteredBlogsData = Array.isArray(blogsData) ? 
  blogsData.filter((blog)=>{
    return blog.title.toLowerCase().includes(query.toLowerCase())
  }) : [];

  return (
    <div className={blogListStyle.blogContainer}>
      {Array.isArray(blogsData) && blogsData.length === 0 && (
        <p>Bu axtarışa uyğun məqalə tapılmadı</p>
      )}

    {
      Array.isArray(blogsData) && filteredBlogsData.map((blog)=>{
        return (
          <BlogCard 
          key={blog.id}
          img={blog.image} 
          title={`${blog.name} `}  
          desc={blog.description}
          link={`blogs/${blog.id}`}
          alt={`Image of ${blog.name} blog`} />
        )
      })
    }
</div>
  )
}

export default BlogList
