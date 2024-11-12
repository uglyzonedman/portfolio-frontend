import React from 'react'
import styles from '../Projects.module.scss'
const ProjectsHeading = () => {
	return (
		<div>
			<h3 className={styles.projects__content__title}>
				<span>/</span>projects
			</h3>
			<p className={styles.projects__content__description}>
				List of my projects
			</p>
		</div>
	)
}

export default ProjectsHeading
