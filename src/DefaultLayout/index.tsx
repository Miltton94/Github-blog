import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <main className="w-full max-w-[54rem] mx-auto px-4">
        <Outlet />
      </main>
    </div>
  )
}

export default DefaultLayout
