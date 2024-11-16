import React from 'react'
import styles from '../HomeProjects.module.scss'
import Link from 'next/link'
const HomeProjectsHeader = () => {
	return (
		<div className={styles.home__projects__header}>
			<div className={styles.home__projects__header__left}>
				<h3 className={styles.home__projects__header__left__title}>
					<span>#</span>projects
				</h3>
				<div className={styles.home__projects__header__left__line}></div>
			</div>
			<Link href={'/projects'} className={styles.home__projects__header__right}>
				View all ~~{'>'}
			</Link>
		</div>
	)
}

export default HomeProjectsHeader
