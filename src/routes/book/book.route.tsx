import { useContext } from "react";
import { GlobalContext } from "../../types/types";

export const Token: React.FunctionComponent = () => {
  return <h3>token</h3>;
};

const Book: React.FunctionComponent = () => {
  const { data } = useContext(GlobalContext);
  return (
    <section>
      {data!.book!.pages!.map((page: any) => (
        <h3 key={page.pageIndex}>{page.content}</h3>
      ))}
    </section>
  );
};

export default Book;
