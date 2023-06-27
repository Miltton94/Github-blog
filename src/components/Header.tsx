import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className="w-full h-[18.5rem] bg-header-image bg-no-repeat bg-center bg-cover flex items-center justify-center">
      <Link to="/">
        <img src={logo} alt="Github blog" className="mb-20" />
      </Link>
    </header>
  )
}

export default Header
