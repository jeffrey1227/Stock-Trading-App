import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'symbol', headerName: 'Symbol', width: 150 },
    { field: 'open', headerName: 'Open', width: 150 },
    { field: 'high', headerName: 'High', width: 150 },
    { field: 'low', headerName: 'Low', width: 150 },
    { field: 'close', headerName: 'Close', width: 150 },
    { field: 'adjusted_close', headerName: 'Adjusted Close', width: 200 },
    { field: 'volume', headerName: 'Volume', width: 150 },
];

// Data table for display search result
const DataTable = ({stock_json}) => {
    return (
        <div style={{ height: 600, width: "100%" }}>
            <DataGrid
                rows={stock_json}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
            />
        </div>
    );
}

export default DataTable;