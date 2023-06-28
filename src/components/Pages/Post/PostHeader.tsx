import {
  ArrowSquareOut,
  GithubLogo,
  CaretLeft,
  ChatCircle,
  Calendar,
  SpinnerGap,
} from 'phosphor-react'
import ExternalLink from '../../ExternalLink'

import { useNavigate } from 'react-router-dom'
import { IPost } from '../../../pages/Blog'
import { relativeDateFormatter } from '../../../utils/formatter'

interface PostHeaderProps {
  isLoading: boolean
  postData: IPost
}

const PostHeader = ({isLoading, postData}: PostHeaderProps) => {
  const navigate = useNavigate()

  const date = relativeDateFormatter(postData.created_at)

  return (
    <section className="w-full min-h-[10.5rem] bg-profile shadow-lg relative rounded-[.625rem] py-8 px-10 flex flex-col -top-[5.5rem]">
      {isLoading ? (
        <div className="flex-1 flex justify-center items-center">
        <SpinnerGap size={20} className="text-blue animate-spin" />
      </div>
      ) : (
        <><div className="flex items-center justify-between mb-[1.25rem]">
        <button
          onClick={() => navigate(-1)}
          type="button"
          className=" bg-none text-blue text-xs uppercase flex items-center gap-2 font-bold h-[1.1875rem] leading-5"
        >
          <CaretLeft size={20} /> Voltar
        </button>

        <ExternalLink href={postData.html_url} target="_blank">
          github <ArrowSquareOut size={16} weight="bold" />
        </ExternalLink>
      </div>

      <h2 className="text-2xl text-title leading-[130%] font-bold">
        {postData.title}
      </h2>

      <ul className="flex items-start xs:items-center text-span gap-2 sm:gap-4 flex-col xs:flex-row xs:flex-wrap mt-3">
        <li className="flex items-center gap-2 ">
          <GithubLogo size={20} className="text-label" /> {postData.user.login}
        </li>

        <li className="flex items-center gap-2">
          <Calendar size={20} className="text-label" /> {date}
        </li>

        <li className="flex items-center gap-2">
          <ChatCircle size={20} className="text-label" /> {postData.comments} comentários
        </li>
      </ul></>
      )}
    </section>
  )
}

export default PostHeader
