import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FilterBar from './FilterBar';
import Container from '@mui/material/Container';
import PopUpWindow from './PopUpWindow';


export default function Screener() {

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState('abcdef');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <Box sx={{ minWidth: 275, m: 10, }}>
      <Card variant="contained" style={{backgroundColor: "#ededed"}}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
            Help me find stocks that...
          </Typography>
          <FilterBar />
        </CardContent>
        <CardActions>
          <Button 
            variant='contained' 
            color='primary' 
            sx={{ml: 1, mb: 1.5}} 
            style={{backgroundColor: "#707070"}}
            onClick={handleClickOpen}
          >
            + Add filter
          </Button>
          <PopUpWindow
            selectedValue={selectedValue}
            open={open}
            onClose={handleClose}
          />
        </CardActions>
      </Card>
    </Box>
  );
}