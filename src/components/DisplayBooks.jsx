import React, { useEffect, useState } from 'react'
import { MdOutlineFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import Loading from './Loading';
import { useOutletContext } from 'react-router-dom';

const DisplayBooks = ({ searchTerm }) => {


  

    const { favoriteBooks, setFavoriteBooks } = useOutletContext();

    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)




    useEffect(() => {
        const fetchBooks = async () => {
            setLoading(true)
            try {

                // If searchTerm is empty, use a generic term to get a variety of books
                const query = searchTerm && searchTerm.trim() !== "" ? searchTerm : "a";
                const res = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(query)}`)
                const data = await res.json();
                console.log(data)
                setBooks(data.docs.slice(0, 30))

                if(books.docs.title !== searchTerm){
                    alert("Book Not found")
                }
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


    const languageMap = {
        eng: "English",
        hin: "Hindi",
        ara: "Arabic",
        ben: "Bengali",
        chi: "Chinese",
        fre: "French",
        ger: "German",
        guj: "Gujarati",
        ita: "Italian",
        jpn: "Japanese",
        kan: "Kannada",
        kor: "Korean",
        mar: "Marathi",
        nep: "Nepali",
        pan: "Punjabi",
        pol: "Polish",
        por: "Portuguese",
        rus: "Russian",
        spa: "Spanish",
        tam: "Tamil",
        tel: "Telugu",
        tur: "Turkish",
        urd: "Urdu",
        vie: "Vietnamese",
        mal: "Malayalam",
        dut: "Dutch",
        swe: "Swedish",
        hun: "Hungarian",
        cze: "Czech",
        gre: "Greek",
        heb: "Hebrew",
    };

    return (
        <div className="sm:mx-12 min-h-[400px]">
            <h1 className='text-center bg-neutral-900 shadow-md py-3 mx-2 rounded-md text-white text-3xl mb-5 font-sans'>Book Collection</h1>
            {loading ? (
                <div className="flex justify-center items-center h-96">
                    <Loading />
                </div>
            ) : (
                 <div className="grid sm:grid-cols-4 grid-cols-1 gap-5 sm:gap-7">
                    {books.map((book, index) => (
                        <div key={index} className="sm:h-72 sm:w-64 h-60  w-80  bg-[#ffffff] rounded-md shadow-md grid gap-2 shadow-fuchsia-100 mx-auto hover:shadow-amber-200 border-[1.5px] border-amber-100">
                            <div className="sm:text-[28px] text-[26px] cursor-pointer pl-2 pt-2" onClick={() => toggleFavorite(book)}>
                                {favoriteBooks.some((fav) => fav.key === book.key)
                                    ? <MdOutlineFavorite className="text-[#6BAED6]" />
                                    : <MdFavoriteBorder className="text-[#6BAED6]" />}
                            </div>
                            <h1 className=' h-full text-center w-full flex items-center justify-center flex-col  gap-2 bg-[#6BAED6] text-[#25254d]  px-2 font-semibold shadow-sm shadow-gray-400 font-serif '><span className='font-semibold  text-xl text-[#FFFFFF] font-sans'>Title: </span> {book?.title}</h1>
                
                            <h2 className='h-full w-full flex items-center justify-center flex-col  gap-2 bg-[#98cae8] text-[#25254d]  px-2 font-semibold shadow-sm shadow-gray-400 font-serif rounded-b-md text-center'><span className='font-semibold  text-[23px] text-[#ffffff] font-sans'>Author Name</span>{book?.author_name || "N/A"} </h2>
                            {/* <h3 className='font-semibold text-neutral-800 flex items-center justify-center flex-col'>
                                <span className='font-semibold text-lg text-[#DDE6ED] mx-2'>Language: </span>
                                {book?.language
                                     ? book.language.map((code) => languageMap[code] || code).join(", ") : "N/A"
                                }
                            </h3> */}
                        </div>
                    ))}
                </div>
            ) } 
        </div>
    )
}

export default DisplayBooks