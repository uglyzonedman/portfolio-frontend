import React from 'react'
import styles from './Home.module.scss'
import HomeIntro from './home-intro/HomeIntro'
import HomeProjects from './home-projects/HomeProjects'
import HomeSkills from './home-skills/HomeSkills'

const Home = () => {
	return (
		<div className={styles.home}>
			<HomeIntro />
			<HomeProjects />
			<HomeSkills />
		</div>
	)
}

export default Home
