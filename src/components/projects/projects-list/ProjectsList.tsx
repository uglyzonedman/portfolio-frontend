import React from 'react'
import styles from '../Projects.module.scss'
import Project from '../../ui/project/Project'

const ProjectsList = () => {
	return (
		<div className={styles.projects__content__complete}>
			<h3 className={styles.projects__content__complete__title}>
				<span>#</span>complete-apps
			</h3>
			<div className={styles.projects__content__complete__items}>
				<Project />
				<Project />
				<Project />
				<Project />
				<Project />
				<Project />
				<Project />
			</div>
		</div>
	)
}

export default ProjectsList
