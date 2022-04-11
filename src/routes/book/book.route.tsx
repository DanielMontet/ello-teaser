import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext, GlobalContextType, token } from "../../types/types";

export const Token: React.FunctionComponent = () => {
  return <h3>token</h3>;
};

const Book: React.FunctionComponent = () => {
  const { data, handleSplit } = useContext(GlobalContext);

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
            <h3>{item}</h3>
          </Link>
        );
      });

      return links;
    }
    return <span>I am empty</span>;
  };

  return (
    <section>
      {data!.book!.pages!.map(({ content, pageIndex, tokens }: any) => {
        return <p key={pageIndex}>{generateTokenLink(content, tokens)}</p>;
      })}
    </section>
  );
};

export default Book;
