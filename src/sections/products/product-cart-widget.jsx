import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({

  right: 0,
  display: 'flex',
  cursor: 'pointer',
  alignItems: 'center',
  justifyContent: 'end',
  top: theme.spacing(16),
  height: theme.spacing(5),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(1.25),
  
  color: theme.palette.text.primary,


}));

// ----------------------------------------------------------------------

export default function CartWidget() {
  return (
    <StyledRoot>
      <Button variant="contained" sx={{ ml: 1 }}>
        Import products
      </Button>
    </StyledRoot>
  );
}
