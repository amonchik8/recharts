import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Chartjs from './components/pages/Chartjs/Chartjs';
import Graphql from './components/pages/Graphql/Graphql';
import Recharts from './components/pages/Recharts/Recharts';
import reportWebVitals from './reportWebVitals';
import { client } from './graphql/client';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/recharts" element={<Recharts />} />
        <Route path="/chart-js" element={<Chartjs />} />
        <Route path="/graph-ql" element={<Graphql />} />
      </Routes>
    </BrowserRouter>
  </ApolloProvider>
);

reportWebVitals();
