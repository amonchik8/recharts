import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './components/common';
import styles from './App.module.scss';

export interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <div className={styles.app}>
      <header>
        <Container className={styles.container}>
          <Link className={styles.link} to="/recharts" />
          <Link className={styles.link} to="/chart-js" />
          <Link className={styles.link} to="/graph-ql" />
        </Container>
      </header>
    </div>
  );
};

export default App;
