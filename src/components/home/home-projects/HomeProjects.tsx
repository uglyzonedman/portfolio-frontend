import React, { CSSProperties } from 'react'
import styles from './HomeProjects.module.scss'
import Link from 'next/link'
import HomeProjectsHeader from './home-projects-header/HomeProjectsHeader'
import project from '../../../assets/project1.png'
import Image from 'next/image'
import HomeProjectsList from './home-projects-list/HomeProjectsList'
import Container from '../../ui/container/Container'
import HomeProjectsDots from './home-projects-dots/HomeProjectsDots'
const HomeProjects = () => {
	return (
		<section className={styles.home__projects}>
			<HomeProjectsDots />
			<Container>
				<HomeProjectsHeader />
				<HomeProjectsList />
			</Container>
		</section>
	)
}

export default HomeProjects
