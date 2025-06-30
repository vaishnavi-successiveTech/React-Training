"use client";
import React, { useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, TableSortLabel, TablePagination
} from "@mui/material";

// Sample data
const initialData = [
  { id: 1, name: "John", age: 25, email: "j@gmail.com" },
  { id: 2, name: "Nayan", age: 30, email: "nayan@gmail.com" },
  { id: 3, name: "Kavita", age: 22, email: "kavita@gmail.com" },
  { id: 4, name: "Dhariya", age: 28, email: "ddhariya@gmail.com" },
 
];

const DataTable = () => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [page, setPage] = useState(0);
  const rowsPerPage = 4;

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => setPage(newPage);

  const sortedData = [...initialData].sort((a, b) => {
    if (order === "asc") return a[orderBy] > b[orderBy] ? 1 : -1;
    return a[orderBy] < b[orderBy] ? 1 : -1;
  });

  const paginatedData = sortedData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Paper elevation={3} sx={{ width: "100%", overflowX: "auto" }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "name"}
                  direction={orderBy === "name" ? order : "asc"}
                  onClick={() => handleSort("name")}
                >
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "age"}
                  direction={orderBy === "age" ? order : "asc"}
                  onClick={() => handleSort("age")}
                >
                  Age
                </TableSortLabel>
              </TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={initialData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        rowsPerPageOptions={[]}
        onPageChange={handleChangePage}
      />
    </Paper>
  );
};

export default DataTable;
