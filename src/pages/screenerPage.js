import React, { Fragment } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Screener from '../features/screener/Screener';
import DataTable from '../features/dataTable/DataTable';


const ScreenerPage = () => {
    return (
        <Container maxWidth="lg">
            <Screener />
            <Box
                sx={{
                    my: 5,
                    mx: {
                        xs: 0,
                        lg: 10
                    }
                }}
            >
                <DataTable />
            </Box>
        </Container>
    );
}

export default ScreenerPage;