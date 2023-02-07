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
    bookId: '936028fe-fd10-4805-8c7d-552393f0e949',
    photo: bookCover1,
    author: 'C. S. Lewis',
    title: 'The Chronicles of Narnia',
    description: `"Rupi Kaur is the Writer of the Decade." - The New Requblic
    <br/><br/>
    #1 New York Times bestsaller milk and honey is a collection of poetry
    and prose about surival. About the experience of volience, abuse, love, loss
    and femininity.
    <br/><br/>
    The book is divided into four chapters, and each chapter server a different
    purpose. Deals with a different pain. Heals a different heartache. milk
    and honey takes readers throгпр a journey of the most bitter moments in life
    and finds sweetness in them becouse there is sweetness everywhere
    if you are just willing to look.`,
    rating: 5,
    available: true,
    hardcover: true,
    paperback: true,
    hardPrice: 0.1499,
    paperPrice: 0.1299,
    news: false,
    bestsaller: true,
  }, {
    bookId: '033e7cd6-1dce-4b9c-b370-bfc35086680b',
    photo: bookCover2,
    author: 'Morgan Housel',
    title: 'The Psychlogy of Money',
    description: `"The Psychlogy of Money" - The New Requblic
    <br/><br/>
    #1 New York Times bestsaller milk and honey is a collection of poetry
    and prose about surival. About the experience of volience, abuse, love, loss
    and femininity.
    <br/><br/>
    The book is divided into four chapters, and each chapter server a different
    purpose. Deals with a different pain. Heals a different heartache. milk
    and honey takes readers throгпр a journey of the most bitter moments in life
    and finds sweetness in them becouse there is sweetness everywhere
    if you are just willing to look.`,
    rating: 4,
    available: true,
    hardcover: true,
    paperback: false,
    hardPrice: 0.15,
    paperPrice: 0.13,
    news: true,
    bestsaller: true,
  }, {
    bookId: 'd557be17-16a0-4d15-9204-0490b8bafd05',
    photo: bookCover3,
    author: 'Oscar Wilde',
    title: 'The Picture of Dorian Gray',
    description: `"The Picture of Dorian Gray" - The New Requblic
    <br/><br/>
    #1 New York Times bestsaller milk and honey is a collection of poetry
    and prose about surival. About the experience of volience, abuse, love, loss
    and femininity.
    <br/><br/>
    The book is divided into four chapters, and each chapter server a different
    purpose. Deals with a different pain. Heals a different heartache. milk
    and honey takes readers throгпр a journey of the most bitter moments in life
    and finds sweetness in them becouse there is sweetness everywhere
    if you are just willing to look.`,
    rating: 0,
    available: true,
    hardcover: false,
    paperback: true,
    hardPrice: 0.2,
    paperPrice: 0.18,
    news: true,
    bestsaller: false,
  }, {
    bookId: '3bbd5dbd-fa30-4c27-a2a5-64a99fccf348',
    photo: bookCover4,
    author: 'Mark Manson',
    title: 'The Subtle Art of Not Giving a F*ck',
    description: `"The Subtle Art of Not Giving a F*ck" - The New Requblic
    <br/><br/>
    #1 New York Times bestsaller milk and honey is a collection of poetry
    and prose about surival. About the experience of volience, abuse, love, loss
    and femininity.
    <br/><br/>
    The book is divided into four chapters, and each chapter server a different
    purpose. Deals with a different pain. Heals a different heartache. milk
    and honey takes readers throгпр a journey of the most bitter moments in life
    and finds sweetness in them becouse there is sweetness everywhere
    if you are just willing to look.`,
    rating: 5,
    available: true,
    hardcover: true,
    paperback: true,
    hardPrice: 0.2399,
    paperPrice: 0.2199,
    news: false,
    bestsaller: false,
  }, {
    bookId: '94fd3c71-d481-430e-a8b3-155a15a88efd',
    photo: bookCover5,
    author: 'J. R. R. Tolkien',
    title: 'The Two towers',
    description: `"The Two towers" - The New Requblic
    <br/><br/>
    #1 New York Times bestsaller milk and honey is a collection of poetry
    and prose about surival. About the experience of volience, abuse, love, loss
    and femininity.
    <br/><br/>
    The book is divided into four chapters, and each chapter server a different
    purpose. Deals with a different pain. Heals a different heartache. milk
    and honey takes readers throгпр a journey of the most bitter moments in life
    and finds sweetness in them becouse there is sweetness everywhere
    if you are just willing to look.`,
    rating: 5,
    available: false,
    hardcover: true,
    paperback: false,
    hardPrice: 0.33,
    paperPrice: 0.31,
    news: true,
    bestsaller: true,
  }, {
    bookId: 'f470b1b6-f33d-43f2-bcb4-a3fb60dd5d44',
    photo: bookCover6,
    author: 'Angela Carter',
    title: 'Book of Fairy Tales',
    description: `"Book of Fairy Tales" - The New Requblic
    <br/><br/>
    #1 New York Times bestsaller milk and honey is a collection of poetry
    and prose about surival. About the experience of volience, abuse, love, loss
    and femininity.
    <br/><br/>
    The book is divided into four chapters, and each chapter server a different
    purpose. Deals with a different pain. Heals a different heartache. milk
    and honey takes readers throгпр a journey of the most bitter moments in life
    and finds sweetness in them becouse there is sweetness everywhere
    if you are just willing to look.`,
    rating: 5,
    available: true,
    hardcover: true,
    paperback: false,
    hardPrice: 0.32,
    paperPrice: 0.3,
    news: false,
    bestsaller: false,
  }, {
    bookId: '00bcae7a-ec0e-469c-a8d6-12397e7f7f33',
    photo: bookCover7,
    author: 'Dale Carnegie',
    title: 'How to stop warrying and start',
    description: `"How to stop warrying and start" - The New Requblic
    <br/><br/>
    #1 New York Times bestsaller milk and honey is a collection of poetry
    and prose about surival. About the experience of volience, abuse, love, loss
    and femininity.
    <br/><br/>
    The book is divided into four chapters, and each chapter server a different
    purpose. Deals with a different pain. Heals a different heartache. milk
    and honey takes readers throгпр a journey of the most bitter moments in life
    and finds sweetness in them becouse there is sweetness everywhere
    if you are just willing to look.`,
    rating: 1,
    available: true,
    hardcover: true,
    paperback: false,
    hardPrice: 0.3785,
    paperPrice: 0.3585,
    news: false,
    bestsaller: false,
  }, {
    bookId: 'a1611493-5c06-40c7-8a07-72789551a431',
    photo: bookCover8,
    author: 'Richard Carlson',
    title: 'Don`t sweet to Small Stuuff',
    description: `"Don't sweet to Small Stuuff" - The New Requblic
    <br/><br/>
    #1 New York Times bestsaller milk and honey is a collection of poetry
    and prose about surival. About the experience of volience, abuse, love, loss
    and femininity.
    <br/><br/>
    The book is divided into four chapters, and each chapter server a different
    purpose. Deals with a different pain. Heals a different heartache. milk
    and honey takes readers throгпр a journey of the most bitter moments in life
    and finds sweetness in them becouse there is sweetness everywhere
    if you are just willing to look.`,
    rating: 5,
    available: true,
    hardcover: true,
    paperback: false,
    hardPrice: 0.4,
    paperPrice: 0.38,
    news: false,
    bestsaller: false,
  }, {
    bookId: 'a430cb19-660d-4f2e-8fba-41875c0fa62b',
    photo: bookCover9,
    author: 'Marianne Flitz',
    title: 'The weight of Things',
    description: `"The weight of Things" - The New Requblic
    <br/><br/>
    #1 New York Times bestsaller milk and honey is a collection of poetry
    and prose about surival. About the experience of volience, abuse, love, loss
    and femininity.
    <br/><br/>
    The book is divided into four chapters, and each chapter server a different
    purpose. Deals with a different pain. Heals a different heartache. milk
    and honey takes readers throгпр a journey of the most bitter moments in life
    and finds sweetness in them becouse there is sweetness everywhere
    if you are just willing to look.`,
    rating: 3,
    available: true,
    hardcover: true,
    paperback: false,
    hardPrice: 0.415,
    paperPrice: 0.395,
    news: false,
    bestsaller: false,
  }, {
    bookId: 'bf14eb1c-c7c8-4e08-81c3-886b2a45e308',
    photo: bookCover10,
    author: 'Rupi Kaur',
    title: 'Milk and honey',
    description: `"Milk and honey" - The New Requblic
    <br/><br/>
    #1 New York Times bestsaller milk and honey is a collection of poetry
    and prose about surival. About the experience of volience, abuse, love, loss
    and femininity.
    <br/><br/>
    The book is divided into four chapters, and each chapter server a different
    purpose. Deals with a different pain. Heals a different heartache. milk
    and honey takes readers throгпр a journey of the most bitter moments in life
    and finds sweetness in them becouse there is sweetness everywhere
    if you are just willing to look.`,
    rating: 5,
    available: false,
    hardcover: true,
    paperback: false,
    hardPrice: 0.5599,
    paperPrice: 0.5399,
    news: false,
    bestsaller: true,
  }, {
    bookId: '572aa4f6-7bb5-4af4-b291-358f3bbb6924',
    photo: bookCover11,
    author: 'Herman Melville',
    title: 'Moby Dick',
    description: `"Moby Dick" - The New Requblic
    <br/><br/>
    #1 New York Times bestsaller milk and honey is a collection of poetry
    and prose about surival. About the experience of volience, abuse, love, loss
    and femininity.
    <br/><br/>
    The book is divided into four chapters, and each chapter server a different
    purpose. Deals with a different pain. Heals a different heartache. milk
    and honey takes readers throгпр a journey of the most bitter moments in life
    and finds sweetness in them becouse there is sweetness everywhere
    if you are just willing to look.`,
    rating: 5,
    available: true,
    hardcover: true,
    paperback: false,
    hardPrice: 0.6,
    paperPrice: 0.58,
    news: false,
    bestsaller: false,
  }, {
    bookId: '5f2dbf9e-1be1-4c7b-b866-50bbd161c9e4',
    photo: bookCover12,
    author: 'Heather Christle',
    title: 'The Crying book',
    description: `"The Crying book" - The New Requblic
    <br/><br/>
    #1 New York Times bestsaller milk and honey is a collection of poetry
    and prose about surival. About the experience of volience, abuse, love, loss
    and femininity.
    <br/><br/>
    The book is divided into four chapters, and each chapter server a different
    purpose. Deals with a different pain. Heals a different heartache. milk
    and honey takes readers throгпр a journey of the most bitter moments in life
    and finds sweetness in them becouse there is sweetness everywhere
    if you are just willing to look.`,
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
