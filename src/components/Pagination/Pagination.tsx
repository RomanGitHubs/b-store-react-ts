import styled from 'styled-components';
import { useAppDispatch } from '../../store/hooks';

interface IPagi {
  total: number
}

const Pagination: React.FC<IPagi> = ({ total }) => {
  const pageCount = total / 5;
  const dispatch = useAppDispatch();

  return (
    <Body>
      Pagi
    </Body>
  )
}

export default Pagination;

const Body = styled.div`
  display: flex;
  margin: 0 auto;
`;
