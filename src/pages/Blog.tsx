import Post from '../components/Pages/Blog/Post'
import Profile from '../components/Pages/Blog/Profile'
import SearchInput from '../components/Pages/Blog/SearchInput'

const Blog = () => {
  return (
    <>
      <Profile />
      <SearchInput />

      <section className="w-full gap-8 mb-56 grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </section>
    </>
  )
}

export default Blog
