import React, { useState } from 'react';
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Typography } from '@mui/material';
import { userData } from '../utils/constants';

function LandingTable() {
  // Sample data: Replace this with dynamic data from your API or backend
  const rows = userData;

  // State for pagination
  const [page, setPage] = useState(0); // current page
  const [rowsPerPage, setRowsPerPage] = useState(5); // rows per page

  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to first page when rows per page change
  };

  // Get current rows to display based on pagination
  const currentRows = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    
        <Paper sx={{ padding: 2 }}>
          <Typography variant="h6" gutterBottom>
            Client Earnings and Expenditures
          </Typography>
          <TableContainer>
            <Table sx={{ textAlign: 'center' }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ textAlign: 'center', background: 'gray', padding: '8px' }}>Client</TableCell>
                  <TableCell sx={{ textAlign: 'center', background: 'gray', padding: '8px' }}>Total</TableCell>
                  <TableCell sx={{ textAlign: 'center', background: 'gray', padding: '8px' }}>Order Num</TableCell>
                  <TableCell sx={{ textAlign: 'center', background: 'gray', padding: '8px' }}>Contact</TableCell>
                  <TableCell sx={{ textAlign: 'center', background: 'gray', padding: '8px' }}>Address</TableCell>
                  <TableCell sx={{ textAlign: 'center', background: 'gray', padding: '8px' }}>Phone</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentRows.map((row) => (
                  <TableRow key={row.id} sx={{ fontSize: '8px' }}>
                    <TableCell sx={{ textAlign: 'center', fontSize: '13px' }}>{row.name}</TableCell>
                    <TableCell sx={{ textAlign: 'center', fontSize: '13px' }}>{row.earnings}</TableCell>
                    <TableCell sx={{ textAlign: 'center', fontSize: '13px' }}>{row.expenditure}</TableCell>
                    <TableCell sx={{ textAlign: 'center', fontSize: '13px' }}>{row.contact}</TableCell>
                    <TableCell sx={{ textAlign: 'center', fontSize: '13px' }}>{row.address}</TableCell>
                    <TableCell sx={{ textAlign: 'center', fontSize: '13px' }}>{row.phone_number}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination */}
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]} // Options for how many rows per page
            component="div"
            count={rows.length} // Total number of rows
            rowsPerPage={rowsPerPage} // Number of rows per page
            page={page} // Current page
            onPageChange={handleChangePage} // Page change handler
            onRowsPerPageChange={handleChangeRowsPerPage} // Rows per page change handler
            sx={{
              '& .MuiTablePagination-select': {
                fontSize: '1rem', // Change the font size of the dropdown options (5, 10, 25)
              },
              '& .MuiTablePagination-actions': {
                fontSize: '0.6rem', // Change font size for the pagination buttons (Next, Previous)
              },
              '& .MuiTablePagination-toolbar': {
                fontSize: '0.6rem', // Change font size of the entire toolbar area if needed
              },
            }}
          />
        </Paper>
     
  );
}

export default LandingTable;
