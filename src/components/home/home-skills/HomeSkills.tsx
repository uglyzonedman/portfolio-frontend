import React, { CSSProperties } from 'react'
import styles from './HomeSkills.module.scss'
import Container from '../../ui/container/Container'
import Headling from '../../ui/headling/Headling'
import HomeSkillsItem from './home-skills-item/HomeSkillsItem'
import HomeeSkillsLeft from './home-skills-left/HomeeSkillsLeft'
import HomeSkillsRight from './home-skills-right/HomeSkillsRight'

const HomeSkills = () => {
	return (
		<div className={styles.home}>
			<div className={styles.home__skills}>
				<Container>
					<Headling
						width={250}
						link='/skills'
						nameLink='View All Skills'
						title='skills'
					/>
					<div className={styles.home__skills__content}>
						<HomeeSkillsLeft />
						<HomeSkillsRight />
					</div>
				</Container>
			</div>
		</div>
	)
}

export default HomeSkills
