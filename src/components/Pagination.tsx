import { IconButton, Box } from "@mui/material";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
};

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const renderPageIndicators = () => {
    const indicators = [];
    for (let i = 1; i <= totalPages; i++) {
      indicators.push(
        <Box
          key={i}
          sx={{
            width: 24,
            height: 24,
            borderRadius: '50%',
            backgroundColor: i === currentPage ? 'primary.main' : 'grey.300',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
          onClick={() => onPageChange(i)}
        >
          {i}
        </Box>
      );
    }
    return indicators;
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
      <IconButton
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <AiOutlineLeft />
      </IconButton>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        {renderPageIndicators()}
      </div>
      <IconButton
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <AiOutlineRight />
      </IconButton>
    </div>
  );
};

export default Pagination;