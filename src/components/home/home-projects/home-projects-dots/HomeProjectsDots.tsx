import React, { CSSProperties } from 'react'
import styles from '../HomeProjects.module.scss'

const HomeProjectsDots = () => {
	return (
		<div className={styles.home__projects__dots}>
			{Array.from({ length: 20 }).map((_, index) => (
				<div
					style={{ '--i': index } as CSSProperties}
					key={index}
					className={styles.home__projects__dots__dot}
				></div>
			))}
		</div>
	)
}

export default HomeProjectsDots
