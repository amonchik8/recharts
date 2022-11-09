import classNames from 'classnames';
import { FC } from 'react';
import {
  AreaChart,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  Line,
  BarChart,
  Legend,
  ReferenceLine,
  Bar,
} from 'recharts';
import styles from './Recharts.module.scss';

export interface RechartsProps {
  className?: string;
}

export interface DataTypes {
  name: string;
  sasha: number;
  vova: number;
  oleh: number;
}

const data: DataTypes[] = [
  { name: 'January', sasha: 400, vova: 1400, oleh: 2000 },
  { name: 'February', sasha: 300, vova: 2000, oleh: 2200 },
  { name: 'March', sasha: 100, vova: 1600, oleh: 1700 },
  { name: 'April', sasha: 500, vova: 1600, oleh: 1500 },
  { name: 'May', sasha: 700, vova: 500, oleh: 1000 },
];

const dataNegativeAndPositive: DataTypes[] = [
  {
    name: 'Mon',
    sasha: 4000,
    vova: 2400,
    oleh: 2400,
  },
  {
    name: 'Tue',
    sasha: -3000,
    vova: 1398,
    oleh: 2210,
  },
  {
    name: 'Wed',
    sasha: -2000,
    vova: -3800,
    oleh: 2290,
  },
  {
    name: 'Thu',
    sasha: 2780,
    vova: 3908,
    oleh: 2000,
  },
  {
    name: 'Fri',
    sasha: -1890,
    vova: 4800,
    oleh: 2181,
  },
  {
    name: 'Sat',
    sasha: 2390,
    vova: -3800,
    oleh: 2500,
  },
  {
    name: 'Sun',
    sasha: 3490,
    vova: 4300,
    oleh: 2100,
  },
];

const renderLineChart = (
  <LineChart width={600} height={250} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="sasha" stroke="#1ffff7" />
    <Line type="monotone" dataKey="vova" stroke="#8884d8" />
    <Line type="monotone" dataKey="oleh" stroke="#f884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray={5} />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
);

const renderAreaChart = (
  <AreaChart width={900} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Area type="monotone" dataKey="sasha" stroke="#1ffff7" fill="#1ffff7" />
    <Area type="monotone" dataKey="vova" stroke="#8884d8" fill="#8884d8" />
    <Area type="monotone" dataKey="oleh" stroke="#f884d8" fill="#f884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray={5} />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </AreaChart>
);

const renderBarChart = (
  <BarChart
    width={500}
    height={250}
    data={dataNegativeAndPositive}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <ReferenceLine y={0} stroke="#000" />
    <Bar dataKey="sasha" fill="#8884d8" />
    <Bar dataKey="vova" fill="#82ca9d" />
    <Bar dataKey="oleh" fill="#34a49d" />
  </BarChart>
);

export const Recharts: FC<RechartsProps> = ({ className }) => {
  return (
    <div className={classNames(styles.list, className)}>
      <div className={styles.row}>
        <div className={styles.listItem}>{renderLineChart}</div>
        <div className={styles.listItem}>{renderBarChart}</div>
      </div>
      <div className={styles.listItem}>{renderAreaChart}</div>
    </div>
  );
};

export default Recharts;
