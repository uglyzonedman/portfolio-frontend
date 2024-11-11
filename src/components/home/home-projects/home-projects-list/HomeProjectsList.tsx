import React from 'react'
import styles from '../HomeProjects.module.scss'
import project from '../../../../assets/project1.png'
import Image from 'next/image'
import Project from '@/src/components/ui/project/Project'
const HomeProjectsList = () => {
	return (
		<div className={styles.home__projects__list}>
			<Project />
		</div>
	)
}

export default HomeProjectsList
