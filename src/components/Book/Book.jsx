import React, { useEffect, useState } from 'react'
import Boo from '../Boo/Boo';

const Book = () => {
    const [books,setBooks]=useState([]);
    useEffect(
        ()=>{
            fetch('https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-book-vibe/refs/heads/main/public/booksData.json')
            .then(res=>res.json())
            .then(data=>setBooks(data))
        },[])

  return (
    <div className='mx-auto'>
      <h1 className='text-4xl font-bold text-center'>Books</h1>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
            books.map(book=><Boo key={book.bookId} book={book}/>)
        }
     </div>
    </div>
  )
}

export default Book
