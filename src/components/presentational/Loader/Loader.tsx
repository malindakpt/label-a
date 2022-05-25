import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styled from 'styled-components';

export const Loader = () => {
  const CenteredContent = styled.div`
    display: grid;
    place-items: center;
  `;
  return (
    <CenteredContent>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    </CenteredContent>
  );
};
