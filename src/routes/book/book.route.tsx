import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Paginate from "../../components/paginate.component";
import { GlobalContext, token } from "../../types/types";

const Book: React.FunctionComponent = () => {
  const { data, handleSplit } = useContext(GlobalContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [contentItemsPerPage] = useState(2);
  const { pages } = data?.book!;

  // get current contents
  const indexOfLastContentItems = currentPage * contentItemsPerPage;
  const indexOfFirstContentItems =
    indexOfLastContentItems - contentItemsPerPage;

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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

  const currentContent = pages
    ?.slice(indexOfFirstContentItems, indexOfLastContentItems)
    .map(({ content, pageIndex, tokens }: any) => {
      return <p key={pageIndex}>{generateTokenLink(content, tokens)}</p>;
    });

  return (
    <section className="book-container">
      <section className="book-content">{currentContent}</section>
      <Paginate
        totalContents={pages!.length}
        contentItemsPerPage={contentItemsPerPage}
        paginate={paginate}
      />
    </section>
  );
};

export default Book;
