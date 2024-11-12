import React, { CSSProperties } from 'react'
import styles from './Dot.module.scss'

const Dot = ({ index }: { index: any }) => {
	return (
		<div
			style={{ '--i': index } as CSSProperties}
			key={index}
			className={styles.dot}
		></div>
	)
}

export default Dot
