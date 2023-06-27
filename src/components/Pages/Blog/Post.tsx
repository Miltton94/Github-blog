import { Link } from 'react-router-dom'

const Post = () => {
  return (
    <Link
      to="post/1"
      className="w-full h-64 rounded-[.625rem] bg-post p-8 transition-all border-2 border-solid border-[transparent] hover:border-label"
    >
      <div className="flex gap-4 mb-[1.25rem]">
        <strong className="flex-1 text-lg text-title line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </strong>

        <span className="min-w-fit text-lg text-span">Há 1 dia</span>
      </div>

      <p className="line-clamp-4 ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat iste
        autem magni maiores quia repellat repellendus vel deserunt doloremque
        et!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat iste
        autem magni maiores quia repellat repellendus vel deserunt doloremque
        et!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat iste
        autem magni maiores quia repellat repellendus vel deserunt doloremque
        et!
      </p>
    </Link>
  )
}

export default Post
