import React from 'react';

import Clock from '../Clock/Clock';

import routes from './routes'

import styles from './index.module.css';

const Header = () => {

  return (
    <header className={styles.header}>
      <div className={styles.header_left}>
        <div className={styles.header_logo} />
        <div className={styles.header_nav}>
          {
            routes.map(({ id, name, exact, title }) => (
              <a
                id={id}
                key={name}
                href={name}
                className={styles.header_nav_a}
              >
                {title}
              </a>
            ))
          }
        </div>
      </div>
      <div className={styles.header_right}>
        <Clock />
      </div>
    </header>
  );
}

export default Header;
