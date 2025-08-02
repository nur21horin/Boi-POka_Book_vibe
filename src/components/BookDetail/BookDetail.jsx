import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const BookDetail = () => {
    const {bookId}=useParams();
    console.log(bookId);
    const data=useLoaderData();
    console.log(data);
    const book=data.find(book>=book.bookId===bookId)
    
  return (
    <div>
      <h2>Book details :{bookId}</h2>
    </div>
  )
}

export default BookDetail
