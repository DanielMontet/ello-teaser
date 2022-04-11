import React, { useContext } from "react";
import { createClient, Provider, useQuery } from "urql";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalContext } from "./types/types";
import Book, { Token } from "./routes/book/book.route";
import BookQuery from "./graphql/queries/book/book.query";
import "./App.css";

const client = createClient({
  url: "https://fullstack-engineer-test-n4ouilzfna-uc.a.run.app/graphql",
});

function Main() {
  const [result, reexecuteQuery] = useQuery({ query: BookQuery });
  const { data, fetching, error } = result;

  const handleSplit = (content: string) => {
    return content.split(" ");
  };

  const context = {
    data,
    handleSplit,
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

function App() {
  return (
    <Provider value={client}>
      <Main />
    </Provider>
  );
}

export default App;
