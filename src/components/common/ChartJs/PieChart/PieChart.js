import classNames from 'classnames';
import { useState } from 'react';
import { Pie } from 'react-chartjs-2';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Chart as ChartJS } from 'chart.js/auto';
import styles from './PieChart.module.scss';

export function PieChart({ chartData }) {
  const [userData] = useState({
    labels: chartData.map((data) => data.year),
    datasets: [
      {
        label: 'Users Gained',
        data: chartData.map((data) => data.userGain),
        backgroundColor: ['#143109', '#aaae7f', '#d0d6b3', '#efefef', '#efef99'],
      },
    ],
  });
  return (
    <div className={classNames(styles.chartjs)}>
      <Pie data={userData} />
    </div>
  );
}

export default PieChart;
