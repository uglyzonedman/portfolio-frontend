import React from 'react'
import styles from '../Projects.module.scss'
import Project from '../../ui/project/Project'

const ProjectsList = ({ title, items }: { title: string; items: any[] }) => {
	return (
		<div className={styles.projects__content__complete}>
			<h3 className={styles.projects__content__complete__title}>
				<span>#</span>
				{title}
			</h3>
			<div className={styles.projects__content__complete__items}>
				{items.map(item => (
					<Project key={item.id} />
				))}
			</div>
		</div>
	)
}

export default ProjectsList
