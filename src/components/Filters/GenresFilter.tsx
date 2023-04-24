import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { reqGenres, reqPagination } from '../../store/reducers/request';
import UCheckbox from '../UI/Checkbox/UCheckbox';
import { GenreModel } from '../../models/genre';
import { putCatalogBooks } from '../../store/reducers/book';

const GenresFilter: React.FC = () => {
  const genres = useAppSelector((state) => state.bookSlice.genres);
  const { selectedGenres } = useAppSelector((state) => state.requestSlice);
  const dispatch = useAppDispatch();

  const handleSelectGenre = (genre: GenreModel) => {
    const tempArray = [...selectedGenres];
    const findIndex = tempArray.findIndex((item: string) => item === genre.genreId);
    if (tempArray[findIndex]) {
      tempArray.splice(findIndex, 1);
    } else {
      tempArray.push(genre.genreId);
    }
    dispatch(reqGenres({ genresId: tempArray }));
    dispatch(reqPagination(0));
    dispatch(putCatalogBooks([]));
  };

  return (
    <Body>
      {genres?.map((item) => (
        <UCheckbox
          key={item.genreId}
          func={handleSelectGenre}
          genre={item}
          selectedGenres={selectedGenres}
          count={item.countBooks}
        />
      ))}
    </Body>
  );
};

export default GenresFilter;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--light);
  position: absolute;
  left: 0px;
  top: 60px;
  z-index: 2;
  padding: 15px;
  border-radius: 16px;
  width: max-content;
  cursor: default;
`;
