import classNames from 'classnames';
import { FC, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import cityImage from '../../../assets/images/cityscape.png';
import cloudsImage from '../../../assets/images/sun.png';
import temperatureImage from '../../../assets/images/temperatures.png';
import windImage from '../../../assets/images/wind.png';
import { GET_WEATHER_QUERY } from '../../../graphql/Queries';
import styles from './Graphql.module.scss';

export interface GraphqlProps {
  className?: string;
}

export const Graphql: FC<GraphqlProps> = ({ className }) => {
  const [citySearched, setCitySearched] = useState('');
  const [getWeather, { data, error }] = useLazyQuery(GET_WEATHER_QUERY, {
    variables: { name: citySearched },
  });

  if (error) return <h1>Error found</h1>;

  return (
    <div className={classNames(styles.main, className)}>
      <h1 className={styles.title}>Search for weather</h1>
      <input
        className={styles.input}
        type="text"
        placeholder="City name..."
        onChange={(e) => {
          setCitySearched(e.target.value);
        }}
      />
      <button className={styles.button} onClick={() => getWeather()}>
        Search
      </button>
      {data && (
        <div className={styles.response}>
          <div className={styles.row}>
            <img className={styles.icon} src={cityImage} alt="city" />
            <h2 className={styles.name}>{data.getCityByName.name}</h2>
          </div>
          <div className={styles.row}>
            <img className={styles.icon} src={temperatureImage} alt="temperature" />
            <h2 className={styles.temperature}>Temperature: {data.getCityByName.weather.temperature.actual}</h2>
          </div>
          <div className={styles.row}>
            <img className={styles.icon} src={cloudsImage} alt="cloudsImage" />
            <h2 className={styles.clouds}>Clouds: {data.getCityByName.weather.clouds.all}</h2>
          </div>
          <div className={styles.row}>
            <img className={styles.icon} src={windImage} alt="wind" />
            <h2 className={styles.wind}>Wind speed: {data.getCityByName.weather.wind.speed}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Graphql;
