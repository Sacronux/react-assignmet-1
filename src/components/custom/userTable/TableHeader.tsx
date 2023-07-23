import React from "react";
import { TableCell, TableRow, IconButton, TableHead } from "@material-ui/core";
import { columns } from ".";

interface TableHeaderProps {
  sortBy: string;
  sortOrder: string;
  handleSort: (column: string) => void;
}

const TableHeader: React.FC<TableHeaderProps> = ({ sortBy, sortOrder, handleSort }) => {
  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell key={column}>
            <IconButton onClick={() => handleSort(column)}>
              {column.toUpperCase()}{" "}
              {sortBy === column && <span>{sortOrder === "asc" ? "▲" : "▼"}</span>}
            </IconButton>
          </TableCell>
        ))}
        <TableCell><IconButton>ACTIONS</IconButton></TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;