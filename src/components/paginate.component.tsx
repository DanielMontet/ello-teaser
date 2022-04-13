import { Pagination } from "@mui/material";

const Paginate = ({ totalContents, contentItemsPerPage, paginate }: any) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalContents / contentItemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="nav">
      <Pagination
        count={pageNumbers.length}
        onChange={(e, page) => paginate(page)}
        variant="outlined"
        color="secondary"
        size="large"
        siblingCount={0}
        boundaryCount={0}
      />
    </nav>
  );
};

export default Paginate;
