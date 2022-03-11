import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { v4 as uuidv4 } from 'uuid';

import FilterBar from '../filterBar/FilterBar';
import PopUpWindow from '../popUpWindow/PopUpWindow';
import SelectFilter from '../selectFilter/SelectFilter';


async function getList(url = 'http://52.91.71.191/api/v1/screeners/filters') {
    const response = await fetch(url);
    return response.json();
}

async function postData(url, data) {
    const response = await fetch(url, { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
    return response.json();
}

let i = 0;

export default function Screener() {
    // filterList
    const [filterList, setFilterList] = React.useState([]);
    React.useEffect(async () => {
        const filterList = await getList();
        for (var i = 0; i < filterList.length; i++) {
            filterList[i]['id'] = i;
        }
        setFilterList(filterList);
    }, [])

    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState('');
    const [filter, setFilter] = React.useState([]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);

    };

    // const onSelect = (itemIndex, filterIdx) => {
    //   items[itemIndex] = (<NumericalBar itemIndex={itemIndex} filterList={filterList} fIdx={filterIdx}/>);
    //   setItems({ items: [...items] });
    // }

    const [conditions, setConditions] = React.useState([])

    const handleConditionChange = (itemIndex, updatedCond) => {
        // console.log(itemIndex);
        // console.log(updatedCond);
        let newCond = [...conditions];
        newCond[itemIndex] = updatedCond;
        // console.log(newCond);
        setConditions(newCond);
        // console.log(conditions);
    }

    const addItem = () => {
        i++;
        let newCondition = [...conditions];
        newCondition.push({
            filterIdx: 0,
            comparison: "",
            value1: 0,
            value2: 0,
            id: uuidv4(),
        });
        setConditions(newCondition);
        // console.log(conditions);
    };

    // const removeItem = (itemIndex) => {
    //     let newItems = items.slice();
    //     newItems.splice(itemIndex, 1);
    //     setItems({ items: [...newItems] });
    //     // console.log(items);
    // }


    const search = async () => {
        // POST request
        console.log(conditions);
        let data = [];
        for (var i = 0; i < conditions.length; i++) {
            data.push(filterList[conditions[i]['filterIdx']]['filter_name']);
            if (conditions[i]['comparison'] === 10) {
                data.push('>');
                data.push(conditions[i]['value1']);
            } else if (conditions[i]['comparison'] === 20) {
                data.push('<');
                data.push(conditions[i]['value1']);
            } else if (conditions[i]['comparison'] === 30) {
                data.push('=');
                data.push(conditions[i]['value1']);
            } else {
                data.push('BETWEEN');
                data.push(conditions[i]['value1']);
                data.push(conditions[i]['value2']);
            }
        }
        console.log(data);
        const res = await postData("http://52.91.71.191/api/v1/screeners/prices_by_filters?date=2021-08-10&sortby=volume%20%2A%20close&order=DESC", data);
        console.log(res);
    }


    return (
        <Box
            sx={{
                my: 5,
                mx: {
                    xs: 0,
                    lg: 10
                }
            }}
        >
            <PopUpWindow
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
            />
            <Card variant="contained" style={{ backgroundColor: "#ededed" }}>
                <CardContent>
                    <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom style={{ marginBottom: 12 }}>
                        Find stocks that...
                    </Typography>
                    <div>
                        <Stack spacing={2}>
                            {conditions.map((condition, index) =>
                                <SelectFilter
                                    key={condition.id}
                                    filterList={filterList}
                                    itemIndex={index}
                                    conditionItem={condition}
                                    handleConditionChange={handleConditionChange}
                                />)}
                        </Stack>
                    </div>
                </CardContent>
                <CardActions>
                    <Grid
                        container
                        sx={{ p: 1 }}
                        justifyContent="space-between"
                    >
                        <Grid
                            container
                            item
                            xs={6}
                            sm={8}
                            sx={{ flexGrow: 1 }}
                            alignItems="center"
                        >
                            <Button
                                variant='contained'
                                color='primary'
                                style={{ backgroundColor: "#707070" }}
                                onClick={addItem}
                            >
                                + Add filter
                            </Button>
                        </Grid>
                        <Grid
                            container
                            item
                            xs={3}
                            sm={4}
                            alignItems="center"
                            justifyContent="flex-end"
                        >
                            <Button
                                variant='contained'
                                color='secondary'
                                style={{ backgroundColor: "#707070" }}
                                onClick={search}
                            >
                                Search
                            </Button>
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        </Box>
    );
}