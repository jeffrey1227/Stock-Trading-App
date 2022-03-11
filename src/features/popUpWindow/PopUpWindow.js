import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DialogActions from '@mui/material/DialogActions';

import TabPanel from '../tabPanel/TabPanel';
import AdvancedList from '../advancedList/AdvancedList';


export default function PopUpWindow(props) {
    // dialog
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    // tab
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    // select
    const [comparator, setComparator] = React.useState(0);

    return (
        <Dialog
            onClose={handleClose}
            open={open}
            fullWidth
            maxWidth='md'
        >
            {/* <DialogTitle>Filter</DialogTitle> */}
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Basic" {...a11yProps(0)} />
                        <Tab label="Advanced" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    Basic Items
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                    >
                        <Grid item md={3} style={{ padding: 0, margin: 0 }}>
                            <AdvancedList />
                        </Grid>
                        <Grid item md={9} style={{ padding: 0, margin: 0 }}>
                            <Grid
                                container
                                direction="column"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                            >
                                <Grid item md={10} style={{ padding: 0, margin: 5 }}>
                                    <Typography sx={{ fontSize: 16 }}>
                                        Search for companies...
                                    </Typography>
                                </Grid>

                                <Grid item md={10} style={{ padding: 0, margin: 5 }}>
                                    <TextField id="outlined-basic" label="Formula" variant="outlined" style={{ width: 360, height: 100 }} />
                                </Grid>
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="flex-start"
                                >
                                    <Grid item md={5} style={{ padding: 0, margin: 5, textAlign: 'center', fontSize: '20px' }}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Comparator</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={comparator}
                                                label="Volume"
                                                onChange={handleChange}
                                            >
                                                <MenuItem value={1}>greater than</MenuItem>
                                                <MenuItem value={-1}>less than</MenuItem>
                                                <MenuItem value={0}>equal to</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item md={5} style={{ padding: 0, margin: 5, textAlign: 'center', fontSize: '20px' }}>
                                        <TextField id="standard-basic" label="Value" variant="standard" />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </TabPanel>
            </Box>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                <Button onClick={handleClose} autoFocus>
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
}

PopUpWindow.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};