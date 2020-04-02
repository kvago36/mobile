import React from 'react'
import ReactGridLayout from 'react-grid-layout'
import sizeMe from 'react-sizeme'

import CameraSlot from '../Camera-slot/CameraSlot'

import styles from './Main.module.css'

const Main = ({
  layout,
  selectedGrid,
  width,
  height,
}) => {
  const rowHeight = Math.floor(height / layout.rows) - 10
  const rowWidth = width
  return (
    <div className={styles.grid_wrapper}>
      <ReactGridLayout
        rowHeight={rowHeight}
        margin={[8, 8]}
        layout={layout.grid}
        cols={layout.columns}
        width={rowWidth}
      >
        {layout.keys.map(key => {
          const keyName = Object.keys(key).find(prop => prop !== 'a_archive')
            return (
              <div key={keyName}>
                <CameraSlot id={keyName} keyName={keyName} />
              </div>
            )
        })}
      </ReactGridLayout>
    </div>
  )
}

export default sizeMe({ monitorHeight: true })(Main)
