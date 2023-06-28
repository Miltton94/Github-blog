import { useCallback, useEffect, useState } from 'react'
import Post from '../components/Pages/Blog/Post'
import Profile from '../components/Pages/Blog/Profile'
import SearchInput from '../components/Pages/Blog/SearchInput'
import { api } from '../lib/axios'
import { SpinnerGap } from 'phosphor-react'

export interface IPost {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}
const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

const Blog = () => {
  const [posts, setPosts] = useState<IPost[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getPosts = useCallback(
    async (query = '') => {
      try {
        setIsLoading(true)
        const response = await api.get(
          `/search/issues?q=${query}%20label:published%20repo:${username}/${repoName}`,
        )

        setPosts(response.data.items)
      } finally {
        setIsLoading(false)
      }
    },
    [posts],
  )

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      <Profile />
      <SearchInput getPosts={getPosts} postLength={posts.length} />

      {isLoading ? (
        <div className="flex justify-center items-center">
          <SpinnerGap size={20} className="text-blue animate-spin" />
        </div>
      ) : (
        <section className="w-full gap-8 mb-56 grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]">
          {posts?.map((post) => {
            return <Post key={post.number} post={post} />
          })}
        </section>
      )}
    </>
  )
}

export default Blog
