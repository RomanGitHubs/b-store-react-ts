import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface IUlink {
  to: string,
  text: string,
  view: string,
  width?: string,
}

const ULink: React.FC<IUlink> = ({ to, text, view, width }) => {
  return (
    <Body to={to} view={view} width={width}>
      {text}
    </Body>
  );
};

export default ULink;

interface IStyledProps {
  to: string,
  view: string,
  width?: string,
}

const Body = styled(NavLink)<IStyledProps>`
  display: flex;  
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: 2px solid var(--dark_blue);
  font-weight: 500;
  font-size: 16px;
  text-decoration: none;
  width: ${(props) => {
    switch (props.width) {
    case 'long':
      return '220px';

    default:
      return '100px';
    }
  }};

  ${(props) => {
    switch (props.view) {
    case 'primary':
      return css`
        background: var(--dark_blue);
        color: white;

        /* :hover {
          background: #344966c0;
          border: 2px solid #344966c0;
        } */
      `;
    case 'secondary':
      return css`
        background: white;
        color: var(--dark_blue);

        /* :hover {
          background: #e6e6e6;
        } */
      `;
    default:
      return css`
        background: var(--dark_blue);
        color: white;
      `;
    }
  }}
`;
