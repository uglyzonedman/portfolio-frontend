import React from 'react'
import styles from './Projects.module.scss'
import Container from '../ui/container/Container'
import Project from '../ui/project/Project'
import ProjectsHeading from './projects-heading/ProjectsHeading'
import ProjectsList from './projects-list/ProjectsList'
import project from '../../assets/project1.png'
const Projects = () => {
	const completeProjects = [
		{
			id: 1,
			imageLink: project,
			title: 'ProtectX',
			description: 'Discord anti-crash bot',
			link: '',
			code: '',
		},
		{
			id: 2,
			imageLink: project,
			title: 'ProtectX',
			description: 'Discord anti-crash bot',
			link: '',
			code: '',
		},
		{
			id: 3,
			imageLink: project,
			title: 'ProtectX',
			description: 'Discord anti-crash bot',
			link: '',
			code: '',
		},
	]
	return (
		<div className={styles.projects}>
			<Container>
				<div className={styles.projects__content}>
					<ProjectsHeading />
					<ProjectsList title='complete-apps' items={completeProjects} />

					<ProjectsList title='simple-apps' items={completeProjects} />
				</div>
			</Container>
		</div>
	)
}

export default Projects
