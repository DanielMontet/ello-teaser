import React from "react";
import { createClient, Provider, useQuery } from "urql";
import { BrowserRouter } from "react-router-dom";

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

const Book = () => {
  const [result, reexecuteQuery] = useQuery({ query: BookQuery });
  const { data, fetching, error } = result;

  if (fetching) return <p>Loading....</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <ul>
      {data.book.pages.map((page: any) => (
        <li key={page.pageIndex}>{page.content}</li>
      ))}
    </ul>
  );
};

function App() {
  return (
    <Provider value={client}>
      <Book />
    </Provider>
  );
}

export default App;
