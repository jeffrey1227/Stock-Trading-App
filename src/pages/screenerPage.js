import React, { Fragment } from 'react';
import Screener from '../features/screener/Screener';
import DataTable from '../features/dataTable/DataTable';
import Container from '@mui/material/Container';


function ScreenerPage() {
  return (
        <Container maxWidth="lg">
            <Screener />
            <DataTable />
        </Container>
    );
}

export default ScreenerPage;