import React from 'react';
import { Pagination as MuiPagination } from '@mui/material';

interface PaginationProps {
  total: number;
  currentPage: number;
  pageSize: number;
  onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

const Pagination1: React.FC<PaginationProps> = ({
  total,
  currentPage,
  pageSize,
  onPageChange,
}) => {
  // Total pages calculation
  const totalPages = Math.ceil(total / pageSize);
  console.log(total, currentPage, pageSize)
  return (
    <div className="pagination-container">
      {/* Pagination control from Material-UI */}
      <MuiPagination
        count={totalPages}
        page={currentPage}
        onChange={onPageChange}
        color="primary"
      />
    </div>
  );
};

export default Pagination1;
