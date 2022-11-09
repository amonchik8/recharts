import classNames from 'classnames';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Chart as ChartJS } from 'chart.js/auto';
import styles from './LineChart.module.scss';

export function LineChart({ chartData }) {
  const [userData] = useState({
    labels: chartData.map((data) => data.year),

    datasets: [
      {
        label: 'Users Gained',
        data: chartData.map((data) => data.userGain),
        backgroundColor: ['#aae97e'],
        borderColor: 'black',
        borderWidth: 1,
      },
    ],
  });
  return (
    <div className={classNames(styles.chartjs)}>
      <Line data={userData} />
    </div>
  );
}

export default LineChart;
