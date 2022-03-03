import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#ffffff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));




export default function FilterBar() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div >
      <Stack spacing={2}>
        <Item>
          <Grid 
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Grid md={2} style={{padding: 6, margin: 0, textAlign: 'center', fontSize: '20px'}}>
              Volume is 
            </Grid>
            <Grid md={2} style={{padding: 6, margin: 0, textAlign: 'center', fontSize: '20px'}}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Comparator</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Volume"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>greater than</MenuItem>
                  <MenuItem value={20}>less than</MenuItem>
                  <MenuItem value={30}>equal to</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid md={2} style={{padding: 6, margin: 0, textAlign: 'center', fontSize: '20px'}}>
              <TextField id="standard-basic" label="Value" variant="standard" />
            </Grid>
            <Grid md={5} style={{padding: 6, margin: 0, textAlign: 'center', fontSize: '20px'}}>
              
            </Grid>
            <Grid md={1} style={{padding: 6, margin: 0, textAlign: 'center', fontSize: '20px'}}>
              <Button variant='contained' color='primary' sx={{ml: 1, mb: 1.5}} style={{backgroundColor: "#707070"}}>X</Button>
            </Grid>
          </Grid>
        </Item>
      </Stack>
    </div>
  );
}

          
