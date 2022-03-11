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
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#ffffff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // margin: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));


export default function SelectFilter(props) {

    const {
        filterList,
        itemIndex,
        handleConditionChange,
        conditionItem,
    } = props;

    // React.useEffect(() => {
    //     const timeOutId = setTimeout(() => {setValue1(value1); setValue2(value2)}, 500);
    //     return () => clearTimeout(timeOutId);
    //   }, [value1, value2]);

    const handleFilterNameChange = (event) => {
        let newCond = { ...conditionItem };
        newCond.filterIdx = event.target.value;
        handleConditionChange(itemIndex, newCond);
    };

    const handleComparisonChange = (event) => {
        let newCond = { ...conditionItem };
        newCond.comparison = event.target.value;
        handleConditionChange(itemIndex, newCond);
    };

    const handleValue1Change = (event) => {
        let newCond = { ...conditionItem };
        newCond.value1 = event.target.value;
        handleConditionChange(itemIndex, newCond);
    };

    const handleValue2Change = (event) => {
        let newCond = { ...conditionItem };
        newCond.value2 = event.target.value;
        handleConditionChange(itemIndex, newCond);
    };

    return (
        <Item>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                xs={12}
                sx={{ padding: 2 }}
            >
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={3}
                    style={{ padding: 6, fontSize: '20px' }}
                >
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Filter Name</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={conditionItem.filterIdx}
                            label="Filter Name"
                            name="Filter Name"
                            onChange={handleFilterNameChange}
                        >
                            {filterList.map((filter) =>
                                <MenuItem
                                    key={filter['id']}
                                    value={filter['id']}
                                >
                                    {filter['filter_name']}
                                </MenuItem>)
                            }
                        </Select>
                    </FormControl>
                </Grid>
                <Grid
                    container
                    item
                    xs={12}
                    md={8}
                >
                    {
                        conditionItem.filterIdx > 1
                        &&
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            style={{ padding: 6 }}
                        >
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Comparator</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={conditionItem.comparison}
                                    label="Comparator"
                                    name="Comparator"
                                    onChange={(event) => {
                                        handleComparisonChange(event);
                                    }}
                                >
                                    <MenuItem value={10}>greater than</MenuItem>
                                    <MenuItem value={20}>less than</MenuItem>
                                    <MenuItem value={30}>equal to</MenuItem>
                                    <MenuItem value={40}>between</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    }
                    {
                        conditionItem.filterIdx > 1
                        &&
                        <Grid
                            container
                            item
                            xs={12}
                            sm={3}
                            justifyContent="flex-start"
                            style={{ padding: 6 }}
                        >
                            <TextField
                                id="standard-basic-value1"
                                label="Value"
                                variant="outlined"
                                fullWidth
                                value={conditionItem.value1}
                                onChange={handleValue1Change}
                            />
                        </Grid>
                    }
                    {
                        conditionItem.comparison === 40
                        &&
                        <Grid
                            container
                            item
                            xs={12}
                            sm={3}
                            justifyContent="flex-start"
                            style={{ padding: 6 }}
                        >
                            <TextField
                                id="standard-basic-value2"
                                label="Value"
                                variant="outlined"
                                fullWidth
                                value={conditionItem.value2}
                                onChange={handleValue2Change}
                            />
                        </Grid>
                    }
                </Grid>
                <Grid
                    item
                    container
                    justifyContent="flex-end"
                    md={1}
                    sx={{
                        mt: {
                            xs: 2,
                            lg: 0
                        }
                    }}
                >
                    <IconButton >
                        <CloseIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </Item>
    );
}


