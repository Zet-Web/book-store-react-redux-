const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST',
  };
};
const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOK_SUCCESS',
    payload: newBooks,
  };
};

const booksError = (error) => {
  return {
    type: 'FETCH_BOOK_FAILURE',
    payload: error,
  };
};

const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested());
  bookstoreService
    .getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)));
};
export { fetchBooks };
