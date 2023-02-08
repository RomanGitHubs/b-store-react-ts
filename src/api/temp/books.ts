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
import bookCover13 from '../../assets/books/in-search.webp';
import bookCover14 from '../../assets/books/ulysses.webp';
import bookCover15 from '../../assets/books/don-quixote.webp';
import bookCover16 from '../../assets/books/one-hundred-years.webp';
import bookCover17 from '../../assets/books/the-great-gatsby.webp';
import bookCover18 from '../../assets/books/hamlet.webp';
import bookCover19 from '../../assets/books/the-brothers-karamazov.webp';
import bookCover20 from '../../assets/books/wuthering-heights.webp';
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
    description: `First published in 1851, Melville's 
    masterpiece is, in Elizabeth Hardwick's words, "the greatest novel in 
    American literature." The saga of Captain Ahab and his monomaniacal 
    pursuit of the white whale remains a peerless adventure story but one full 
    of mythic grandeur, poetic majesty, and symbolic power. Filtered through the 
    consciousness of the novel's narrator, Ishmael, Moby-Dick draws us into a 
    universe full of fascinating characters and stories, from the noble cannibal 
    Queequeg to the natural history of whales, while reaching existential 
    depths that excite debate and contemplation to this day.`,
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
  }, {
    bookId: '899453d4-ad15-4dfe-8a2b-3a1ae953cde6',
    photo: bookCover13,
    author: 'Marcel Proust',
    title: 'In Search of Lost Time',
    description: `Swann's Way, the first part of A la recherche de 
    temps perdu, Marcel Proust's seven-part cycle, was published in 
    1913. In it, Proust introduces the themes that run through the 
    entire work. The narrator recalls his childhood, aided by the 
    famous madeleine; and describes M. Swann's passion for Odette. 
    The work is incomparable. Edmund Wilson said "[Proust] has 
    supplied for the first time in literature an equivalent in the 
    full scale for the new theory of modern physics.`,
    rating: 3,
    available: true,
    hardcover: true,
    paperback: true,
    hardPrice: 0.1887,
    paperPrice: 0.1687,
    news: true,
    bestsaller: false,
  }, {
    bookId: 'd788449e-d47a-4859-aba5-ec5cf13f3e13',
    photo: bookCover14,
    author: 'James Joyce',
    title: 'Ulysses',
    description: `Ulysses chronicles the passage of Leopold Bloom 
    through Dublin during an ordinary day, June 16, 1904. The title 
    parallels and alludes to Odysseus (Latinised into Ulysses), 
    the hero of Homer's Odyssey (e.g., the correspondences between 
    Leopold Bloom and Odysseus, Molly Bloom and Penelope, and 
    Stephen Dedalus and Telemachus). Joyce fans worldwide now 
    celebrate June 16 as Bloomsday.`,
    rating: 4,
    available: true,
    hardcover: false,
    paperback: true,
    hardPrice: 0.0959,
    paperPrice: 0.0759,
    news: true,
    bestsaller: true,
  }, {
    bookId: '305aa776-46a0-4d69-8d51-f461611da72e',
    photo: bookCover15,
    author: 'Miguel de Cervantes',
    title: 'Don Quixote',
    description: `Alonso Quixano, a retired country gentleman in his fifties, 
    lives in an unnamed section of La Mancha with his niece and a housekeeper. 
    He has become obsessed with books of chivalry, and believes their every 
    word to be true, despite the fact that many of the events in them are 
    clearly impossible. Quixano eventually appears to other people to have 
    lost his mind from little sleep and food and because of so much reading.`,
    rating: 3,
    available: true,
    hardcover: true,
    paperback: false,
    hardPrice: 0.7,
    paperPrice: 0.68,
    news: false,
    bestsaller: false,
  }, {
    bookId: '5ca2ad07-9a8e-4e71-8502-6abf48f965df',
    photo: bookCover16,
    author: 'Gabriel Garcia Marquez',
    title: 'One Hundred Years of Solitude',
    description: `One of the 20th century's enduring works, 
    One Hundred Years of Solitude is a widely beloved and acclaimed 
    novel known throughout the world, and the ultimate achievement 
    in a Nobel Prize–winning career. The novel tells the story of the 
    rise and fall of the mythical town of Macondo through the history
    of the Buendía family. It is a rich and brilliant chronicle of life 
    and death, and the tragicomedy of humankind. In the noble, ridiculous, 
    beautiful, and tawdry story of the Buendía family, one sees all of 
    humanity, just as in the history, myths, growth, and decay of Macondo, 
    one sees all of Latin America. Love and lust, war and revolution, riches 
    and poverty, youth and senility — the variety of life, the endlessness of death, 
    the search for peace and truth — these universal themes dominate the novel. 
    Whether he is describing an affair of passion or the voracity of capitalism 
    and the corruption of government, Gabriel García Márquez always writes with 
    the simplicity, ease, andpurity that are the mark of a master. Alternately 
    reverential and comical, One Hundred Years of Solitude weaves the political, 
    personal, and spiritual to bring a new consciousness to storytelling. 
    Translated into dozens of languages, this stunning work is no less than 
    an accounting of the history of the human race.`,
    rating: 3,
    available: true,
    hardcover: true,
    paperback: true,
    hardPrice: 0.3862,
    paperPrice: 0.3662,
    news: false,
    bestsaller: true,
  }, {
    bookId: 'c65a886d-0df3-4c4b-a554-e4f29d9ef834',
    photo: bookCover17,
    author: 'F. Scott Fitzgerald',
    title: 'The Great Gatsby',
    description: `The novel chronicles an era that Fitzgerald himself dubbed the "Jazz Age". 
    Following the shock and chaos of World War I, American society enjoyed unprecedented 
    levels of prosperity during the "roaring" 1920s as the economy soared. 
    At the same time, Prohibition, the ban on the sale and manufacture of alcohol as
    mandated by the Eighteenth Amendment, made millionaires out of bootleggers and led to 
    an increase in organized crime, for example the Jewish mafia. Although Fitzgerald, 
    like Nick Carraway in his novel, idolized the riches and glamor of the age, he was 
    uncomfortable with the unrestrained materialism and the lack of morality that went with 
    it, a kind of decadence.`,
    rating: 5,
    available: true,
    hardcover: true,
    paperback: false,
    hardPrice: 0.1499,
    paperPrice: 0.0499,
    news: false,
    bestsaller: true,
  }, {
    bookId: '3fe29e71-efe1-4377-8fef-7d5c1592778f',
    photo: bookCover18,
    author: 'William Shakespeare',
    title: 'Hamlet',
    description: `The Tragedy of Hamlet, Prince of Denmark, or more simply Hamlet, 
    is a tragedy by William Shakespeare, believed to have been written between 1599 and 1601. 
    The play, set in Denmark, recounts how Prince Hamlet exacts revenge on his uncle Claudius, 
    who has murdered Hamlet's father, the King, and then taken the throne and married Gertrude, 
    Hamlet's mother. The play vividly charts the course of real and feigned madness—from 
    overwhelming grief to seething rage—and explores themes of treachery, revenge, incest, 
    and moral corruption.`,
    rating: 5,
    available: true,
    hardcover: true,
    paperback: true,
    hardPrice: 0.1199,
    paperPrice: 0.0257,
    news: false,
    bestsaller: true,
  }, {
    bookId: '0c8bcfc2-3c77-4b41-895e-79a0f0069b4c',
    photo: bookCover19,
    author: 'Fyodor Dostoyevsky',
    title: 'The Brothers Karamazov',
    description: `Dostoevsky's last and greatest novel, The Karamazov Brothers, is both a 
    brilliantly told crime story and a passionate philosophical debate. The dissolute 
    landowner Fyodor Pavlovich Karamazov is murdered; his sons — the atheist intellectual Ivan, 
    the hot-blooded Dmitry, and the saintly novice Alyosha — are all at some level involved. 
    Bound up with this intense family drama is Dostoevsky's exploration of many deeply felt 
    ideas about the existence of God, the question of human freedom, the collective nature of guilt, 
    the disastrous consequences of rationalism. The novel is also richly comic: the Russian 
    Orthodox Church, the legal system, and even the author's most cherished causes and beliefs 
    are presented with a note of irreverence, so that orthodoxy and radicalism, sanity and madness, 
    love and hatred, right and wrong are no longer mutually exclusive. Rebecca West considered 
    it "the allegory for the world's maturity, but with children to the fore." 
    This new translation does full justice to Dostoevsky's genius, particularly in the use of 
    the spoken word, which ranges over every mode of human expression.`,
    rating: 4,
    available: true,
    hardcover: true,
    paperback: false,
    hardPrice: 0.0428,
    paperPrice: 0.0263,
    news: true,
    bestsaller: false,
  }, {
    bookId: 'c363d42a-dc04-4900-a1e3-503008be0ab9',
    photo: bookCover20,
    author: 'Emily Brontë',
    title: 'Wuthering Heights',
    description: `The narrative is non-linear, involving several flashbacks, 
    and two primary narrators: Mr. Lockwood and Ellen "Nelly" Dean. 
    The novel opens in 1801, with Mr. Lockwood arriving at Thrushcross Grange, 
    a grand house on the Yorkshire moors that he is renting from the surly Heathcliff, 
    who lives at nearby Wuthering Heights. Lockwood is treated rudely, and coldly 
    by the brooding, unsociable Heathcliff, and is forced to stay at Wuthering Heights 
    for a night because one of the savage dogs of the Heights attacks him, and the 
    weather turns against him. The housekeeper cautiously takes him to a chamber to 
    sleep through the night and warns him to not speak to Heathcliff about where he is 
    sleeping, for he would get in deep trouble.`,
    rating: 3,
    available: false,
    hardcover: true,
    paperback: false,
    hardPrice: 0.2388,
    paperPrice: 0.1825,
    news: false,
    bestsaller: false,
  },
];

export default testBooks;
