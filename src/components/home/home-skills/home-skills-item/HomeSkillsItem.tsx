import React from 'react'
import styles from '../HomeSkills.module.scss'
const HomeSkillsItem = () => {
	return (
		<div className={styles.home__skills__content__right__items__item}>
			<h3 className={styles.home__skills__content__right__items__item__title}>
				Languages
			</h3>
			<p
				className={
					styles.home__skills__content__right__items__item__description
				}
			>
				TypeScript React SCSS
			</p>
		</div>
	)
}

export default HomeSkillsItem
