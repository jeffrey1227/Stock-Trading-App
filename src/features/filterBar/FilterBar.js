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
import CloseIcon from '@mui/icons-material/Close';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#ffffff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));




export default function FilterBar(props) {

    const {
        comparison,
        label,
        value1,
        value2,
        setComparison,
        setValue1,
        setValue2,
    } = props;
    
    const handleChange = (event) => {
        setComparison(event.target.value);
    };

    const handleValue1Change = (event) => {
        setValue1(event.target.value);
    };

    const handleValue2Change = (event) => {
        setValue2(event.target.value);
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
                        <Grid item md={2} style={{ padding: 6, margin: 0, textAlign: 'center', fontSize: '20px' }}>
                            {label} is
                        </Grid>
                        <Grid item md={2} style={{ padding: 6, margin: 0, textAlign: 'center', fontSize: '20px' }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Comparator</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={comparison}
                                    label="Comparator"
                                    name="Comparator"
                                    onChange={(event) => {
                                        handleChange(event);
                                    }}
                                >
                                    <MenuItem value={">"}>greater than</MenuItem>
                                    <MenuItem value={"<"}>less than</MenuItem>
                                    <MenuItem value={"="}>equal to</MenuItem>
                                    <MenuItem value={"BETWEEN"}>between</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid
                            container
                            item
                            md={7}
                            justifyContent="flex-start"
                            style={{ padding: 6, margin: 0, textAlign: 'center', fontSize: '20px' }}
                        >
                            <TextField
                                id="standard-basic-value1"
                                label="Value"
                                variant="standard"
                                value={value1}
                                onChange={handleValue1Change}
                            />
                            {
                                comparison == "BETWEEN"
                                &&
                                <div style={{ paddingLeft: 12 }}>
                                    <TextField
                                        id="standard-basic-value2"
                                        label="Value"
                                        variant="standard"
                                        value={value2}
                                        onChange={handleValue2Change}
                                    />
                                </div>
                            }
                        </Grid>
                        <Grid item md={1} style={{ padding: 6, margin: 0, textAlign: 'center', fontSize: '20px' }}>
                            <Button variant='contained' color='primary' sx={{ ml: 1, mb: 1.5 }} style={{ backgroundColor: "#707070" }}>X</Button>
                        </Grid>
                    </Grid>
                </Item>
            </Stack>
        </div>
    );
}


