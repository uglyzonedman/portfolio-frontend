import React from 'react'
import styles from './Projects.module.scss'
import Container from '../ui/container/Container'
import Project from '../ui/project/Project'
import ProjectsHeading from './projects-heading/ProjectsHeading'
const Projects = () => {
	return (
		<div className={styles.projects}>
			<Container>
				<div className={styles.projects__content}>
					<ProjectsHeading />
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
				</div>
			</Container>
		</div>
	)
}

export default Projects
