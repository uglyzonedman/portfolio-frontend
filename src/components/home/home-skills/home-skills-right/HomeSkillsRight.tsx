import React from 'react'
import HomeSkillsItem from '../home-skills-item/HomeSkillsItem'
import styles from '../HomeSkills.module.scss'
const HomeSkillsRight = () => {
	return (
		<div className={styles.home__skills__content__right}>
			<div className={styles.home__skills__content__right}>
				<div className={styles.home__skills__content__right__items}>
					<HomeSkillsItem />
					<HomeSkillsItem />
					<HomeSkillsItem />
					<HomeSkillsItem />
					<HomeSkillsItem />
				</div>
			</div>
		</div>
	)
}

export default HomeSkillsRight
