import classNames from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';

export interface NavigationProps {
  className?: string;
}

export const Navigation: FC<NavigationProps> = ({ className }) => {
  return (
    <nav className={classNames(styles.navigation, className)}>
      <Link className={styles.link} to="/">
        Home
      </Link>
      <Link className={styles.link} to="/recharts">
        Recharts
      </Link>
      <Link className={styles.link} to="/chart-js">
        Chart.js
      </Link>
      <Link className={styles.link} to="/graph-ql">
        GraphQL&Apollo
      </Link>
    </nav>
  );
};

export default Navigation;
