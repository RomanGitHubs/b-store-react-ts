import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { logoutUser } from '../../store/reducers/user';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import logo from '../../assets/logo-footer.svg';
import map from '../../assets/mapa.webp';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userSlice.user);

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(logoutUser());
    navigate('/');
  };

  return (
    <Wrapper>
      <Body>

        <div className='footer-column'>
          <NavLink to={'/'} className='footer-column__logo'>Footer logo</NavLink>
          <span className='footer-column__title'>roman.shiryaev.ru@gmail.com</span>
          <span className='footer-column__title'>+7 (928) 169-56-50 </span>
        </div>

        <div className='footer-column'>
          <NavLink to="/" className='footer-link'>Home Page</NavLink>
          <NavLink to="/catalog" className='footer-link'>Catalog</NavLink>
          <NavLink to="/cart" className='footer-link'>Cart</NavLink>
          {user && <NavLink to="/favorite" className='footer-link'>Favorite</NavLink>}
          {user && <NavLink to="/profile" className='footer-link'>My Account</NavLink>}
          {user && <NavLink to="#" onClick={handleLogout} className='footer-link'>Log out</NavLink>}
        </div>

        <div className='footer-column'>
          <span className='footer-column__title'>Rostov region, Russian Federation</span>
          <img className='footer-column__map' src={map} alt='map'/>
        </div>

      </Body>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  background-color: var(--dark);
  flex: 0 0 auto;
`;

const Body = styled.div`
  display: flex;
  max-width: var(--width_content);
  width: 100%;
  justify-content: space-between;
  margin: 50px auto;
  padding: 0 calc((1.3% - 9px) * 8);

  .footer-column {
    display: flex;
    flex-direction: column;

    :nth-child(2) {
      margin: 0 15px;
    }

    &__logo {
      width: 89px;
      height: 46px;
      margin-bottom: 40px;
      background-image: url(${logo});
      color: #00000000;
      font-size: 1px;
    }

    &__title {
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      color: var(--light);
      margin: 0 0 5px;
    }
    
    &__map {
      display: flex;
      max-width: 416px;
      max-height: 160px;
      width: 100%;
      height: 100%;
      border-radius: 10px;

      @media screen and (max-width: 480px){
        width: 260px;
        height: 100px;
      }
    }
  }

  .footer-link {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: var(--light);
    margin: 0;
    margin-bottom: 5px;
    text-decoration: none;
    width: 130px;
  }

  .active {
    font-weight: 600;
  }
`;
