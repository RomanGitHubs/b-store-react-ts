import styled from 'styled-components';
import star from '../../../assets/star.svg';
import starFilled from '../../../assets/star-filled.svg';

interface ICounter {
  rating: number
}

const StarCounter: React.FC<ICounter> = ({ rating }) => {
  return (
    <Body>
      <div className="rating-stars">
        {rating <= 0.5 &&
          <>
            <div className="star"/>
            <div className="star"/>
            <div className="star"/>
            <div className="star"/>
            <div className="star"/>
          </>
        }{rating > 0.5 && rating <= 1.5 &&
          <>
            <div className="star-filled"/>
            <div className="star"/>
            <div className="star"/>
            <div className="star"/>
            <div className="star"/>
          </>
        }{rating > 1.5 && rating <= 2.5 &&
          <>
            <div className="star-filled"/>
            <div className="star-filled"/>
            <div className="star"/>
            <div className="star"/>
            <div className="star"/>
          </>
        }{rating > 2.5 && rating <= 3.5 &&
          <>
            <div className="star-filled"/>
            <div className="star-filled"/>
            <div className="star-filled"/>
            <div className="star"/>
            <div className="star"/>
          </>
        }{rating > 3.5 && rating <= 4.5 &&
          <>
            <div className="star-filled" />
            <div className="star-filled"/>
            <div className="star-filled"/>
            <div className="star-filled"/>
            <div className="star"/>
          </>
        }{rating > 4.5 &&
          <>
            <div className="star-filled"/>
            <div className="star-filled"/>
            <div className="star-filled"/>
            <div className="star-filled"/>
            <div className="star-filled"/>
          </>
        }
      </div>

      <div className="rating-number">{rating.toFixed(1)}</div>
    </Body>
  );
};

export default StarCounter;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 27px;
  margin: 20px 0;

  .rating-stars {
    display: flex;
    width: 250px;
    height: 26px;
    justify-content: space-between;
  
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
  
  .rating-number{
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #B9BAC4;
    text-align: center;
    align-items: center;
  }
`;
