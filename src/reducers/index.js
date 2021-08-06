const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [
    /*{ id: 1, name: 'book 1', count: 3, total: 150 },
    { id: 2, name: 'book 2', count: 3, total: 100 },
    { id: 3, name: 'book 3', count: 1, total: 150 },*/
  ],
  orderTotal: 220,
};
const updateCartItems = (cartItems, item, idx) => {
  if (idx === -1) {
    return [...cartItems, item];
  }
  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const updateCartItem = (book, item = {}) => {
  const { id = book.id, count = 0, title = book.title, total = 0 } = item;
  return {
    id,
    title,
    count: count + 1,
    total: total + book.price,
  };
};
const reducer = (state = initialState, action) => {
  window.state = state;
  // console.log(action.type);
  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        ...state,
        books: [],
        loading: true,
        error: null,
      };
    case 'FETCH_BOOK_SUCCESS':
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_BOOK_FAILURE':
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload,
      };
    case 'BOOK_ADDED_TO_CART':
      const bookId = action.payload;
      const book = state.books.find((book) => book.id === bookId);
      const itemIndex = state.cartItems.findIndex(({ id }) => id === bookId);
      const item = state.cartItems[itemIndex];
      const newItem = updateCartItem(book, item);
      return {
        ...state,
        cartItems: updateCartItems(state.cartItems, newItem, itemIndex),
      };

    case 'BOOK_DELETED':
      const idBook = action.payload;
      const newArr = state.cartItems.filter(({ id }) => id !== idBook);
      console.log(newArr);
      return {
        ...state,
        cartItems: [...newArr],
      };
    case 'BOOK_COUNT_INCREASE':
      const idOfBook = action.payload;
      const incItem = state.cartItems.find(({ id }) => id === idOfBook);
      incItem.count += 1;
      incItem.total += incItem.total;
      console.log(incItem);
      return {
        ...state,
        cartItems: [...state.cartItems],
      };
    /*case 'BOOK_ADDED_TO_CART':
      const bookId = action.payload;
      const book = state.books.find((book) => book.id === bookId);
      const itemIndex = state.cartItems.findIndex(({ id }) => id === bookId);
      const item = state.cartItems[itemIndex];
      let newItem;
      if (item) {
        newItem = {
          ...item,
          count: item.count + 1,
          total: item.total + book.price,
        };
      } else {
        newItem = {
          id: book.id,
          title: book.title,
          count: 1,
          total: book.price,
        };
      }
      if (itemIndex < 0) {
        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
        };
      } else {
        return {
          ...state,
          cartItems: [
            ...state.cartItems.slice(0, itemIndex),
            newItem,
            ...state.cartItems.slice(itemIndex + 1),
          ],
        };
      }*/
    default:
      return state;
  }
};
export default reducer;
