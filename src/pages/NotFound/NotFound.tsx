import React from 'react';
import './notFound.css';
import styled from 'styled-components';
// import { useScreenSize } from '../../hooks/useScreenSize';

const NotFound: React.FC = () => {
  // const [height, width] = useScreenSize();

  // console.log('useScreenSize >>> ', {height, width});
  return (
    <Body>
      <div className="error">
        <div className="number">4</div>
        <div className="illustration">
          <div className="circle"></div>
          <div className="clip">
            <div className="paper">
              <div className="face">
                <div className="eyes">
                  <div className="eye eye-left"></div>
                  <div className="eye eye-right"></div>
                </div>
                <div className="rosyCheeks rosyCheeks-left"></div>
                <div className="rosyCheeks rosyCheeks-right"></div>
                <div className="mouth"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="number">4</div>
      </div>

      <div className="text">Ups... page not found</div>

    </Body>
  );
};

export default NotFound;

const Body = styled.main`
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 112px - 295px);
  align-items: center;
`;
