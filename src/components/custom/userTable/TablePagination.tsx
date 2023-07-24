import { MenuItem, Select } from "@material-ui/core";
import React from "react";
import { tableSizeOptions } from ".";
import styles from './Table.module.css'

interface TablePaginationProps {
  itemsPerPage: number;
  currentPage: number;
  totalItems: number;
  handleItemsPerPageChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
  handlePageChange: (page: number) => void;
}

const TablePagination: React.FC<TablePaginationProps> = ({
  itemsPerPage,
  currentPage,
  totalItems,
  handleItemsPerPageChange,
  handlePageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div>
      <Select value={itemsPerPage} onChange={handleItemsPerPageChange}>
        {tableSizeOptions.map(option => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
        ))}
      </Select>
      {Array.from({ length: totalPages }).map((_, index) => (
        <button className={`${styles.paginationButton} ${currentPage === index + 1 ? styles.paginationButtonSelected : ""}`} key={index} onClick={() => handlePageChange(index + 1)}>
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default TablePagination;