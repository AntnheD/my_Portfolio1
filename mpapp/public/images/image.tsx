import { Box, Typography, styled } from '@mui/material'; // If using Material UI

const Item = styled(Box)(({ theme }) => ({ // If using Material UI
  padding: theme.spacing(4),
  border: '1px solid #ddd',
  textAlign: 'center',
}));

const FilterProject = styled(Typography)(({ theme }) => ({ // If using Material UI
  fontSize: '2em',
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
}));

const Categories = styled(Typography)(({ theme }) => ({ // If using Material UI
  fontSize: '1.2em',
  marginBottom: theme.spacing(4),
}));

const Number = styled(Typography)({ // If using Material UI
  fontSize: '2em',
  fontWeight: 'bold',
});


function MyComponent() {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 4 }}>
      <Box sx={{ flex: 1 }}>
        <Item> {/* Use Material UI Box with styling */}
          <FilterProject variant="h5">FILTER</FilterProject>
          <Categories>Categories Available</Categories>
          <Number>12</Number>
          <Categories>Coding Achievements</Categories>
        </Item>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Item> {/* Use Material UI Box with styling */}
          <FilterProject variant="h5">PROJECT</FilterProject>
          <Categories>Software Projects</Categories>
          <Number>20</Number>
          <Categories>Potential Employers</Categories>
        </Item>
      </Box>
    </Box>
  );
}

export default MyComponent;