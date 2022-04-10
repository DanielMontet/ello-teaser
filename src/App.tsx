import React, { useContext } from "react";
import { createClient, Provider, useQuery } from "urql";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalContext } from "./types/types";
import Book, { Token } from "./routes/book/book.route";

const client = createClient({
  url: "https://fullstack-engineer-test-n4ouilzfna-uc.a.run.app/graphql",
});

const BookQuery = `
  query {
    book {
      author
      pages {
        pageIndex
        content
        tokens {
          position
          value
        }
      }
      title
    }
  }
`;

function App() {
  return (
    <Provider value={client}>
      <Main />
    </Provider>
  );
}

export default App;

function Main() {
  const [result, reexecuteQuery] = useQuery({ query: BookQuery });
  const { data, fetching, error } = result;

  const context = {
    data,
  };

  const handleSplit = (content: string) => {
    return content.split(" ");
  };

  if (fetching) return <p>Loading....</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <GlobalContext.Provider value={context}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Book />} />
          <Route path="/:slug" element={<Token />} />
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}
