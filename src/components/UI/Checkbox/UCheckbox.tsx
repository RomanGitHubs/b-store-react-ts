import styled from 'styled-components';
import fillChBox from '../../../assets/checkbox-checked.svg';
import emptyChBox from '../../../assets/checkbox-empty.svg';
import { Genre } from '../../../models/genre';

interface ICheckbox {
  genre: Genre
  func: (item: Genre) => void;
  selectedGenres: number[]
}

const UCheckbox: React.FC<ICheckbox> = ({ genre, func, selectedGenres }) => {
  return (
    <Body>
      <input
        type="checkbox"
        className="ucheckbox"
        checked={selectedGenres.includes(genre.genreId)}
        onChange={() => func(genre)}
      />

      <span className="fake-checkbox"/>

      {genre.genre}
    </Body>
  );
};

export default UCheckbox;

const Body = styled.label`
  display: flex;
  height: 28px;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  align-items: center;
  letter-spacing: 0.75px;
  color: var(--dark_blue);
  margin-bottom: 10px;
  cursor: pointer;

  :last-child {
    margin: 0;
  }

  .ucheckbox { 
    opacity: 0;
    position: absolute;
    left: -100000px;
  }

  .fake-checkbox {
    position: relative;
    display: inline-block;
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: -2px;
    margin-right: 7px;
  }

  .fake-checkbox::before,
  .fake-checkbox::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url(${emptyChBox}) no-repeat center / contain;
  }

  .fake-checkbox::after {
    background: url(${fillChBox})  no-repeat center / contain;
    opacity: 0;
  }

  .ucheckbox:checked + .fake-checkbox::before {
    opacity: 0;
  }

  .ucheckbox:checked + .fake-checkbox::after {
    opacity: 1;
  }

  .ucheckbox:focus + .fake-checkbox {
    outline:  #34496624 solid 5px;
    border-radius: 20px;
  }
`;
