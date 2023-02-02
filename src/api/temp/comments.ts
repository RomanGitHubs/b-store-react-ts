import userPhoto from '../../assets/user-photo.svg';
import { CommentModel } from '../../models/comment';

const testComments: CommentModel[] = [
  {
    commentId: 41441,
    photo: userPhoto,
    author: 'Floyd Miles',
    timer: 'Left a comment two days ago',
    text: 'Love this so much! This book open up a new world for me! I advice everyone to get acquainted whit the author this book. He is awesome!',
  }, {
    commentId: 4144121,
    photo: userPhoto,
    author: 'Annette Black',
    timer: 'Left a comment two days ago',
    text: 'This book is amazing! If you are a romantic person, read it.',
  },
];

export default testComments;
