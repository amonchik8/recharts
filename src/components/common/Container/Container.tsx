import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './Container.module.scss';

export interface ContainerProps {
  className?: string;
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ children, className }) => {
  return <div className={classNames(styles.container, className)}>{children}</div>;
};

export default Container;
