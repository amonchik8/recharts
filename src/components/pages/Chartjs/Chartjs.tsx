import { FC } from 'react';
import { CHART_DATA } from '../../../data';
import { Container, LineChart, PieChart } from '../../common';
import { Navigation } from '../../Navigation';
import styles from './Chartjs.module.scss';

export interface ChartjsPageProps {}

const ChartjsPage: FC<ChartjsPageProps> = () => {
  return (
    <div className={styles.chartjs}>
      <Navigation />
      <Container className={styles.container}>
        <LineChart chartData={CHART_DATA} />
        <PieChart chartData={CHART_DATA} />
      </Container>
    </div>
  );
};

export default ChartjsPage;
