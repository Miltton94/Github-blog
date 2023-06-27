import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header className="w-full h-[18.5rem] bg-header-image bg-no-repeat bg-center bg-cover flex items-center justify-center">
      <img src={logo} alt="Github blog" className="mb-20" />
    </header>
  )
}

export default Header
