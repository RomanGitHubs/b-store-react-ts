import bookCover1 from '../../assets/books/narnia.webp';
import bookCover2 from '../../assets/books/psychlogy.webp';
import bookCover3 from '../../assets/books/doriangray.webp';
import bookCover4 from '../../assets/books/subtleart.webp';
import bookCover5 from '../../assets/books/twotowers.webp';
import bookCover6 from '../../assets/books/farytails.webp';
import bookCover7 from '../../assets/books/worrying.webp';
import bookCover8 from '../../assets/books/sweet.webp';
import bookCover9 from '../../assets/books/things.webp';
import bookCover10 from '../../assets/books/milk.webp';
import bookCover11 from '../../assets/books/mobydick.webp';
import bookCover12 from '../../assets/books/crying.webp';
import { BookModel } from '../../models/book';

const testBooks: BookModel[] = [
  {
    bookId: 8956956,
    photo: bookCover1,
    author: 'C. S. Lewis',
    title: 'The Chronicles of Narnia',
    // description: `"Rupi Kaur is the Writer of the Decade." - The New Requblic
    // <br/><br/>
    // #1 New York Times bestsaller milk and honey is a collection of poetry
    // and prose about surival. About the experience of volience, abuse, love, loss
    // and femininity.
    // <br/><br/>
    // The book is divided into four chapters, and each chapter server a different
    // purpose. Deals with a different pain. Heals a different heartache. milk
    // and honey takes readers throгпр a journey of the most bitter moments in life
    // and finds sweetness in them becouse there is sweetness everywhere
    // if you are just willing to look.`,
    description: 'Description Chronicles',
    rating: 5,
    available: true,
    hardcover: true,
    paperback: true,
    hardPrice: 0.1499,
    paperPrice: 0.1299,
    news: false,
    bestsaller: true,
  }, {
    bookId: 56895697,
    photo: bookCover2,
    author: 'Morgan Housel',
    title: 'The Psychlogy of Money',
    description: 'Description Psychlogy',
    rating: 4,
    available: true,
    hardcover: true,
    paperback: false,
    hardPrice: 0.15,
    paperPrice: 0.13,
    news: true,
    bestsaller: true,
  }, {
    bookId: 78686,
    photo: bookCover3,
    author: 'Oscar Wilde',
    title: 'The Picture of Dorian Gray',
    description: 'Description Dorian Gray',
    rating: 0,
    available: true,
    hardcover: false,
    paperback: true,
    hardPrice: 0.2,
    paperPrice: 0.18,
    news: true,
    bestsaller: false,
  }, {
    bookId: 5959566,
    photo: bookCover4,
    author: 'Mark Manson',
    title: 'The Subtle Art of Not Giving a F*ck',
    description: 'Description Subtle Art',
    rating: 5,
    available: true,
    hardcover: true,
    paperback: true,
    hardPrice: 0.2399,
    paperPrice: 0.2199,
    news: false,
    bestsaller: false,
  }, {
    bookId: 786865,
    photo: bookCover5,
    author: 'J. R. R. Tolkien',
    title: 'The Two towers',
    description: 'Description towers',
    rating: 5,
    available: false,
    hardcover: true,
    paperback: false,
    hardPrice: 0.33,
    paperPrice: 0.31,
    news: true,
    bestsaller: true,
  }, {
    bookId: 57957,
    photo: bookCover6,
    author: 'Angela Carter',
    title: 'Book of Fairy Tales',
    description: 'Description Narnia',
    rating: 5,
    available: true,
    hardcover: true,
    paperback: false,
    hardPrice: 0.32,
    paperPrice: 0.3,
    news: false,
    bestsaller: false,
  }, {
    bookId: 789,
    photo: bookCover7,
    author: 'Dale Carnegie',
    title: 'How to stop warrying and start',
    description: 'Description Psychlogy',
    rating: 1,
    available: true,
    hardcover: true,
    paperback: false,
    hardPrice: 0.3785,
    paperPrice: 0.3585,
    news: false,
    bestsaller: false,
  }, {
    bookId: 59596789,
    photo: bookCover8,
    author: 'Richard Carlson',
    title: 'Don`t sweet to Small Stuuff',
    description: 'Description Dorian Gray',
    rating: 5,
    available: true,
    hardcover: true,
    paperback: false,
    hardPrice: 0.4,
    paperPrice: 0.38,
    news: false,
    bestsaller: false,
  }, {
    bookId: 570508,
    photo: bookCover9,
    author: 'Marianne Flitz',
    title: 'The weight of Things',
    description: 'Description Subtle Art',
    rating: 3,
    available: true,
    hardcover: true,
    paperback: false,
    hardPrice: 0.415,
    paperPrice: 0.395,
    news: false,
    bestsaller: false,
  }, {
    bookId: 57895797,
    photo: bookCover10,
    author: 'Rupi Kaur',
    title: 'Milk and honey',
    description: 'Description towers',
    rating: 5,
    available: false,
    hardcover: true,
    paperback: false,
    hardPrice: 0.5599,
    paperPrice: 0.5399,
    news: false,
    bestsaller: true,
  }, {
    bookId: 5789696,
    photo: bookCover11,
    author: 'Herman Melville',
    title: 'Moby Dick',
    description: 'Description Narnia',
    rating: 5,
    available: true,
    hardcover: true,
    paperback: false,
    hardPrice: 0.6,
    paperPrice: 0.58,
    news: false,
    bestsaller: false,
  }, {
    bookId: 895969,
    photo: bookCover12,
    author: 'Heather Christle',
    title: 'The Crying book',
    description: 'Description Psychlogy',
    rating: 3,
    available: true,
    hardcover: true,
    paperback: false,
    hardPrice: 0.7,
    paperPrice: 0.68,
    news: false,
    bestsaller: false,
  },
];

export default testBooks;
