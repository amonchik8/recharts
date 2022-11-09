import { FC } from 'react';
import { Container, Recharts } from '../../common';
import { Navigation } from '../../Navigation';
import styles from './Recharts.module.scss';

export interface RechartsPageProps {}

const RechartsPage: FC<RechartsPageProps> = () => {
  return (
    <div className={styles.recharts}>
      <Navigation />
      <Container className={styles.container}>
        <Recharts />
      </Container>
    </div>
  );
};

export default RechartsPage;
