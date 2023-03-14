import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../store/hooks';
import TopBanner from '../../components/TopBanner/TopBanner';
import AuthBanner from '../../components/AuthBanner/AuthBanner';
import CatalogBody from '../../components/CatalogBody/CatalogBody';

const Home: React.FC = () => {
  const user = useAppSelector((state) => state.userSlice.user);
  const [openFilter, setOpenFilter] = useState<string>('');

  const handleCloseFilter = () => {
    setOpenFilter('');
  };

  return (
    <Body onClick={handleCloseFilter}>
      <TopBanner />
      <CatalogBody openFilter={openFilter} setOpenFilter={setOpenFilter} />
      {user ? null : <AuthBanner />}
    </Body>
  );
};

export default Home;

const Body = styled.main`
  margin: 40px auto 150px;
  padding: 0 calc((1.3% - 9px) * 8); 
  max-width: var(--width_content);
`;
