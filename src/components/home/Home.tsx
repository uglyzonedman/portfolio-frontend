import React from 'react'
import styles from './Home.module.scss'
import HomeIntro from './home-intro/HomeIntro'
import HomeProjects from './home-projects/HomeProjects'
import HomeSkills from './home-skills/HomeSkills'
import HomeAbout from './home-about/HomeAbout'
import HomeContacts from './home-contacts/HomeContacts'

const Home = () => {
	return (
		<div className={styles.home}>
			<HomeIntro />
			<HomeProjects />
			<HomeSkills />
			<HomeAbout />
			<HomeContacts />
		</div>
	)
}

export default Home
