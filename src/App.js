import RootNavigator from "./navigation";
import store from "./lib/store";
import { Provider } from 'react-redux';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import './App.css';

export const client = new ApolloClient({
  uri: 'https://api.keiwa.app/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <Provider store={store} >
      <ApolloProvider client={client}  >
        <RootNavigator  />
      </ApolloProvider>
    </Provider>
  );
}

export default App;