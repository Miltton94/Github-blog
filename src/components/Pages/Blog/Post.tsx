import { Link } from 'react-router-dom'
import { IPost } from '../../../pages/Blog'
import { relativeDateFormatter } from '../../../utils/formatter'

interface PostProps {
  post: IPost
}

const Post = ({ post }: PostProps) => {
  const date = relativeDateFormatter(post.created_at)
  return (
    <Link
      to={`post/${post.number}`}
      className="w-full h-64 rounded-[.625rem] bg-post p-8 transition-all border-2 border-solid border-[transparent] hover:border-label"
    >
      <div className="flex gap-4 mb-[1.25rem]">
        <strong className="flex-1 text-lg text-title line-clamp-2">
          {post.title}
        </strong>

        <span className="min-w-fit text-lg text-span">{date}</span>
      </div>

      <p className="line-clamp-4 ">{post.body}</p>
    </Link>
  )
}

export default Post
