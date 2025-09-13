import React from 'react'
import { useOutletContext } from 'react-router-dom';


const Favorite = () => {
  const { favoriteBooks } = useOutletContext();

  return (
      <div className="sm:mx-12 text-center mx-8 min-h-[400px]">
          <h1 className="text-3xl font-semibold text-blue-400 underline mb-4">Favorite Books</h1>
          {favoriteBooks?.length === 0 ? (
              <div className="text-xl text-red-500">No favorite books yet.</div>
          ) : (
              <div className="grid sm:grid-cols-3 grid-cols-1 gap-7 mt-2">
                  {favoriteBooks.map((book, index) => (
                      <div key={book.key || index} className="sm:h-64 sm:w-96 h-60 w-80 bg-gray-200 object-scale-down space-y-1 px-4 py-2 border border-blue-400 rounded-md shadow-md grid gap-2">
                          <h1 className='border-b-[1.5px] line-clamp-4 text-neutral-800 border-b-gray-500 font-semibold'><span className='font-semibold  text-lg text-blue-600'>Title:</span> {book?.title}</h1>
                          <h2 className='font-semibold text-neutral-800'><span className='font-semibold text-lg text-green-600'>Author Name: </span>{book?.author_name?.join(", ") || "N/A"} </h2>
                          <h3 className='font-semibold text-neutral-800'><span className='font-semibold text-lg text-orange-700'>Language: </span>{book?.language?.join(", ") || "N/A"} </h3>
                      </div>
                  ))}
              </div>
          )}
      </div>
  )
}

export default Favorite