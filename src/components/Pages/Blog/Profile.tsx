import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'
import ExternalLink from '../../ExternalLink'

const Profile = () => {
  return (
    <section className="w-full min-h-[13.25rem] bg-profile shadow-lg gap-8 relative rounded-[.625rem] py-8 px-10 flex flex-col sm:flex-row -top-[5.5rem]">
      <img
        src="https://github.com/miltton94.png"
        alt=""
        className="sm:w-[9.25rem] sm:h-[9.25rem] w-[15rem] h-[15rem] rounded-lg object-cover place-self-center"
      />

      <div className="flex-1 flex flex-col mb-2">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-title leading-[130%]">
            Milton
          </h1>

          <ExternalLink>
            github <ArrowSquareOut size={16} weight="bold" />
          </ExternalLink>
        </header>

        <p className="line-clamp-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
          tenetur officia maiores pariatur laudantium nobis aliquam saepe eius
          repudiandae velit.
        </p>

        <ul className="flex items-start xs:items-center sm:gap-6 gap-4 flex-col xs:flex-row xs:flex-wrap mt-2 sm:mt-auto">
          <li className="flex items-center gap-2">
            <GithubLogo size={20} className="text-label" /> miltton94
          </li>

          <li className="flex items-center gap-2">
            <Buildings size={20} className="text-label" /> Apucarana
          </li>

          <li className="flex items-center gap-2">
            <Users size={20} className="text-label" /> 123 seguidores
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Profile
