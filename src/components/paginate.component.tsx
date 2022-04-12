import { Pagination } from "@mui/material";

const Paginate = ({ totalContents, contentItemsPerPage, paginate }: any) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalContents / contentItemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="nav">
      {/* {pageNumbers.map((number) => (
        <div
          key={number}
          onClick={() => paginate(number)}
          className="page-item"
        >
          {number}
        </div>
      ))} */}
      <Pagination
        count={pageNumbers.length}
        onChange={(e, page) => paginate(page)}
        variant="outlined"
        color="secondary"
      />
    </nav>
  );
};

export default Paginate;
