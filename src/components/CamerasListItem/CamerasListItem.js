import React from 'react'

import Image from '../Image/Image'

import styles from './CamerasListItem.module.css'

const CamerasListItem = ({ id, name, description, ptz }) => {
	return (
		<div className={styles.cameraListItem}>
			<div className={styles.cameraItem}>
				<div className={styles.cameraItem_image}>
					{ ptz && <div className={styles.ptz}>PTZ</div> }
					<Image
						lazy
						classImg={styles.img}
						classLoad={styles.loaderWatch}
						classError={styles.errorWatch}
						customWrapper={styles.imgWrapper}
						classLoaded={styles.imgBorder}
						src={`$cameras/screen/${id}`}
					/>
				</div>

				<div className={styles.cameraItem_info}>
					<div className={styles.cameraItem_name} title={name}>
						{description || name}
					</div>
				</div>
			</div>
		</div>
	)
}


export default CamerasListItem