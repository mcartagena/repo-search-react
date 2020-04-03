import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import RepoSearch from "./RepoSearch";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: `Bearer 781c31a48bca314a076dfde624fa6d1c98776027`
  }
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <RepoSearch client={client} />
      </div>
    </ApolloProvider>
  );
}

export default App;
