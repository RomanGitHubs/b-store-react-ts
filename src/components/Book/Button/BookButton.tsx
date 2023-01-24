import React from 'react';
import styled, { css } from 'styled-components';

interface IButton {
  title: string,
  available?: boolean,
  func?: React.MouseEventHandler<HTMLButtonElement>,
}

const BookButton: React.FC<IButton> = ({ func, title, available }) => {
  return (
    <Body view={available ? 'catalog' : 'not-availble'} onClick={func}>
      {available ? title : 'Not available'}
    </Body>
  );
};

export default BookButton;

interface IStyledProps {
  id?: number,
  view: string,
}

const Body = styled.button<IStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: var(--dark_blue);
  text-align: center;
  border-radius: 16px;
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 0.75px;
  color: var(--light);

  ${(props) => {
    switch (props.view) {
    case 'not-availble':
      return css`
        width: 305px;
        height: 48px;
        font-size: 20px;
        line-height: 28px;  
        background: #B9BAC3;
        cursor: auto;
      `;
    case 'catalog':
      return css`
        width: 305px;
        height: 48px;
        font-size: 20px;
        line-height: 28px;
      `;
    case 'not-availble-small':
      return css`
      width: 205px;
      height: 48px;
      font-size: 20px;
      line-height: 28px;  
      background: #B9BAC3;
      cursor: auto;
    `;
    case 'catalog-small':
      return css`
        width: 205px;
        height: 48px;
        font-size: 20px;
        line-height: 28px;
      `;
    default:
      return css``;
    }
  }}
`;
