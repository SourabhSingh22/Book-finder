import React, { useState } from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Favorite from './components/Favorite'
import DisplayBooks from './components/DisplayBooks'
import Footer from './components/Footer'




const Layout = ({ searchTerm, setSearchTerm, favoriteBooks, setFavoriteBooks }) => (
  <div>
    <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    <Outlet context={{ favoriteBooks, setFavoriteBooks }} />
    <Footer/>
  </div>
);





function App() {
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          favoriteBooks={favoriteBooks} 
          setFavoriteBooks={setFavoriteBooks} 
        />
      ),
      children: [
        { index: true, element: <DisplayBooks searchTerm={searchTerm} /> },
        { path: 'favorites', element: <Favorite /> },
      ],
    },
  ]);

  return (
    <div className='bg-[#F9FAFB]'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
 