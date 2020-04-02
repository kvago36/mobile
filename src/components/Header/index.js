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
                exact={exact}
                className={styles.header_nav_a}
                activeClassName={styles.header_navItem__selected}
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
