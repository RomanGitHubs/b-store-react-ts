import styled from 'styled-components';
import { useAppDispatch } from '../../../store/hooks';
import { putRating } from '../../../store/reducers/book';
import star from '../../../assets/star.svg';
import starFilled from '../../../assets/star-filled.svg';
import arrow from '../../../assets/icons/Gray-Back Arrow.svg';

interface ICounter {
  bookId: string
  rating: number
}
const RateBook: React.FC<ICounter> = ({ bookId, rating }) => {
  const dispatch = useAppDispatch();

  const handleOneStar = (id: string) => {
    dispatch(putRating({ id, rate: 1 }));
  };

  const handleTwoStar = (id: string) => {
    dispatch(putRating({ id, rate: 2 }));
  };

  const handleTreeStar = (id: string) => {
    dispatch(putRating({ id, rate: 3 }));
  };

  const handleFourStar = (id: string) => {
    dispatch(putRating({ id, rate: 4 }));
  };

  const handleFiveStar = (id: string) => {
    dispatch(putRating({ id, rate: 5 }));
  };

  return (
    <Body>
      <div className="rate-stars">
        <img className="star" src={starFilled} alt='star'/>

        <div className='rating-number'>{rating.toFixed(1)}</div>

        {rating <= 0.5 &&
          <>
            <div className="star" onClick={() => handleOneStar(bookId)}/>
            <div className="star" onClick={() => handleTwoStar(bookId)}/>
            <div className="star" onClick={() => handleTreeStar(bookId)}/>
            <div className="star" onClick={() => handleFourStar(bookId)}/>
            <div className="star" onClick={() => handleFiveStar(bookId)}/>
          </>
        }{rating > 0.5 && rating <= 1.5 &&
          <>
            <div className="star-filled" onClick={() => handleOneStar(bookId)}/>
            <div className="star" onClick={() => handleTwoStar(bookId)}/>
            <div className="star" onClick={() => handleTreeStar(bookId)}/>
            <div className="star" onClick={() => handleFourStar(bookId)}/>
            <div className="star" onClick={() => handleFiveStar(bookId)}/>
          </>
        }{rating > 1.5 && rating <= 2.5 &&
          <>
            <div className="star-filled" onClick={() => handleOneStar(bookId)}/>
            <div className="star-filled" onClick={() => handleTwoStar(bookId)}/>
            <div className="star" onClick={() => handleTreeStar(bookId)}/>
            <div className="star" onClick={() => handleFourStar(bookId)}/>
            <div className="star" onClick={() => handleFiveStar(bookId)}/>
          </>
        }{rating > 2.5 && rating <= 3.5 &&
          <>
            <div className="star-filled" onClick={() => handleOneStar(bookId)}/>
            <div className="star-filled" onClick={() => handleTwoStar(bookId)}/>
            <div className="star-filled" onClick={() => handleTreeStar(bookId)}/>
            <div className="star" onClick={() => handleFourStar(bookId)}/>
            <div className="star" onClick={() => handleFiveStar(bookId)}/>
          </>
        }{rating > 3.5 && rating <= 4.5 &&
          <>
            <div className="star-filled" onClick={() => handleOneStar(bookId)}/>
            <div className="star-filled" onClick={() => handleTwoStar(bookId)}/>
            <div className="star-filled" onClick={() => handleTreeStar(bookId)}/>
            <div className="star-filled" onClick={() => handleFourStar(bookId)}/>
            <div className="star" onClick={() => handleFiveStar(bookId)}/>
          </>
        }{rating > 4.5 &&
          <>
            <div className="star-filled" onClick={() => handleOneStar(bookId)}/>
            <div className="star-filled" onClick={() => handleTwoStar(bookId)}/>
            <div className="star-filled" onClick={() => handleTreeStar(bookId)}/>
            <div className="star-filled" onClick={() => handleFourStar(bookId)}/>
            <div className="star-filled" onClick={() => handleFiveStar(bookId)}/>
          </>
        }
      </div>

      <div className="ratebook-label">
        <img className="left-arrow" src={arrow} alt='arrow' />
        Rate this book!
      </div>
    </Body>
  );
};

export default RateBook;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 570px;
  height: 27px;
  margin: 20px 0;

  .rate-stars {
    display: flex;
    height: 26px;
    justify-content: space-between;
    align-items: center;
  
    .star {
      display: flex;
      width: 26px;
      height: 26px;
      cursor: pointer;
      margin: 0 10px;
      background: url(${star});
      background-size: cover;
    }

    .star-filled {
      display: flex;
      width: 26px;
      height: 26px;
      cursor: pointer;
      margin: 0 10px;
      background: url(${starFilled});
      background-size: cover;
    }
  }
  
  .left-arrow {
    margin-right: 15px;
  }

  .ratebook-label {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    color: #B9BAC4;
  }

  .rating-number{
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    color: #B9BAC4;
    margin-right: 50px;
    margin-left: 10px;
  }
`;
