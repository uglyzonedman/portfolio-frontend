import React from 'react'
import styles from './HomeProjects.module.scss'
import Link from 'next/link'
import HomeProjectsHeader from './home-projects-header/HomeProjectsHeader'
import project from '../../../assets/project1.png'
import Image from 'next/image'
import HomeProjectsList from './home-projects-list/HomeProjectsList'
const HomeProjects = () => {
	return (
		<section className={styles.home__projects}>
			<HomeProjectsHeader />
			<HomeProjectsList />
		</section>
	)
}

export default HomeProjects
