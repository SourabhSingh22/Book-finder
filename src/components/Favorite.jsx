import React from 'react'
import { useOutletContext } from 'react-router-dom';


const Favorite = () => {
  const { favoriteBooks } = useOutletContext();

  return (
      <div className="sm:mx-12 text-center mx-8 min-h-[400px]">
          <h1 className="text-4xl bg-[#0e1316] rounded-md py-2 font-semibold text-[#FFFFFF] font-sans mb-6 mx-2">Favorite Books</h1>
          {favoriteBooks?.length === 0 ? (
              <div className="text-xl text-red-500">No favorite books yet.</div>
          ) : (
              <div className="grid sm:grid-cols-4 grid-cols-1 gap-5 sm:gap-7">
                  {favoriteBooks.map((book, index) => (
                      <div key={book.key || index} className="sm:h-72 sm:w-64 h-60  w-80  bg-[#ffffff] rounded-md shadow-md grid gap-2 shadow-fuchsia-100 mx-auto hover:shadow-blue-400 border-2 border-amber-100">
                          <h1 className='h-full w-full flex items-center justify-center flex-col  gap-2 bg-[#6BAED6] text-[#25254d]  px-2 font-semibold shadow-sm shadow-gray-400 font-serif rounded-t-md'><span className='font-semibold  text-[23px] text-[#FFFFFF] font-sans text-center'>Title</span> {book?.title}</h1>
                          <h2 className='h-full w-full flex items-center justify-center flex-col  gap-2 bg-[#98cae8] text-[#25254d]  px-2 font-semibold shadow-sm shadow-gray-400 font-serif rounded-b-md line-clamp-3'><span className='font-semibold  text-[23px] text-[#ffffff] font-sans text-center '>Author Name</span>{book?.author_name || "N/A"} </h2>
                      </div>
                  ))}
              </div>
          )}
      </div>
  )
}

export default Favorite