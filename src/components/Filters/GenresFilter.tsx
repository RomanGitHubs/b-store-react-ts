import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { reqGenres } from '../../store/reducers/request';
import { getGenres } from '../../api/services/genres';
import UCheckbox from '../UI/Checkbox/UCheckbox';
import genres from '../../api/temp/genres';
import { Genre } from '../../models/genre';

const GenresFilter: React.FC = () => {
  const [loadedGenres, setLoadGenre] = useState(genres);
  const { selectedGenres } = useAppSelector((state) => state.requestSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        // const genres = await getGenres();
        // console.log('Load Genres >>> ', genres.data);

        // setLoadGenre(genres.data);
        // console.log('Load Genres >>> ', loadedGenres);
        // dispatch(putGenres(genres.data));
      } catch (e: any) {
        console.error('Error >>> ', e.response.data);
      }
    })();
  }, []);

  const handleSelectGenre = (genre: Genre) => {
    const tempArray = selectedGenres.slice();
    const findIndex = tempArray.findIndex((item) => item === genre.genreId);
    if (tempArray[findIndex]) {
      // console.log('Find >>> ', findIndex);
      tempArray.splice(findIndex, 1);
    } else {
      tempArray.push(genre.genreId);
    }

    dispatch(reqGenres({ genresId: tempArray }));

    // console.log('SENDed Genres >>> ', tempArray);
  };

  return (
    <Body>
      {loadedGenres?.map((item) => (
        <UCheckbox
          key={item.genreId}
          func={handleSelectGenre}
          genre={item}
          selectedGenres={selectedGenres}
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
