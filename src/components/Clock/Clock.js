import React, { Component } from 'react';

import styles from './Clock.module.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      date: new Date()
    });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div className={styles.Clock}>
        <div className={styles.ClockTime}>
          {this.state.date.toLocaleTimeString()}
        </div>
      </div>
    );
  }
}

Clock.defaultProps = {
  month: true,
  weekday: true,
};

export default Clock;
