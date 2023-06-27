import { Route, Routes } from 'react-router-dom'
import Blog from './pages/Blog'
import DefaultLayout from './DefaultLayout'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} />
      </Route>
    </Routes>
  )
}
