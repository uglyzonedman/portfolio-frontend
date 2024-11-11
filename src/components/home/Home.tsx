import React from 'react'
import styles from './Home.module.scss'
import HomeIntro from './home-intro/HomeIntro'
import HomeProjects from './home-projects/HomeProjects'

const Home = () => {
	return (
		<div className={styles.home}>
			<div className={styles.home__container}>
				<HomeIntro />
				<HomeProjects />
			</div>
		</div>
	)
}

export default Home
