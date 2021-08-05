export default class BookStoreService {
  data = [
    {
      id: 1,
      title: 'Production-Ready',
      author: 'Susan J.',
      price: 32,
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX218_BO1,204,203,200_QL40_ML2_.jpg',
    },
    {
      id: 2,
      title: 'Release It',
      author: 'Michael',
      price: 40,
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/419zAwJJH4L._SY445_SX342_QL70_ML2_.jpg',
    },
  ];
  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error('Something bad happened'));
        } else {
          resolve(this.data);
        }
      }, 700);
    });
  }
}
