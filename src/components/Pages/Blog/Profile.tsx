import {
  ArrowSquareOut,
  Buildings,
  GithubLogo,
  SpinnerGap,
  Users,
} from 'phosphor-react'
import ExternalLink from '../../ExternalLink'
import { useState, useCallback, useEffect } from 'react'
import { api } from '../../../lib/axios'

const username = import.meta.env.VITE_GITHUB_USER

interface ProfileData {
  login: string
  bio: string
  avatar_url: string
  html_url: string
  name: string
  company?: string
  followers: number
}

const Profile = () => {
  const [profileData, setProfileData] = useState<ProfileData>({} as ProfileData)
  const [isLoading, setIsLoading] = useState(true)

  const getProfileData = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(`/users/${username}`)

      setProfileData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [profileData])

  useEffect(() => {
    getProfileData()
  }, [])

  return (
    <section className="w-full min-h-[13.25rem] bg-profile shadow-lg gap-8 relative rounded-[.625rem] py-8 px-10 flex flex-col sm:flex-row -top-[5.5rem]">
      {isLoading ? (
        <div className="flex-1 flex justify-center items-center">
          <SpinnerGap size={20} className="text-blue animate-spin" />
        </div>
      ) : (
        <>
          <img
            src={profileData.avatar_url}
            alt=""
            className="sm:w-[9.25rem] sm:h-[9.25rem] w-[15rem] h-[15rem] rounded-lg object-cover place-self-center"
          />
          <div className="flex-1 flex flex-col mb-2">
            <header className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-title leading-[130%]">
                {profileData.name}
              </h1>

              <ExternalLink href={profileData.html_url}>
                github <ArrowSquareOut size={16} weight="bold" />
              </ExternalLink>
            </header>

            <p className="line-clamp-2">{profileData.bio}</p>

            <ul className="flex items-start xs:items-center sm:gap-6 gap-4 flex-col xs:flex-row xs:flex-wrap mt-2 sm:mt-auto">
              <li className="flex items-center gap-2">
                <GithubLogo size={20} className="text-label" />{' '}
                {profileData.login}
              </li>

              <li className="flex items-center gap-2">
                <Buildings size={20} className="text-label" />{' '}
                {profileData.company}
              </li>

              <li className="flex items-center gap-2">
                <Users size={20} className="text-label" />{' '}
                {profileData.followers} seguidores
              </li>
            </ul>
          </div>
        </>
      )}
    </section>
  )
}

export default Profile
