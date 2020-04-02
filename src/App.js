import React, { Component } from 'react'
import { Server } from "miragejs"

// CUSTOM COMPONENTS
import Header from './components/Header'
import CameraSlot from './components/CameraSlot/CameraSlot'
import CamerasListItem from './components/CamerasListItem/CamerasListItem'

// cameras mocks
import cameras from './mocks/cameras.mocks'

import styles from './App.module.css'

new Server({
  routes() {
    this.namespace = "/api"

    this.get("/cameras", () => cameras)
  },
})

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cameras: []
    }
  }

  async componentDidMount() {
    // get cameras from api
    const response = await fetch('api/cameras')
    const { cameras } = await response.json()

    this.setState({ cameras })
  }

  render() {
    const {
      cameras
    } = this.state

    return (
      <div className={styles.container}>
        <div className={styles.topRow}>
          <Header />
        </div>
        <div className={styles.bottomRow}>
        <div className={styles.mainRow}>
          <aside className={styles.leftColumnOpen}>
            {
              cameras.map(camera => <CamerasListItem {...camera} />)
            }
          </aside>
          <div className={styles.grid_wrapper}>
            <CameraSlot id="a" keyName="a" />
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default App