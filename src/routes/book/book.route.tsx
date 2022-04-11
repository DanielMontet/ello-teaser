import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalContext, token } from "../../types/types";

export const Token: React.FunctionComponent = () => {
  let params = useParams();
  return <h3>{params.slug}</h3>;
};

const Pagination = ({ totalContents, contentItemsPerPage, paginate }: any) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalContents / contentItemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      {pageNumbers.map((number) => (
        <div key={number} className="page-item">
          <span onClick={() => paginate(number)} className="page-link">
            {number}
          </span>
        </div>
      ))}
    </nav>
  );
};

const Book: React.FunctionComponent = () => {
  const { data, handleSplit } = useContext(GlobalContext);
  const [page, setPage] = useState(0);
  const pageLength = 2;
  const pagesVisited = page * pageLength;

  const [currentPage, setCurrentPage] = useState(1);
  const [contentItemsPerPage] = useState(2);

  const generateTokenLink = (content: string, tokens: token[]) => {
    if (content.length && tokens.length) {
      // split the content string
      let result = handleSplit!(content);
      // filter out special characters from content that are not tokenized
      result = result.filter((word) => {
        if (word !== "-") {
          return word;
        }
      });

      const links = result.map((item, index) => {
        let { value } = tokens[index];
        return (
          <Link to={`/${value}`} key={index}>
            <span>{item}</span>
          </Link>
        );
      });

      return links;
    }
    return <span></span>;
  };
  // get current contents
  const indexOfLastContentItems = currentPage * contentItemsPerPage;
  const indexOfFirstContentItems =
    indexOfLastContentItems - contentItemsPerPage;
  const currentContent = data?.book?.pages
    ?.slice(indexOfFirstContentItems, indexOfLastContentItems)
    .map(({ content, pageIndex, tokens }: any) => {
      return <p key={pageIndex}>{generateTokenLink(content, tokens)}</p>;
    });

  // console.log(currentContent);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const displayBook = data?.book
    ?.pages!.slice(pagesVisited, pagesVisited + pageLength)
    .map(({ content, pageIndex, tokens }: any) => {
      return <p key={pageIndex}>{generateTokenLink(content, tokens)}</p>;
    });

  return (
    <section>
      <section>{currentContent}</section>
      <Pagination
        totalContents={data?.book?.pages?.length}
        contentItemsPerPage={contentItemsPerPage}
        paginate={paginate}
      />
    </section>
  );
};

export default Book;
