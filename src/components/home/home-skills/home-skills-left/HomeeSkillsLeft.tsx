import React, { CSSProperties } from 'react'
import styles from '../HomeSkills.module.scss'
import Dots from '@/src/components/ui/dot/Dot'
import Dot from '@/src/components/ui/dot/Dot'
const HomeeSkillsLeft = () => {
	return (
		<div className={styles.home__skills__content__left}>
			<div className={styles.home__skills__content__left__dots__upper}>
				{Array.from({ length: 20 }).map((_, index) => (
					<Dot key={index} index={index} />
				))}
			</div>
			<div className={styles.home__skills__content__left__dots__bottom}>
				{Array.from({ length: 20 }).map((_, index) => (
					<Dot index={index} key={index} />
				))}
			</div>
			<div className={styles.home__skills__content__left__block__bottom}></div>
			<div className={styles.home__skills__content__left__purples}>
				<div
					className={styles.home__skills__content__left__purples__left}
				></div>
				<div
					className={styles.home__skills__content__left__purples__right}
				></div>
			</div>
		</div>
	)
}

export default HomeeSkillsLeft
