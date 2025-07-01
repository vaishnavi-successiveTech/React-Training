"use client";

import React, { useState } from "react";

const UserData=({ data })=> {
  const [page, setPage] = useState(0);
  const rowsPerPage = 3; // show 3 users per page
  const start = page * rowsPerPage;
  const end = start + rowsPerPage;
  const paginatedUsers = data.slice(start, end);

  const totalPages = Math.ceil(data.length / rowsPerPage); // by divinding the dat.length by rows we will get totalpage

  return (
    <div>
      <table border="1" cellPadding="5" cellSpacing="0" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {paginatedUsers.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: 10 }}>
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
        >
          Previous
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {page + 1} of {totalPages}
        </span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page + 1 >= totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default UserData;
