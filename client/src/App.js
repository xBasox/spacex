import "../node_modules/bootswatch/dist/cyborg/bootstrap.min.css";
import "./App.css";
import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "https://localhost:5000/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <h1>SpaceX</h1>
      </div>
    </ApolloProvider>
  );
}

export default App;
