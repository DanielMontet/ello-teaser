const BookQuery = `
  query {
    book {
      author
      pages {
        pageIndex
        content
        tokens {
          position
          value
        }
      }
      title
    }
  }
`;


export default BookQuery