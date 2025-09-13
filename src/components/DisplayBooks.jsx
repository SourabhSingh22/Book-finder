import React, { useEffect, useState } from 'react'
import { MdOutlineFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import Loading from './Loading';
import { useOutletContext } from 'react-router-dom';

const DisplayBooks = ({ searchTerm }) => {

    const { favoriteBooks, setFavoriteBooks } = useOutletContext();

    const [books, setBooks] = useState([])
    const [allBooks, setAllBooks] = useState([])
    const [loading, setLoading] = useState(false)



    useEffect(() => {
        const fetchBooks = async () => {
            setLoading(true)
            try {
                // If searchTerm is empty, use a generic term to get a variety of books
                const query = searchTerm && searchTerm.trim() !== "" ? searchTerm : "a";
                const res = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(query)}`)
                const data = await res.json();
                setBooks(data.docs.slice(0, 30))
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }

        const timer = setTimeout(() => {
            fetchBooks(searchTerm)
        }, 500)
        return () => clearTimeout(timer)

    }, [searchTerm])




    // handle Favorite toggle.
    const toggleFavorite = (book) => {
        if (favoriteBooks.some((fav) => fav.key === book.key)) {
            setFavoriteBooks(favoriteBooks.filter((fav) => fav.key !== book.key));
        } else {
            setFavoriteBooks([...favoriteBooks, book]);
        }
    };

    return (
        <div className="sm:mx-12 min-h-[400px]">
            {loading ? (
                <div className="flex justify-center items-center h-96">
                    <Loading />
                </div>
            ) : books.length === 0 ? (
                <div className="flex justify-center items-center h-96 text-xl text-red-500">
                    No books found.
                </div>
            ) : (
                <div className="grid sm:grid-cols-3 grid-cols-1 gap-5 sm:gap-7">
                    {books.map((book, index) => (
                        <div key={index} className="sm:h-64 sm:w-96 h-60  w-80 bg-gray-200 object-scale-down space-y-1 px-4 py-2 border border-blue-400 rounded-md shadow-md grid gap-2 hover:shadow-md hover:shadow-fuchsia-100 mx-auto ">
                            <div className="sm:text-2xl text-[26px] cursor-pointer" onClick={() => toggleFavorite(book)}>
                                {favoriteBooks.some((fav) => fav.key === book.key)
                                    ? <MdOutlineFavorite className="text-red-500" />
                                    : <MdFavoriteBorder className="text-red-500" />}
                            </div>
                            <h1 className='border-b-[1.5px] line-clamp-4 text-neutral-800 border-b-gray-500 font-semibold'><span className='font-semibold  text-lg text-blue-600'>Title:</span> {book?.title}</h1>
                            <h2 className='font-semibold text-neutral-800 '><span className='font-semibold text-lg text-green-600'>Author Name: </span>{book?.author_name?.join(", ") || "N/A"} </h2>
                            <h3 className='font-semibold text-neutral-800 '><span className='font-semibold text-lg text-orange-700'>Language: </span>{book?.language?.join(", ") || "N/A"} </h3>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default DisplayBooks