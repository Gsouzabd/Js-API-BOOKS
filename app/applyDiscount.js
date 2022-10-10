function applyDiscount(booksList){
    booksDiscounted = booksList.map(book => {
      return {...book, preco: book.preco - (book.preco * 0.30)};
    })
    return booksDiscounted;
}