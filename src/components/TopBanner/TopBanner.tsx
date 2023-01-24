import styled from 'styled-components';
import ULink from '../UI/Link/ULink';
import bannerBooks from '../../assets/banner-books.webp';
import bannerGirl from '../../assets/banner-girl.webp';

const TopBanner: React.FC = () => {
  return (
    <Body>
      <div className='banner__books'/>

      <div className='banner__wrapper'>
        <div className='banner__content'>
          <h2 className='banner__content__title'>Build your library with us</h2>
          <p className='banner__content__text'>Buy two books and<br/>get one for free</p>
          <ULink to='/catalog' text='Choose a book' view='primary' width='long'/>
        </div>

        <div className='banner__girl'/>
        {/* <img className='banner__girl' src={bannerGirl} alt='girl'/> */}
      </div>
    </Body>
  );
};

export default TopBanner;

const Body = styled.section`
  display: flex;
  width: 100%;
  height: 400px;
  background-color: #F0F4EF;
  border-radius: 16px;
  position: relative;
  z-index: 1;

  .banner__books {
    background-image: url(${bannerBooks});
    background-size:cover;
    position: absolute;
    z-index: 2;
    border-radius: 16px;
    height: 265.72px;
    width: 542px;
    left: 0px;
    top: 135px;
  }

  .banner__wrapper {
    display: flex; 
    align-items: center;
    justify-content: space-between;
    width: 1080px;
    z-index: 3;
    margin: 0 auto;
  }

  .banner__content {
    display: flex;
    flex-direction: column;
    margin-left: 25px;
    
    &__title {
      font-weight: 700;
      font-size: 40px;
      line-height: 60px;
      color: var(--dark);
      margin: 0;
      margin-bottom: 10px;
      z-index: 3;
    }
    
    &__text {
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      color: var(--dark_blue);
      margin: 0;
      margin-bottom: 50px;
    }
  }

  .banner__girl {
    background: url(${bannerGirl});
    background-size: cover;
    width: 406px;
    height: 400px;
  }
`;
