import styles from './Statistics.module.css';

import PropTypes from 'prop-types';

import getRandomHexColor from './getRandomHexColor';

function Statistics({ title, stats }) {
  return (
    <section className={styles.section}>
       <h2 className={styles.title}>{title}</h2>

      <ul className={styles.list}>
        {stats.map(stat => (
          <li key={stat.id} className={styles.item} style={{ backgroundColor: getRandomHexColor() }}>
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title:PropTypes.string,
stats:PropTypes.arrayOf(PropTypes.object)
};

export default Statistics;
