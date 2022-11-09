import { FC } from 'react';
import { Container, Graphql } from '../../common';
import { Navigation } from '../../Navigation';
import styles from './Graphql.module.scss';

export interface GraphqlPageProps {}

const GraphqlPage: FC<GraphqlPageProps> = () => {
  return (
    <div className={styles.graphql}>
      <Container className={styles.container}>
        <Navigation />
        <Graphql />
      </Container>
    </div>
  );
};

export default GraphqlPage;
