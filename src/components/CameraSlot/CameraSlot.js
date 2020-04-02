import React, { Component } from 'react'

import styles from './CameraSlot.module.css'

class CameraSlot extends Component {
  render() {
    const { keyName } = this.props

    return (
      <div className={styles.cameraSlot}>
        <div id={keyName} className={styles.camera_wrap}>
          <h3 className={styles.empty_camera_header}>
            Перетащите камеру из списка
          </h3>
        </div>
      </div>
    )
  }
}


export default CameraSlot
