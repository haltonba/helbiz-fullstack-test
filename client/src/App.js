import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import VehiclesContainer from "./containers/vehiclesContainer"

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1 id="title">Helbiz Vehicle Statuses 🚲 🛴 🛵</h1>
        <VehiclesContainer/>
      </div>
    </ApolloProvider>
  );
}

export default App;
