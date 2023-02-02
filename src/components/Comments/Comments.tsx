import React, { useState } from 'react';
import styled from 'styled-components';
import comments from '../../api/temp/comments';
import UButton from '../UI/Button/UButton';

const Comments: React.FC = () => {
  const [text, setText] = useState('');

  const handlePostComment = () => {
    setText('');
  };

  return (
    <Body>
      <h2 className='comments__title'>Comments</h2>

      {comments.map((item) => (
        <div className='comment' key={item.commentId}>
          <div className='comment__photo'>
            <img src={item.photo} alt='photo'/>
          </div>

          <div className='comment__description'>
            <h4 className='comment__author'>{item.author}</h4>

            <span className='comment__timer'>{item.timer}</span>

            <p className='comment__text'>{item.text}</p>
          </div>
        </div>
      ))}

      <textarea className='comment__textarea' placeholder='White here' value={text} onChange={(e) => setText(e.target.value)}/>

      <UButton text='Post comment' view='primary' onClick={handlePostComment}/>
    </Body>
  );
};

export default Comments;

const Body = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin-bottom: 110px;

  .comments__title {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    margin: 110px 0 50px;
    color: var(--dark__blue) 
  }

  .comment {
    display: flex;
    background: var(--light);
    border-radius: 15px;
    padding: 30px 30px 25px 30px;
    margin-bottom: 10px;

    &__photo img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

    &__description {
      display: flex;
      flex-direction: column;
      margin-left: 20px;
    }

    &__author {
      margin: 0;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.75px;
      color: var(--dark__blue) 
    }

    &__timer {
      font-weight: 500;
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
      letter-spacing: 0.75px;    
      color: var(--dark_grey) 
    }

    &__text {
      margin: 0;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.75px;   
      color: var(--dark__blue) 
    }

    &__textarea {
      margin: 60px 0 30px;
      padding: 20px 24px;
      border-radius: 15px;
      background: var(--light);
      border: none;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      letter-spacing: 0.75px;  
      outline: none;
      resize: none;
      height: 120px;
    }
  }
`;
