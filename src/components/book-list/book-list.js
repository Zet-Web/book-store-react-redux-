import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import './book-list.css';
import { withBookStoreService } from '../hoc/';
import { fetchBooks } from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

class BookList extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error } = this.props;
    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return <ErrorIndicator />;
    }
    return (
      <ul className='book-list'>
        {books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem book={book} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error };
};

// const mapDispatchToProps = {
//   booksLoaded,
//   booksRequested,
//   booksError,
// };
/*const { bookstoreService, booksLoaded, booksRequested, booksError } =
    this.props;
booksRequested();
bookstoreService
    .getBooks()
    .then((data) => booksLoaded(data))
    .catch((err) => booksError(err));*/
const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
  };
};
export default compose(
  withBookStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
/*const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      booksLoaded,
    },
    dispatch
  );
};*/
/*
export default withBookStoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookList)
);
*/
