import userPhoto from '../../assets/user-photo.svg';
import userPhoto3 from '../../assets/user-photo3.jpg';
import userPhoto4 from '../../assets/user-photo4.png';
import { CommentModel } from '../../models/comment';

const testComments: CommentModel[] = [
  {
    commentId: '319244ee-a536-4b75-9dc4-0d6bc8432806',
    bookId: '936028fe-fd10-4805-8c7d-552393f0e949',
    photo: userPhoto3,
    author: 'Kate Miles',
    timer: '03-02-2023, 4:14 pm',
    text: 'Love this so much Chronicles! This book open up a new world for me! I advice everyone to get acquainted whit the author this book. He is awesome!',
  },
  {
    commentId: 'e472f987-36a0-4d36-be6e-6542fb09c4b2',
    bookId: '936028fe-fd10-4805-8c7d-552393f0e949',
    photo: userPhoto4,
    author: 'Annette Black',
    timer: '05-02-2023, 4:14 pm',
    text: 'This book is amazing Chronicles! If you are a romantic person, read it.',
  },
  {
    commentId: 'e3fc80c6-e8fc-4c58-9eb3-1bfa973e4b88',
    bookId: '936028fe-fd10-4805-8c7d-552393f0e949',
    photo: userPhoto,
    author: 'Floyd Miles',
    timer: '06-02-2023, 4:15 pm',
    text: 'Love this so much Chronicles! This book open up a new world for me! I advice everyone to get acquainted whit the author this book. He is awesome!',
  },
  {
    commentId: 'f0db0b66-530c-41a7-939d-74c7dc8bc2ca',
    bookId: '033e7cd6-1dce-4b9c-b370-bfc35086680b',
    photo: userPhoto4,
    author: 'Annette Black',
    timer: '07-02-2023, 1:14 pm',
    text: 'This book is amazing Psychlogy! If you are a romantic person, read it.',
  },
  {
    commentId: '41f20f98-e59e-4e7d-8106-8d5006875533',
    bookId: '033e7cd6-1dce-4b9c-b370-bfc35086680b',
    photo: userPhoto,
    author: 'Floyd Miles',
    timer: '07-02-2023, 2:14 pm',
    text: 'Love this so much Psychlogy! This book open up a new world for me! I advice everyone to get acquainted whit the author this book. He is awesome!',
  },
  {
    commentId: 'c3e53718-e9fa-4bac-8afa-fa5ab13723c2',
    bookId: 'd557be17-16a0-4d15-9204-0490b8bafd05',
    photo: userPhoto4,
    author: 'Annette Black',
    timer: '07-02-2023, 4:15 pm',
    text: 'This book Psychlogy is amazing! If you are a romantic person, read it.',
  },
];

export default testComments;
